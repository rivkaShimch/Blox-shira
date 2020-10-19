import React from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Image, Text, Transformer } from 'react-konva';
import useImage from 'use-image';
import Portal from './portal';


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
const Canvas_Preview = (new_preview_template = this.props.new_preview_template) => {
  console.log(new_preview_template.new_preview_template)
  const prv_template = new_preview_template.new_preview_template;

  const dragUrl = React.useRef();
  const stageRef = React.useRef();
  const [images, setImages] = React.useState([]);
  const [selectedId, selectImage] = React.useState(null);
  const [title, setTitle] = React.useState(prv_template.title)
  const [title2, setTitle2] = React.useState(null)
  const [fontStyleTitle, setfontStyleTitle] = React.useState(prv_template.title_type)
  const [fontSizeTitle, setfontSizeTitle] = React.useState(prv_template.title_size)
  const [textColor, setTextColor] = React.useState(prv_template.title_color)
  const [background_color_stage, setBackground_color_stage] = React.useState(null)
  const [background_image, setBackground_image] = React.useState(null)



  const BackgroundImage = (onSelect) => {
    console.log("back img " + prv_template.background_img)
    let full_path = prv_template.background_img
    const [image] = useImage(require("../background_images/" + prv_template.background_img));
    return <Image
      width={stageRef.current.width()}
      height={stageRef.current.height()}
      // onClick={onSelect}
      // onTap={onSelect}
      image={image}
      id="background_image" />;
  };

  const ElementImage = (onSelect) => {
    console.log("elm img " + prv_template.element_img)
    console.log("../background_images/" + prv_template.element_img)
    const [image] = useImage(require("../background_images/" + prv_template.element_img));
    // const [image] = useImage(require("../background_images/pink_b.png"));
    // console.log("width elem " + prv_template.element_width)
    // console.log("height elem " + prv_template.element_height)
    console.log("x elem " + prv_template.element_position_x)
    console.log("y elem " + prv_template.element_position_y)

    return <Image
      width={prv_template.element_width}
      height={prv_template.element_height}
      x={prv_template.element_position_x}
      y={prv_template.element_position_y}
      // onClick={onSelect}
      // onTap={onSelect}
      image={image}
      id="elm_image" />;
  };

  // const handleDragStart = (e) => {
  //   const id = e.target.id();
  //   console.log("id " + id)
  //   const items = images.slice();

  //   // console.log(items)
  //   const item = items.find(i => i.id === id);
  //   const index = items.indexOf(item);
  //   // remove from the list:
  //   items.splice(index, 1);
  //   // add to the top
  //   items.push(item);
  //   setImages(items);
  // };
  // const handleDragEnd = (e) => {
  //   console.log("handleDragend")

  //   const id = e.target.id();
  //   const items = images.slice();
  //   const item = items.find(i => i.id === id);
  //   const index = items.indexOf(item);
  //   // update item position
  //   items[index] = {
  //     ...item,
  //     x: e.target.x(),
  //     y: e.target.y()
  //   };
  //   setImages(items);
  // };

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
      <Stage
        id="my_stage"
        width={window.innerWidth / 2}
        height={window.innerHeight}
        style={{ border: '1px solid grey' }}
        style={background_color_stage ? { background: background_color_stage, border: '1px solid grey' } : { background: "white", border: '1px solid grey' }}
        ref={stageRef}
        onMouseDown={checkDeselect}
        onTouchStart={checkDeselect}
      >
        <Layer>
          <BackgroundImage
            isSelected={0}
            onSelect={() => {
              selectImage(null);
            }} />

          <Text
            text={title}
            // fontStyle="Ariel"
            fontFamily={fontStyleTitle}
            fontSize={fontSizeTitle}
            x={prv_template.title_position_x}
            y={prv_template.title_position_y}
            // draggable
            fill={textColor ? textColor : 'black'}
          // onDragStart={() => {
          // }}
          // onDragEnd={(e) => {
          //   x = e.target.x();
          //   y = e.target.y();
          // }}
          />
          {/* <Text
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
          /> */}

          {/* {images.map((image, i) => {
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
          })} */}
          <ElementImage isSelected={0}
            onSelect={() => {
              selectImage(null);
            }} />
        </Layer>
      </Stage>

    </div>
  );
};
export default Canvas_Preview