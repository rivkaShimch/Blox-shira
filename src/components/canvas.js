import React from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Image, Text, Transformer, Rectangle } from 'react-konva';
import useImage from 'use-image';
import Portal from './portal';

import { connect } from 'react-redux';

import {
  setDataUrl,
  setTitlePositionX,
  setTitlePositionY,
  setTitlesCanvas,
  setUpdateTitlesCanvas,
  setTitlesICanvas,
  setTitlesTextCanvas

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


const TextObj = ({ shapeProps, isSelected, onSelect, onChange }) => {
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
        ref={TextRef}
        {...shapeProps}
        draggable
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
  //               fontStyle={fontStyleTitle}
  //               fontSize={props.canvasDetails.title_size}
  //               align={props.canvasDetails.title_align}
  //               width={props.canvasDetails.title_width}
  //               height={props.canvasDetails.title_height}
  //               x={props.canvasDetails.title_position_x}
  //               y={props.canvasDetails.title_position_y}
  //               drawBorder={false}
  //               draggable
  //               fill={props.canvasDetails.title_color ? props.canvasDetails.title_color : 'black'}

  //   {
  //     x: 10,
  //     y: 10,
  //     width: 100,
  //     height: 100,
  //     id: 'rect1',
  //     text: '1111',
  //     align: 'left'
  //   },
  //   {
  //     x: 150,
  //     y: 150,
  //     width: 100,
  //     height: 100,
  //     fill: 'green',
  //     id: 'rect2',
  //     text: '2222'
  //   },



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
  // const [textArray, setTextArray] = React.useState(props.canvasDetails.titles);
  // const [textArray, setTextArray] = React.useState(initialTextArray);

  const [selectedTextId, selectText] = React.useState(null);


  props.dispatch(setDataUrl(stageRef.current))

  const LionImage = () => {
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
    props.dispatch(setDisplayEditor(''))
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
    <div>
      <div>

        <br />
        {/* <img
          alt="lion"
          src={require('./img/lion.png')}
          draggable="true"
          onDragStart={e => {
            dragUrl.current = e.target.src;

          }}
          style={{ width: "100px" }}
          id="image1"
        />

        <img
          alt="coffee"
          src={require('./img/coffee.jpg')}
          draggable="true"
          onDragStart={e => {
            dragUrl.current = e.target.src;

          }}
          style={{ width: "100px" }}
          id="image2"
        />
        <img
          alt="smaily"
          src={require('./img/smaily.jpg')}
          draggable="true"
          onDragStart={e => {
            dragUrl.current = e.target.src;
          }}
          style={{ width: "100px" }}
          id="image3"
        />
        <img
          alt="ok_pu"
          src={require('./img/ok_pu.jpg')}
          draggable="true"
          onDragStart={e => {
            dragUrl.current = e.target.src;
          }}
          style={{ width: "100px" }}
          id="image4"
        />
        <img
          alt="flowers"
          src={require('./img/flowers.jpg')}
          onDragStart={e => {
            dragUrl.current = e.target.src;
          }}
          style={{ width: "100px" }}
          id="image5"

        />
        <img
          alt="cool"
          src={require('./img/cool.jpg')}
          draggable="true"
          onDragStart={e => {
            dragUrl.current = e.target.src;
          }}
          style={{ width: "100px" }}
          id="image6"
        />
        <img
          alt="clock"
          src={require('./img/clock5.png')}
          draggable="true"
          onDragStart={e => {
            dragUrl.current = e.target.src;

          }}
          style={{ width: "100px" }}
          id="image7"
        /> */}
        <div
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
          <Stage
            id="my_stage"

            width={props.canvasDetails.canvas_width}
            height={props.canvasDetails.canvas_height}
            style={{ border: '1px solid grey' }}
            style={background_color_stage ? {
              background: background_color_stage,
              marginTop: "200px",
              borderStyle: 'dashed',
              borderColor: '#D6CBE3', border: '1px solid grey'
            } : {
                background: "white", border: '1px solid grey', borderStyle: 'dashed',
                borderColor: '#D6CBE3'
              }}
            ref={stageRef}
            onMouseDown={checkDeselect}
            onTouchStart={checkDeselect}

          >
            <Layer>
              {/* <LionImage
              ></LionImage> */}
              {props.canvasDetails.titles.map((text, i) => {
                return (
                  <TextObj
                    key={i}
                    shapeProps={text}
                    isSelected={text.id === selectedTextId}
                    onSelect={() => {
                      selectText(text.id);
                      props.dispatch(setTitlesICanvas(text.id))
                      props.dispatch(setTitlesTextCanvas(text.text, text.id))
                      props.dispatch(setDisplayEditor('title'))
                    }}
                    onChange={(newAttrs) => {
                      props.dispatch(setUpdateTitlesCanvas(newAttrs, i))
                    }}
                  />
                );
              })}

              {/* <Text
                text={props.canvasDetails.titles[0].text}
                fontStyle={fontStyleTitle}
                fontSize={props.canvasDetails.title_size}
                align={props.canvasDetails.title_align}
                width={props.canvasDetails.title_width}
                height={props.canvasDetails.title_height}
                x={props.canvasDetails.title_position_x}
                y={props.canvasDetails.title_position_y}
                drawBorder={false}
                draggable
                fill={props.canvasDetails.title_color ? props.canvasDetails.title_color : 'black'}
                onDragStart={() => {
                }}
                onDragEnd={(e) => {
                  props.dispatch(setTitlePositionX(e.target.x()))
                  console.log("x " + props.canvasDetails.title_position_x)
                  props.dispatch(setTitlePositionY(e.target.y()))
                }}
              /> */}
              <Text
                text={title2}
                fontSize="30"
                // x={z}
                // y={w}
                draggable
                fill={'black'}
                onDragStart={() => {
                }}
                onDragEnd={(e) => {
                  // z = e.target.x();
                  // w = e.target.y();
                }}
              />
              {images.map((image, i) => {
                return <URLImage
                  key={i}
                  shapeProps={image}
                  isSelected={image.id === selectedId}
                  onSelect={() => {
                    selectImage(image.id);
                  }}
                  onChange={(newAttrs) => {
                    const image_arr = images.slice();
                    image_arr[i] = newAttrs;
                    setImages(image_arr);
                  }}
                  image_change={image}
                  // onDragStart={handleDragStart}
                  // onDragEnd={handleDragEnd}
                  image={image} />;
              })}

            </Layer>
          </Stage>

        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  console.log("state canvas  " + state.canvasDetails.canvasDetails)
  return {
    canvasDetails: state.canvasDetails.canvasDetails
  };
}
export default connect(mapStateToProps)(Canvas)