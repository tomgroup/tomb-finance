import React, { useEffect, useImperativeHandle, forwardRef, useState } from "react";
import { getColor } from "../../../redux/actionCreators/getColor";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../../hooks/useTypeSelector";

import {
  ColorContainer,
  ColorTitle,
  ColorDetail,
  ColorContent,
  ColorItem,
} from "./index.styled";

const images: { [key: string]: any } = {
  capitalize1: {
    value: require("../../../assets/parts/color/1.png"),
    key: "Color1",
    string: "Green",
    id: "1",
  },
  capitalize2: {
    value: require("../../../assets/parts/color/2.png"),
    key: "Color2",
    string: "Gray",
    id: "2",
  },
  capitalize3: {
    value: require("../../../assets/parts/color/3.png"),
    key: "Color3",
    string: "Pink",
    id: "3",
  },
  capitalize4: {
    value: require("../../../assets/parts/color/4.png"),
    key: "Color4",
    string: "Purple",
    id: "4",
  },
  capitalize5: {
    value: require("../../../assets/parts/color/5.png"),
    key: "Color5",
    string: "Red",
    id: "5",
  },
  capitalize6: {
    value: require("../../../assets/parts/color/6.png"),
    key: "Color6",
    string: "Blue",
    id: "6",
  },
  capitalize7: {
    value: require("../../../assets/parts/color/7.png"),
    key: "Color7",
    string: "Dark Blue",
    id: "7",
  },
  capitalize8: {
    value: require("../../../assets/parts/color/8.png"),
    key: "Color8",
    string: "Orange",
    id: "8",
  },
  capitalize9: {
    value: require("../../../assets/parts/color/9.png"),
    key: "Color9",
    string: "Yellow",
    id: "9",
  },
};

type ColorProps = {
  SetColor: Function;
  visible: any;
};
const Color = forwardRef(({ SetColor, visible }: ColorProps, ref) => {
  const dispatch = useDispatch();
  const [ getText, setText ] = useState("");
  const setItem = (e: any) => {
    SetColor(e.target.id);
    setText(e.target.alt);
    dispatch(getColor(e.target.id));

    for (let i = 1; i <= 9; i++) {
      document.getElementById("Color" + i)?.classList.remove("border");
    }
    document.getElementById("Color" + e.target.id)?.classList.add("border");
  };

  const setRandItem = () => {
    var Rnum = Math.floor(Math.random() * 9 + 1);
    SetColor(Rnum);
    setText(images[`capitalize${Rnum}`]["string"]);
    // dispatch(getColor(Rnum));
    for (let i = 1; i <= 9; i++) {
      document.getElementById("Color" + i)?.classList.remove("border");
    }
    document.getElementById("Color" + Rnum)?.classList.add("border");
  };

  const setRandItemVal = (colVal: Number) => {
    SetColor(colVal);
    setText(images[`capitalize${colVal}`]["string"]);
    for (let i = 1; i <= 9; i++) {
      document.getElementById("Color" + i)?.classList.remove("border");
    }
    document.getElementById("Color" + colVal)?.classList.add("border");
  };

  useEffect(() => {
    setRandItem();
    dispatch(getColor(Math.floor(Math.random() * 9 + 1)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useImperativeHandle(ref, () => ({
    RandomNumber(colVal:Number) {
      setRandItemVal(colVal);
    },
  }));

  return (
    visible?
    <ColorContainer>
      
      <ColorTitle>
        Color <span>{getText}</span>
      </ColorTitle>
      <ColorDetail>Power: 400</ColorDetail>
      <ColorContent>
        {Object.values(images).map((image: any) => (
          <ColorItem id={image.key} key={image.key}>
            <img
              id={image.id}
              src={image.value}
              alt={image.string}
              onClick={(e: any) => setItem(e)}
            />
          </ColorItem>
        ))}
      </ColorContent>
    </ColorContainer>: <></>
  );
});

export default Color;
