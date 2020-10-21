import React from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Image, Text, Transformer } from 'react-konva';
import useImage from 'use-image';
import Portal from './portal';

import { connect } from 'react-redux';



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
var x = 50;
var y = 50;
var w = 100;
var z = 100;
const Canvas = (props) => {
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



  const LionImage = (onSelect) => {
    const [image] = useImage(require('../background_images/green_b.png'));
    return <Image
      width={stageRef.current.width()}
      height={stageRef.current.height()}
      // onClick={onSelect}
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
    if (clickedOnEmpty || selectedId === 0) {
      selectImage(null);
    }

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
    downloadURI(dataURL.toDataURL(), 'my_banner.png');
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
      {/* <nav className="navbar navbar-expand-lg">
        <div className="collpase navbar-collpase">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <button variant="primary" onClick={onClickDownload} className="nav-link btn btn-primary">Download</button>
            </li>
          </ul>
        </div>
        <div className="collpase navbar-collpase">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <input id="bold_input" style={{ display: "none" }}></input>
              <button id="bold_button" className="btn btn-primary" onClick={onClickBold} style={{ display: "block" }}>bold</button>
            </li>
          </ul>
        </div>
        <div className="collpase navbar-collpase">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">

            </li>
          </ul>
        </div>
        <div className="collpase navbar-collpase">
          <ul className="navbar-nav mr-auto column">
            <li className="navbar-item">
              <label for="cars">Change font size: </label>
              <select id="font_size_option" onChange={onChangeFontSize}>
                <option value="12">12</option>
                <option value="14">14</option>
                <option value="24">24</option>
                <option value="36">36</option>
                <option value="72">72</option>
              </select>
              <br></br>
            </li>
          </ul>
        </div>

        <div className="collpase navbar-collpase">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <input type="color" id="text_color_input" onChange={onChangeTextColor} name="favcolor" />
            </li>
          </ul>
        </div>
        {/* <div className="d-flex" style={{ display: "none" }} id="images_div">
          <span>
            <h5>Change Background Color: </h5>
            <input type="color" id="background_color_input" onChange={onChangeBackgroundColor} name="favcolor" />
          </span>
        </div> }



        <div className="d-flex" style={{ display: "none" }} id="images_div">
          <span>
            <h5 id="add_image_title" style={{ display: "none" }}>Upload your images</h5>
            <input style={{ display: "none" }} type="file" className="btn" id="files" name="files[]" multiple />
          </span>
        </div>

      </nav > */}
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
            width={300}
            height={300}
            style={{ border: '1px solid grey' }}
            style={background_color_stage ? { background: background_color_stage, border: '1px solid grey' } : { background: "white", border: '1px solid grey' }}
            ref={stageRef}
            onMouseDown={checkDeselect}
            onTouchStart={checkDeselect}

          >
            {/* <Layer><LionImage /></Layer> */}
            <Layer>
              {/* <LionImage
                isSelected={0}
                onSelect={() => {
                  selectImage(null);
                }}


              ></LionImage> */}
              <Text
                text={props.canvasDetails.titles}
                fontStyle={fontStyleTitle}
                fontSize={fontSizeTitle}
                x={x}
                y={y}
                drawBorder={true}
                draggable
                fill={textColor ? textColor : 'black'}
                onDragStart={() => {
                }}
                onDragEnd={(e) => {
                  x = e.target.x();
                  y = e.target.y();
                }}
              />
              <Text
                text={title2}
                fontSize="30"
                x={z}
                y={w}
                draggable
                fill={'black'}
                onDragStart={() => {
                }}
                onDragEnd={(e) => {
                  z = e.target.x();
                  w = e.target.y();
                }}
              />
              {/* <Portal>
                  <input
                    style={{
                      width: '200px',
                      border: '0 solid'
                    }}
                    placeholder="Write your title here"
                    onKeyPress={(e) => {
                      setTitle(e.target.value);
                    }}
                    id="input_title"
                  />
                  <input
                    style={{
                      width: '200px',
                      border: '0 solid'
                    }}
                    placeholder="Write your title here"
                    onKeyPress={(e) => {
                      setTitle2(e.target.value);
                    }}
                    id="input_title2"
                  />
                </Portal> */}
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