import React, { useState, useEffect } from 'react';
import { Grid, Cell } from 'react-konva-grid'

import { render } from 'react-dom';
import { Stage, Layer, Image as KonvaImage, Text, Transformer, Rect, Line } from 'react-konva';

import useImage from 'use-image';
// import './canvas.css'
import Portal from './portal.js'
import ContextMenu from "./ContextMenu";
import axios from 'axios'
import { connect } from 'react-redux';
import Wrap from './Wrap/wrap';

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
  const trRefImage = React.useRef();
  const [img, setImg] = useState(null)

  React.useEffect(() => {
    const newImage = new window.Image()
    newImage.src = image.src;
    newImage.onload = () => {
      // setState will redraw layer
      // because "image" property is changed
      setImg(newImage)
    }

    if (isSelected) {
      // we need to attach transformer manually
      trRefImage.current.nodes([imageRef.current]);
      trRefImage.current.getLayer().batchDraw();
    }

  }, [img, isSelected])
  return (
    <React.Fragment>
      <KonvaImage
        image={img}
        x={image.x}
        y={image.y}
        id={img_id}
        offsetX={img ? img.width / 2 : 0}
        offsetY={img ? img.height / 2 : 0}
        onClick={onSelect}
        onTap={onSelect}
        //onMouseEnter={onSelect}
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
        onTransformEnd={(e) => {
          const node = imageRef.current;
          node.scaleX();
          node.scaleY();
          onChange({
            ...shapeProps,
            x: node.x(),
            y: node.y(),
            scaleX: e.target.scaleX(),
            scaleY: e.target.scaleY()
          });
        }}
      />
      {isSelected && (
        <Transformer
          ref={trRefImage}
          boundBoxFunc={(oldBox, newBox) => {
            // limit resize
            if (newBox.width < 5 || newBox.height < 5) {
              return oldBox;
            }
            return newBox;
          }}
        />)}
    </React.Fragment>
  );
};














