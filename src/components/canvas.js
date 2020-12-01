import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Image, Text, Transformer, Rect, Line } from 'react-konva';
import useImage from 'use-image';
// import './canvas.css'
import Portal from './Portal.js'
import ContextMenu from "./ContextMenu";
import axios from 'axios'
import { connect } from 'react-redux';

import {
  setDataUrl,
  setUpdateTitlesCanvas,
  setTitlesICanvas,
  setTitlesTextCanvas,
  updateElementsCanvas,
  setElementsICanvas,
  removedTitlesCanvas,
  setTitlesCanvas,
  setCounterTitles,
  updateTextPreHistory,
  updateTextFollowingHistory,
  addPreHistory,

  setButtonsICanvas,
  setShapesICanvas,

  setUpdateButtonsCanvas,
  setUpdateShapesCanvas,

} from '../redux/actions/canvasActions'
import {
  setDisplayEditor

} from '../redux/actions/componentsActions'
// import { createBootstrapComponent } from 'react-bootstrap/esm/ThemeProvider';

const URLImage = ({ image, image_change, shapeProps, isSelected, onSelect, onChange }) => {
  const [img_id] = useImage(image_change.id);
  const imageRef = React.useRef();
  const trRef = React.useRef();
  const [img] = useImage(image.src);
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
        ref={imageRef}
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
          const node = imageRef.current;
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

const ButtonsObj = ({ button, button_change, shapeProps, isSelected, onSelect, onChange }) => {
  // const [buttons_i] = useImage(button_change.id);
  const ButtonRef = React.useRef();
  const trRefButton = React.useRef();

  React.useEffect(() => {
    if (isSelected) {
      console.log("נכנס לפונקציה is select")
      // we need to attach transformer manually
      trRefButton.current.nodes([ButtonRef.current]);
      trRefButton.current.getLayer().batchDraw();
    }
  }, [isSelected]);
  return (
    <React.Fragment>
      <Rect
        x={30}
        y={30}
        id={button.buttons_i}
        width={button.width}
        height={button.height}
        offsetX={button ? button.width / 2 : 0}
        offsetY={button ? button.height / 2 : 0}
        fill={button.fill}
        stroke={button.stroke}
        strokeWidth={button.strokeWidth}
        // cornerRadius={20}

        shadowBlur={button.shadowBlur}
        //  drawBorder={true}
        onClick={onSelect}
        onTap={onSelect}
        onMouseEnter={onSelect}
        ref={ButtonRef}
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

          const node = ButtonRef.current;
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
      {
        isSelected &&
        (
          <Transformer

            ref={trRefButton}
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

const ShapeObj = ({ shape, shape_change, shapeProps, isSelected, onSelect, onChange }) => {
  // const [shapes_i] = useImage(shape_change.id);
  const shapeRef = React.useRef();
  const trRefShape = React.useRef();
  let boundBoxFunc

  React.useEffect(() => {
    if (isSelected) {
      console.log("נכנס לפונקציה is select")
      // we need to attach transformer manually
      trRefShape.current.nodes([shapeRef.current]);
      trRefShape.current.getLayer().batchDraw();



    }
  }, [isSelected]);
  return (
    <React.Fragment>
      <Line
        id={shape.shapes_i}
        x={100}
        y={100}
        points={shape.points}
        tension={shape.tension}
        shadowBlur={shape.shadowBlur}
        draggable
        closed

        stroke={shape.stroke}
        strokeWidth={shape.strokeWidth}
        fill={shape.fill}
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
          debugger
          const node = shapeRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();
          debugger
          // we will reset it back
          node.scaleX(1);
          node.scaleY(1);
          let arr_p = node.points()
          // arr_p.map((i) => {
          arr_p[2] *= scaleX
          arr_p[4] *= scaleX
          arr_p[5] *= scaleX
          arr_p[7] *= scaleX
          let newBox = boundBoxFunc
          // })
          onChange({
            ...shapeProps,
            ...newBox,
            x: node.x(),
            y: node.y(),
            // set minimal value
            // points: arr_p
            // width: Math.max(5, node.width() * scaleX),
            // height: Math.max(node.height() * scaleY),
          });
        }}

      />
      {
        isSelected &&
        (
          <Transformer

            ref={trRefShape}
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
  const dragUrl = React.useRef();
  const stageRef = React.useRef(null);
  const [images, setImages] = React.useState([]);
  const [buttons, setButtons] = React.useState([]);
  const [shapes, setShapes] = React.useState([]);
  const [selectedId, selectImage] = React.useState(null);

  const [selectedButtonId, selectButton] = React.useState(null);
  const [selectedShapeId, selectShape] = React.useState(null);
  // const [title, setTitle] = React.useState(null)
  const [loadImage, setLoadImage] = React.useState(null)
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

    if (option === 'Delete') {
      props.dispatch(removedTitlesCanvas(selectedTextId))
      props.dispatch(setDisplayEditor(''))
    }
    else if (option === 'Duplicate') {
      console.log("duplicate " + selectedTextId)
      let dupTitle = {
        id: props.canvasDetails.counter_titles,
        x: props.canvasDetails.titles[props.canvasDetails.titles_i].x + 10,
        y: props.canvasDetails.titles[props.canvasDetails.titles_i].y + 10,
        width: props.canvasDetails.titles[props.canvasDetails.titles_i].width,
        height: props.canvasDetails.titles[props.canvasDetails.titles_i].height,
        text: props.canvasDetails.titles[props.canvasDetails.titles_i].text,
        align: props.canvasDetails.titles[props.canvasDetails.titles_i].align,
        fill: props.canvasDetails.titles[props.canvasDetails.titles_i].fill,
        fontSize: props.canvasDetails.titles[props.canvasDetails.titles_i].fontSize,
        display: props.canvasDetails.titles[props.canvasDetails.titles_i].display,
        preText: [],
        followText: []
      }
      props.dispatch(setCounterTitles(props.canvasDetails.counter_titles + 1))
      props.dispatch(setTitlesCanvas(dupTitle))
    }
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

  // const BackgroundImage = () => {
  //   const [image] = useImage(require('../background_images/galim_b.jpg'));
  //   return <Image
  //     width={stageRef.current.width()}
  //     height={stageRef.current.height()}
  //     onTouchStart={checkDeselectBackground}
  //     onMouseDown={checkDeselectBackground}
  //     // onTap={onSelect}
  //     image={image}
  //     id="background_image" />;
  // };
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




  const handleDragStart_button = (e) => {
    const id = e.target.id();
    console.log("id " + id)
    const items = buttons.slice();

    // console.log(items)
    const item = items.find(i => i.id === id);
    const index = items.indexOf(item);
    // remove from the list:
    items.splice(index, 1);
    // add to the top
    items.push(item);
    setButtons(items);
  };
  const handleDragEnd_button = (e) => {
    console.log("handleDragend")

    const id = e.target.id();
    const items = buttons.slice();
    const item = items.find(i => i.id === id);
    const index = items.indexOf(item);
    // update item position
    items[index] = {
      ...item,
      x: e.target.x(),
      y: e.target.y()
    };
    setButtons(items);
  };

  const handleDragStart_shape = (e) => {
    const id = e.target.id();
    console.log("id " + id)
    const items = shapes.slice();

    // console.log(items)
    const item = items.find(i => i.id === id);
    const index = items.indexOf(item);
    // remove from the list:
    items.splice(index, 1);
    // add to the top
    items.push(item);
    setShapes(items);
  };
  const handleDragEnd_shape = (e) => {
    console.log("handleDragend")

    const id = e.target.id();
    const items = shapes.slice();
    const item = items.find(i => i.id === id);
    const index = items.indexOf(item);
    // update item position
    items[index] = {
      ...item,
      x: e.target.x(),
      y: e.target.y()
    };
    setShapes(items);
  };




  // const _handleClick = (event) => {
  //   event.preventDefault();

  //   this.setState({ visible: true });

  //   const clickX = event.clientX;
  //   const clickY = event.clientY;
  //   const screenW = window.innerWidth;
  //   const screenH = window.innerHeight;
  //   const rootW = this.root.offsetWidth;
  //   const rootH = this.root.offsetHeight;

  //   const right = (screenW - clickX) > rootW;
  //   const left = !right;
  //   const top = (screenH - clickY) > rootH;
  //   const bottom = !top;

  //   if (right) {
  //     console.log("blblblblllllblblblblblblblbl")
  //     this.root.style.left = `${clickX + 5}px`;
  //   }

  //   //   if (left) {
  //   //     this.root.style.left = `${clickX - rootW - 5}px`;
  //   //   }

  //   //   if (top) {
  //   //     this.root.style.top = `${clickY + 5}px`;
  //   //   }

  //   //   if (bottom) {
  //   //     this.root.style.top = `${clickY - rootH - 5}px`;
  //   //   }
  //   // }


  const checkDeselect = (e) => {
    // deselect when clicked on empty area
    const clickedOnEmpty = e.target === e.target.getStage();
    console.log("stage is " + clickedOnEmpty)
    if (clickedOnEmpty) {
      selectImage(null);
      selectText(null);
      selectButton(null);
      selectShape(null);
    }

  };
  const checkDeselectBackground = (e) => {
    // deselect when clicked on empty area
    const clickedOnEmpty = e.target.text === undefined
    console.log("checkDeselectBackground is " + clickedOnEmpty)
    if (clickedOnEmpty) {
      selectImage(null);
      selectText(null);
      setSelectedContextMenu(null);
      selectButton(null);
      selectShape(null);

    }
    props.dispatch(setDisplayEditor('background'))
  };

  return (
    <>
      <div style={{ marginTop: "28vh", marginLeft: "6vw", width: "650px", height: "400px", border: '3px dashed #D6CBE3' }} >
        <div ref={inputRef} onMouseEnter={() => {
          setPosition_div_x(inputRef.current.getBoundingClientRect().x);
          setPosition_div_y(inputRef.current.getBoundingClientRect().y);
        }}>

          {/*

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
        > <ContextMenu outerRef={outerRef} />
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
            ref={stageRef}

            width={props.canvasDetails.canvas_width}
            height={props.canvasDetails.canvas_height}
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
                if (props.canvasDetails.titles[i].display !== false) {
                  return (
                    <TextObj
                      key={i}
                      shapeProps={text}
                      isSelected={text.id === selectedTextId}
                      handleContextMenu={handleContextMenu}

                      onSelect={() => {
                        selectText(text.id);
                        props.dispatch(setTitlesICanvas(text.id - (props.canvasDetails.removed_titles).length))
                        props.dispatch(setTitlesTextCanvas(text.text, text.id - (props.canvasDetails.removed_titles).length))
                        props.dispatch(setDisplayEditor('title'))
                      }}
                      onChange={(newAttrs) => {
                        debugger
                        props.dispatch(addPreHistory({ text: text.id }))
                        props.dispatch(setUpdateTitlesCanvas(newAttrs, text.id))
                        props.dispatch(updateTextPreHistory(text.id, text))

                      }}
                    />
                  );
                }

              })}
              {props.canvasDetails.element_img.map((image, i) => {

                return (
                  <URLImage
                    key={i}
                    shapeProps={image}
                    isSelected={image.id === selectedId}
                    onSelect={() => {
                      selectImage(image.id);
                      props.dispatch(setElementsICanvas(image.id))
                      props.dispatch(setDisplayEditor('image'))
                    }}
                    onChange={(newAttrs) => {
                      props.dispatch(updateElementsCanvas(newAttrs, i))
                    }}
                    image_change={image}
                    onDragStart={handleDragStart}
                    onDragEnd={handleDragEnd}
                    image={image} />);
              })}
              {props.canvasDetails.buttons.map((button, i) => {
                if (props.canvasDetails.buttons[i].display === true) {
                  return (
                    <ButtonsObj
                      key={i}
                      shapeProps={button}
                      isSelected={button.id === selectedButtonId}
                      onSelect={() => {

                        selectButton(button.id);
                        props.dispatch(setButtonsICanvas(button.id))
                        props.dispatch(setDisplayEditor('button'))
                      }}
                      onChange={(newAttrs) => {
                        props.dispatch(setUpdateButtonsCanvas(newAttrs, i))
                      }}
                      button_change={button}
                      onDragStart={handleDragStart_button}
                      onDragEnd={handleDragEnd_button}
                      button={button} />)
                }
              })}
              {props.canvasDetails.shapes.map((shape, i) => {
                if (props.canvasDetails.shapes[i].display === true) {
                  return (
                    <ShapeObj
                      key={i}
                      shapeProps={shape}
                      isSelected={shape.id === selectedShapeId}
                      onSelect={() => {

                        selectShape(shape.id);
                        props.dispatch(setShapesICanvas(shape.id))
                        props.dispatch(setDisplayEditor('shape'))
                      }}
                      onChange={(newAttrs) => {
                        debugger
                        props.dispatch(setUpdateShapesCanvas(newAttrs, i))
                      }}
                      shape_change={shape}
                      onDragStart={handleDragStart_shape}
                      onDragEnd={handleDragEnd_shape}
                      shape={shape} />)
                }
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