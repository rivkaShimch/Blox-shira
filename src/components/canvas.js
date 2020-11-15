import React from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Image, Text, Transformer, Rect } from 'react-konva';
import useImage from 'use-image';
import './canvas.css'
import Portal from './portal.js'
import ContextMenu from "./ContextMenu";
import { connect } from 'react-redux';

import {
  setDataUrl,
  setUpdateTitlesCanvas,
  setTitlesICanvas,
  setTitlesTextCanvas,
  updateElementsCanvas,
  setElementsICanvas,
  removedTitlesCanvas

} from '../redux/actions/canvasActions'
import {
  setDisplayEditor

} from '../redux/actions/componentsActions'


const URLImage = ({ image, image_change, shapeProps, isSelected, onSelect, onChange }) => {
  const [img] = useImage(image.src);
  const [img_id] = useImage(image_change.id);
  const shapeRef = React.useRef();
  const trRef = React.useRef();

  React.useEffect(() => {
    if (isSelected) {
      // we need to attach transformer manually
      trRef.current.nodes([shapeRef.current]);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  return (
    <React.Fragment>
      <Image
        image={img}
        x={image.x}
        y={image.y}
        id={img_id}
        // I will use offset to set origin to the center of the image
        offsetX={img ? img.width / 2 : 0}
        offsetY={img ? img.height / 2 : 0}
        onClick={onSelect}
        onTap={onSelect}
        onMouseEnter={onSelect}
        ref={shapeRef}
        {...shapeProps}
        draggable
        onDragEnd={(e) => {
          onChange({
            ...shapeProps,
            x: e.target.x(),
            y: e.target.y(),
          });
        }}
        // onDragStart={onDragStart}
        onTransformEnd={(e) => {
          // transformer is changing scale of the node
          // and NOT its width or height
          // but in the store we have only width and height
          // to match the data better we will reset scale on transform end
          const node = shapeRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();

          // we will reset it back
          node.scaleX(1);
          node.scaleY(1);
          onChange({
            ...shapeProps,
            x: node.x(),
            y: node.y(),
            // set minimal value
            width: Math.max(5, node.width() * scaleX),
            height: Math.max(node.height() * scaleY),
          });
        }}
      // onDragStart={handleDragStart}
      // onDragEnd={handleDragEnd}
      />
      {isSelected && (
        <Transformer
          ref={trRef}
          boundBoxFunc={(oldBox, newBox) => {
            // limit resize
            if (newBox.width < 5 || newBox.height < 5) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </React.Fragment>
  );
};


const TextObj = ({ shapeProps, isSelected, onSelect, onChange, handleContextMenu }) => {
  const TextRef = React.useRef();
  const trRefText = React.useRef();

  React.useEffect(() => {
    if (isSelected) {
      // we need to attach transformer manually
      trRefText.current.nodes([TextRef.current]);
      trRefText.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  return (
    <React.Fragment>
      <Text
        onClick={onSelect}
        onTap={onSelect}
        onMouseEnter={onSelect}
        onContextMenu={handleContextMenu}
        ref={TextRef}
        {...shapeProps}

        draggable
        drawBorder={true}
        onDragEnd={(e) => {
          onChange({
            ...shapeProps,
            x: e.target.x(),
            y: e.target.y(),
          });
        }}
        onTransformEnd={(e) => {
          // transformer is changing scale of the node
          // and NOT its width or height
          // but in the store we have only width and height
          // to match the data better we will reset scale on transform end
          const node = TextRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();
          // we will reset it back
          node.scaleX(1);
          node.scaleY(1);
          onChange({
            ...shapeProps,
            x: node.x(),
            y: node.y(),
            // set minimal value
            width: Math.max(5, node.width() * scaleX),
            height: Math.max(node.height() * scaleY),
          });
        }}
      />
      {isSelected && (
        <Transformer
          ref={trRefText}
          boundBoxFunc={(oldBox, newBox) => {
            // limit resize
            if (newBox.width < 5 || newBox.height < 5) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </React.Fragment>
  );
};


const Canvas = (props) => {
  const initialTextArray = props.canvasDetails.titles
  const dragUrl = React.useRef();
  const stageRef = React.useRef();
  const [images, setImages] = React.useState([]);
  const [selectedId, selectImage] = React.useState(null);
  // const [title, setTitle] = React.useState(null)
  const [title2, setTitle2] = React.useState(null)
  const [fontStyleTitle, setfontStyleTitle] = React.useState(null)
  const [fontSizeTitle, setfontSizeTitle] = React.useState(null)
  const [textColor, setTextColor] = React.useState(null)
  const [background_color_stage, setBackground_color_stage] = React.useState(null)
  const [background_image, setBackground_image] = React.useState(null)
  const [selectedTextId, selectText] = React.useState(null);
  const inputRef = React.useRef();

  props.dispatch(setDataUrl(stageRef.current))

  const [selectedContextMenu, setSelectedContextMenu] = React.useState(null)
  const [position_div_x, setPosition_div_x] = React.useState(null)
  const [position_div_y, setPosition_div_y] = React.useState(null)



  const handleOptionSelected = (option) => {
    console.log(stageRef.current);

    if (option === 'Delete') {
      props.dispatch(removedTitlesCanvas(selectedTextId))
    }
    console.log(option);
    setSelectedContextMenu(null);
  };
  const handleContextMenu = (e) => {
    e.evt.preventDefault(true); // NB!!!! Remember the ***TRUE***
    const mousePosition = e.target.getStage().getPointerPosition();

    setSelectedContextMenu({
      type: "START",
      position: mousePosition
    }
    );
  };


  const BackgroundImage = () => {
    const [image] = useImage(require('../background_images/galim_b.jpg'));
    return <Image
      width={stageRef.current.width()}
      height={stageRef.current.height()}
      onTouchStart={checkDeselectBackground}
      onMouseDown={checkDeselectBackground}
      // onTap={onSelect}
      image={image}
      id="background_image" />;
  };

  const handleDragStart = (e) => {
    const id = e.target.id();
    console.log("id " + id)
    const items = images.slice();

    // console.log(items)
    const item = items.find(i => i.id === id);
    const index = items.indexOf(item);
    // remove from the list:
    items.splice(index, 1);
    // add to the top
    items.push(item);
    setImages(items);
  };
  const handleDragEnd = (e) => {
    console.log("handleDragend")

    const id = e.target.id();
    const items = images.slice();
    const item = items.find(i => i.id === id);
    const index = items.indexOf(item);
    // update item position
    items[index] = {
      ...item,
      x: e.target.x(),
      y: e.target.y()
    };
    setImages(items);
  };
  const _handleClick = (event) => {
    event.preventDefault();

    this.setState({ visible: true });

    const clickX = event.clientX;
    const clickY = event.clientY;
    const screenW = window.innerWidth;
    const screenH = window.innerHeight;
    const rootW = this.root.offsetWidth;
    const rootH = this.root.offsetHeight;

    const right = (screenW - clickX) > rootW;
    const left = !right;
    const top = (screenH - clickY) > rootH;
    const bottom = !top;
    console.log("hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii")
    if (right) {
      this.root.style.left = `${clickX + 5}px`;
    }

    if (left) {
      this.root.style.left = `${clickX - rootW - 5}px`;
    }

    if (top) {
      this.root.style.top = `${clickY + 5}px`;
    }

    if (bottom) {
      this.root.style.top = `${clickY - rootH - 5}px`;
    }
  }


  const checkDeselect = (e) => {
    // deselect when clicked on empty area
    const clickedOnEmpty = e.target === e.target.getStage();
    console.log("stage is " + clickedOnEmpty)
    if (clickedOnEmpty) {
      selectImage(null);
      selectText(null);
    }

  };
  const checkDeselectBackground = (e) => {
    // deselect when clicked on empty area
    const clickedOnEmpty = e.target.text === undefined
    console.log("checkDeselectBackground is " + clickedOnEmpty)
    if (clickedOnEmpty) {
      selectImage(null);
      selectText(null);
    }
    props.dispatch(setDisplayEditor('background'))
  };

  const downloadURI = (uri, name) => {
    var link = document.createElement('a');
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    delete link.click;
  }

  const onClickDownload = (e) => {
    console.log("in onClickDownload");
    // let stage_to_download = document.getElementById('my_stage');
    console.log(stageRef.current)
    var dataURL = stageRef.current
    downloadURI(dataURL.toDataURL(), 'my_template.png');
  }
  const onClickBold = (e) => {
    console.log("in onClickBold");
    setfontStyleTitle("bold");
  }
  const onChangeFontSize = (e) => {
    console.log("in onSelectFontSize");
    setfontSizeTitle(e.target.value);

  }
  const onChangeTextColor = (e) => {
    console.log("in onChangeTextColor");
    setTextColor(e.target.value);

  }
  const onChangeBackgroundColor = (e) => {
    console.log("in onBackgroundColor");
    setBackground_color_stage(e.target.value);

  }

  return (


    <>
      <div style={{ marginTop: "28vh", marginLeft: "6vw", width: "650px", height: "400px", border: '3px dashed #D6CBE3' }} >
        <div ref={inputRef} onMouseEnter={() => {
          setPosition_div_x(inputRef.current.getBoundingClientRect().x);
          setPosition_div_y(inputRef.current.getBoundingClientRect().y); console.log(inputRef.current.getBoundingClientRect())
        }}
          onDrop={e => {
            // register event position
            stageRef.current.setPointersPositions(e);
            // add image
            setImages(
              images.concat([
                {
                  ...stageRef.current.getPointerPosition(),
                  src: dragUrl.current
                }
              ])
            );
          }}
          onDragOver={e => e.preventDefault()}
        >
          {/* <ContextMenu outerRef={outerRef} />
          <table ref={outerRef}>yyyyy
            <tbody ref={outerRef}>
              <tr id="row1">
                <td>
                  <input type="checkbox" />
                </td>
                <td>Smbc</td>
                <td>20</td>
              </tr>
              <tr id="row2">
                <td>
                  <input type="checkbox" />
                </td>
                <td>Xkcd</td>
                <td>30</td>
              </tr>
            </tbody>
          </table>
          <ContextMenu outerRef={outerRef} /> */}
          <Stage
            id="my_stage"

            width={props.canvasDetails.canvas_width}
            height={props.canvasDetails.canvas_height}
            // style={{
            //   border: '3px dashed #D6CBE3'
            // }
            // }


            onMouseDown={checkDeselect}
            onTouchStart={checkDeselect}

          >
            <Layer>

              <Rect

                onMouseDown={checkDeselectBackground}
                onTouchStart={checkDeselectBackground}
                // onMouseEnter={checkDeselectBackground}
                width={props.canvasDetails.canvas_width}
                height={props.canvasDetails.canvas_height}
                fill={props.canvasDetails.background_color === '' ? 'white' : props.canvasDetails.background_color}
              />
              {props.canvasDetails.titles.map((text, i) => {

                // if (props.canvasDetails.removed_titles.length === 0 || props.canvasDetails.removed_titles[0].id !== i)
                return (
                  <TextObj
                    key={i}
                    shapeProps={text}
                    isSelected={text.id === selectedTextId}
                    handleContextMenu={handleContextMenu}

                    onSelect={() => {
                      selectText(text.id);
                      props.dispatch(setTitlesICanvas(text.id))
                      props.dispatch(setTitlesTextCanvas(text.text, text.id))
                      props.dispatch(setDisplayEditor('title'))
                    }}
                    onChange={(newAttrs) => {
                      props.dispatch(setUpdateTitlesCanvas(newAttrs, text.id))
                    }}
                  />
                );
              })}

              {props.canvasDetails.element_img.map((image, i) => {
                return <URLImage
                  key={i}
                  shapeProps={image}
                  isSelected={image.id === selectedId}
                  onSelect={() => {
                    selectImage(image.id);
                    props.dispatch(setElementsICanvas(image.id))
                    // props.dispatch(setTitlesTextCanvas(text.text, text.id))
                    props.dispatch(setDisplayEditor('image'))
                  }}
                  onChange={(newAttrs) => {
                    props.dispatch(updateElementsCanvas(newAttrs, i))
                  }}
                  image_change={image}
                  // onDragStart={handleDragStart}
                  // onDragEnd={handleDragEnd}
                  image={image} />;
              })}
              {selectedContextMenu && (
                <Portal>
                  <ContextMenu
                    {...selectedContextMenu}
                    onOptionSelected={handleOptionSelected}
                    position_div_x={position_div_x}
                    position_div_y={position_div_y}

                  />
                </Portal>
              )}
            </Layer>
          </Stage>
        </div>
      </div>
    </>


  );
};

function mapStateToProps(state) {
  console.log("state canvas  " + state.canvasDetails.canvasDetails)
  return {
    canvasDetails: state.canvasDetails.canvasDetails,
    displayComponents: state.displayComponents.displayComponents

  };
}
export default connect(mapStateToProps)(Canvas)