const ButtonsObj = ({ button, button_change, shapeProps, isSelected, onSelect, onChange }) => {
  // const [buttons_i] = useImage(button_change.id);
  const buttonRef = React.useRef();
  const trRefButton = React.useRef();
  let boundBoxFunc

  React.useEffect(() => {
    if (isSelected) {
      // we need to attach transformer manually
      trRefButton.current.nodes([buttonRef.current]);
      trRefButton.current.getLayer().batchDraw();
    }
  }, [isSelected]);
  return (
    <React.Fragment>
      <Group
        ref={buttonRef}
        name="group"
        x={20}
        y={29}
        width={120}
        height={60}
        fill="gray"
        draggable
        onClick={onSelect}
        // onTap={onSelect}
        //onMouseEnter={onSelect}

        {...shapeProps}
        draggable
        dragboun
        onTransformEnd={(e) => {
          const node = buttonRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();
          // we will reset it back
          node.scaleX();
          node.scaleY();

          onChange({
            ...shapeProps,
            ...newBox,
            x: node.x(),
            y: node.y(),
            // set minimal value

          });
        }}

      >
        <Rect
          name="rect"
          fill={button.fill}
          width={100}
          height={50}
          shadowColor="black"
          shadowBlur={button.shadowBlur}
          shadowOpacity={0.3}
        />
        <Text
          name="text"
          fontSize={16}
          fontFamily="Calibri"
          fill={button.textFill}
          width={100}
          padding={15}
          align="center"
          text={button.text}
        />

      </Group>


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

        opacity={shape.strokeWidth}
        fill={shape.fill}
        onClick={onSelect}
        // onTap={onSelect}
        //onMouseEnter={onSelect}
        ref={shapeRef}
        {...shapeProps}
        draggable
        dragboun


        onTransformEnd={(e) => {
          const node = shapeRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();
          node.scaleX();
          node.scaleY();
   
          onChange({
            ...shapeProps,
            // ...newBox,
            x: node.x(),
            y: node.y(),
            scaleX: e.target.scaleX(),
            scaleY: e.target.scaleY()
           
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

const TextObj = ({ shapeProps, isSelected, onSelect, onChange, handleContextMenu, blabla }) => {
  const TextRef = React.useRef();
  const trRefText = React.useRef();
  let boundBoxFunc

  React.useEffect(() => {
    if (isSelected) {
      // we need to attach transformer manually
      // trRefText.current.nodes([TextRef.current]);
      trRefText.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  return (
    <React.Fragment>
      <Text
        onClick={onSelect}
        onTap={onSelect}
        // onMouseEnter={onSelect}
        onContextMenu={handleContextMenu}

        // onDragStart={blabla}
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
          const node = TextRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();
          node.scaleX();
          node.scaleY();

          onChange({
            ...shapeProps,
            ...newBox,
            x: node.x(),
            y: node.y(),
            scaleX: e.target.scaleX(),
            scaleY: e.target.scaleY()
            
          });
        }}

      />
      {
        isSelected &&
        (
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
  const [selectedImageId, selectImage] = React.useState(null);

  const [selectedButtonId, selectButton] = React.useState(null);
  const [selectedShapeId, selectShape] = React.useState(null);
  // const [title, setTitle] = React.useState(null)
  const [loadImage, setLoadImage] = React.useState(null)
  // const [fontStyleTitle, setfontStyleTitle] = React.useState(null)
  // const [fontSizeTitle, setfontSizeTitle] = React.useState(null)
  // const [textColor, setTextColor] = React.useState(null)
  // const [background_color_stage, setBackground_color_stage] = React.useState(null)
  const [background_image, setBackground_image] = React.useState(null)
  const [selectedTextId, selectText] = React.useState(null);
  const [tryu, setTry] = React.useState(0);

  const inputRef = React.useRef();
  props.dispatch(setDataUrl(stageRef.current))

  const [selectedContextMenu, setSelectedContextMenu] = React.useState(null)
  // const [isDragging, setisDragging] = React.useState(null)
  const [position_div_x, setPosition_div_x] = React.useState(null)
  const [position_div_y, setPosition_div_y] = React.useState(null)
  const [position_title_x, setPosition_title_x] = React.useState(null)

  // const [isDragging, setisDragging] = React.useState(false)
  // state = {
  //   isDragging: false,
  //   x: 50,
  //   y: 50
  // };









  const handleOptionSelected = (option) => {

    if (option === 'Delete') {
      props.dispatch(removedTitlesCanvas(selectedTextId))
      props.dispatch(setDisplayEditor(''))
    }
    else if (option === 'Duplicate') {
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
        scaleX: props.canvasDetails.titles[props.canvasDetails.titles_i].scaleX,
        scaleY: props.canvasDetails.titles[props.canvasDetails.titles_i].scaleY,
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
  const blabla = (e) => {
    console.log("blablabla----------blablabla")
    e.evt.preventDefault(true); // NB!!!! Remember the ***TRUE***
    const rty = e.target.getClassName();
    console.log("blablablablablabla" + rty)

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
    const items = images.slice();
    const item = items.find(i => i.id === id);
    const index = items.indexOf(item);
    // remove from the list:
    items.splice(index, 1);
    // add to the top
    items.push(item);
    setImages(items);
  };
  const handleDragEnd = (e) => {
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
    const items = buttons.slice();
    const item = items.find(i => i.id === id);
    const index = items.indexOf(item);
    // remove from the list:
    items.splice(index, 1);
    // add to the top
    items.push(item);
    setButtons(items);
  };
  const handleDragEnd_button = (e) => {
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
    const items = shapes.slice();
    const item = items.find(i => i.id === id);
    const index = items.indexOf(item);
    // remove from the list:
    items.splice(index, 1);
    // add to the top
    items.push(item);
    setShapes(items);
  };
  const handleDragEnd_shape = (e) => {
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
  const checkDeselect = (e) => {
    // deselect when clicked on empty area
    const clickedOnEmpty = e.target === e.target.getStage();
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
      <div style={{ width: props.canvasDetails.width_canva * props.canvasDetails.sliderInput + 10, height: props.canvasDetails.height_canva * props.canvasDetails.sliderInput + 7, border: '3px dashed #D6CBE3' }} >
        <div ref={inputRef} onMouseEnter={() => {
          setPosition_div_x(inputRef.current.getBoundingClientRect().x);
          setPosition_div_y(inputRef.current.getBoundingClientRect().y);
        }}>
          <Stage
            id="my_stage"
            ref={stageRef}
            scaleX={props.canvasDetails.sliderInput}
            scaleY={props.canvasDetails.sliderInput}
            width={props.canvasDetails.width_canva * props.canvasDetails.sliderInput}
            height={props.canvasDetails.height_canva * props.canvasDetails.sliderInput}
            onMouseDown={checkDeselect}
            onTouchStart={checkDeselect}
          >

            <Layer>

              <Rect

                onMouseDown={checkDeselectBackground}
                onTouchStart={checkDeselectBackground}
                // //onMouseEnter={checkDeselectBackground}
                width={props.canvasDetails.width_canva}
                height={props.canvasDetails.height_canva}
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
                      // onDragStart={blabla}
                      onSelect={() => {
                        selectText(text.id);
                        props.dispatch(setTitlesICanvas(text.id - (props.canvasDetails.removed_titles).length))
                        props.dispatch(setTitlesTextCanvas(text.text, text.id - (props.canvasDetails.removed_titles).length))
                        props.dispatch(setDisplayEditor('title'))
                      }}
                      onChange={(newAttrs) => {
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
                    isSelected={image.id === selectedImageId}
                    onSelect={() => {
                      debugger
                      selectText(null);
                      setSelectedContextMenu(null);
                      selectButton(null);
                      selectShape(null);
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
                        selectText(null);
                        setSelectedContextMenu(null);
                        selectShape(null);
                        selectImage(null);
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
                        selectText(null);
                        selectImage(null);
                        setSelectedContextMenu(null);
                        selectButton(null);
                        props.dispatch(setShapesICanvas(shape.id))
                        props.dispatch(setDisplayEditor('shape'))
                      }}
                      onChange={(newAttrs) => {

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
  return {
    canvasDetails: state.canvasDetails.canvasDetails,
    displayComponents: state.displayComponents.displayComponents

  };
}
export default connect(mapStateToProps)(Canvas)




