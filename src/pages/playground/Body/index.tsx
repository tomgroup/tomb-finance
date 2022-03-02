import React, { forwardRef, useImperativeHandle, useEffect, useState } from "react";
import {
  BodyContainer,
  BodyTitle,
  BodyDetail,
  BodyContent,
  BodyItem,
} from "./index.styled";
import { useTypedSelector } from "../../../hooks/useTypeSelector";

const images: { [key: string]: any } = {
  capitalize1: {
    value1: require("../../../assets/parts/body/Big Yak/(1).png"),
    value2: require("../../../assets/parts/body/Big Yak/(2).png"),
    value3: require("../../../assets/parts/body/Big Yak/(3).png"),
    value4: require("../../../assets/parts/body/Big Yak/(4).png"),
    value5: require("../../../assets/parts/body/Big Yak/(5).png"),
    value6: require("../../../assets/parts/body/Big Yak/(6).png"),
    value7: require("../../../assets/parts/body/Big Yak/(7).png"),
    value8: require("../../../assets/parts/body/Big Yak/(8).png"),
    value9: require("../../../assets/parts/body/Big Yak/(9).png"),
    key: "body1",
    string: "Big Yak",
    id: "1",
  },
  capitalize2: {
    value1: require("../../../assets/parts/body/Fluffy/(1).png"),
    value2: require("../../../assets/parts/body/Fluffy/(2).png"),
    value3: require("../../../assets/parts/body/Fluffy/(3).png"),
    value4: require("../../../assets/parts/body/Fluffy/(4).png"),
    value5: require("../../../assets/parts/body/Fluffy/(5).png"),
    value6: require("../../../assets/parts/body/Fluffy/(6).png"),
    value7: require("../../../assets/parts/body/Fluffy/(7).png"),
    value8: require("../../../assets/parts/body/Fluffy/(8).png"),
    value9: require("../../../assets/parts/body/Fluffy/(9).png"),
    key: "body2",
    string: "Fluffy",
    id: "2",
  },
  capitalize3: {
    value1: require("../../../assets/parts/body/normal/(1).png"),
    value2: require("../../../assets/parts/body/normal/(2).png"),
    value3: require("../../../assets/parts/body/normal/(3).png"),
    value4: require("../../../assets/parts/body/normal/(4).png"),
    value5: require("../../../assets/parts/body/normal/(5).png"),
    value6: require("../../../assets/parts/body/normal/(6).png"),
    value7: require("../../../assets/parts/body/normal/(7).png"),
    value8: require("../../../assets/parts/body/normal/(8).png"),
    value9: require("../../../assets/parts/body/normal/(9).png"),
    key: "body3",
    string: "normal",
    id: "3",
  },
  capitalize4: {
    value1: require("../../../assets/parts/body/Snow/(1).png"),
    value2: require("../../../assets/parts/body/Snow/(2).png"),
    value3: require("../../../assets/parts/body/Snow/(3).png"),
    value4: require("../../../assets/parts/body/Snow/(4).png"),
    value5: require("../../../assets/parts/body/Snow/(5).png"),
    value6: require("../../../assets/parts/body/Snow/(6).png"),
    value7: require("../../../assets/parts/body/Snow/(7).png"),
    value8: require("../../../assets/parts/body/Snow/(8).png"),
    value9: require("../../../assets/parts/body/Snow/(9).png"),
    key: "body4",
    string: "Snow",
    id: "4",
  },
  capitalize5: {
    value1: require("../../../assets/parts/body/Spiky/(1).png"),
    value2: require("../../../assets/parts/body/Spiky/(2).png"),
    value3: require("../../../assets/parts/body/Spiky/(3).png"),
    value4: require("../../../assets/parts/body/Spiky/(4).png"),
    value5: require("../../../assets/parts/body/Spiky/(5).png"),
    value6: require("../../../assets/parts/body/Spiky/(6).png"),
    value7: require("../../../assets/parts/body/Spiky/(7).png"),
    value8: require("../../../assets/parts/body/Spiky/(8).png"),
    value9: require("../../../assets/parts/body/Spiky/(9).png"),
    key: "body5",
    string: "Spiky",
    id: "5",
  },
  capitalize6: {
    value1: require("../../../assets/parts/body/Sumo/(1).png"),
    value2: require("../../../assets/parts/body/Sumo/(2).png"),
    value3: require("../../../assets/parts/body/Sumo/(3).png"),
    value4: require("../../../assets/parts/body/Sumo/(4).png"),
    value5: require("../../../assets/parts/body/Sumo/(5).png"),
    value6: require("../../../assets/parts/body/Sumo/(6).png"),
    value7: require("../../../assets/parts/body/Sumo/(7).png"),
    value8: require("../../../assets/parts/body/Sumo/(8).png"),
    value9: require("../../../assets/parts/body/Sumo/(9).png"),
    key: "body6",
    string: "Sumo",
    id: "6",
  },
  capitalize7: {
    value1: require("../../../assets/parts/body/wetdog/(1).png"),
    value2: require("../../../assets/parts/body/wetdog/(2).png"),
    value3: require("../../../assets/parts/body/wetdog/(3).png"),
    value4: require("../../../assets/parts/body/wetdog/(4).png"),
    value5: require("../../../assets/parts/body/wetdog/(5).png"),
    value6: require("../../../assets/parts/body/wetdog/(6).png"),
    value7: require("../../../assets/parts/body/wetdog/(7).png"),
    value8: require("../../../assets/parts/body/wetdog/(8).png"),
    value9: require("../../../assets/parts/body/wetdog/(9).png"),
    key: "body7",
    string: "wetdog",
    id: "7",
  },
};

type BodyProps = {
  SetBody: Function;
  visible: boolean;
};

const Body = forwardRef((props: BodyProps, ref) => {
  const { SetBody, visible } = props;
  const [ getBodyColor, SetBodyColor ] = useState(1);
  const [ getText, setText ] = useState("");
  const { index } = useTypedSelector((state) => state.color);
  const setItem = (e: any) => {
    SetBodyColor(e.target.id);
    SetBody(e.target.src);
    setText(e.target.alt);
    for (let i = 1; i <= 7; i++) {
      document.getElementById("body" + i)?.classList.remove("border");
    }
    document.getElementById("body" + e.target.id)?.classList.add("border");
  };

  const setRandItem = () => {
    var Rnum = Math.floor(Math.random() * 7 + 1);
    SetBody(images[`capitalize${Rnum}`][`value${index}`]);
    setText(images[`capitalize${Rnum}`]["string"]);
    SetBodyColor(Rnum);
    for (let i = 1; i <= 7; i++) {
      document.getElementById("body" + i)?.classList.remove("border");
    }
    document.getElementById("body" + Rnum)?.classList.add("border");
  };

  const setRandItemVal = (colVal: Number) => {
    var Rnum = Math.floor(Math.random() * 7 + 1);
    SetBody(images[`capitalize${Rnum}`][`value${colVal}`]);
    setText(images[`capitalize${Rnum}`]["string"]);
    SetBodyColor(Rnum);
    for (let i = 1; i <= 7; i++) {
      document.getElementById("body" + i)?.classList.remove("border");
    }
    document.getElementById("body" + Rnum)?.classList.add("border");
  };

  const setRandItemColor = () => {
    SetBody(images[`capitalize${getBodyColor}`][`value${index}`]);
    setText(images[`capitalize${getBodyColor}`]["string"]);
    for (let i = 1; i <= 7; i++) {
      document.getElementById("body" + i)?.classList.remove("border");
    }
    document.getElementById("body" + getBodyColor)?.classList.add("border");
  };

  useEffect(() => {
    setRandItem();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setRandItemColor();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  useImperativeHandle(ref, () => ({
    RandomNumber(colVal: Number) {
      setRandItemVal(colVal);
    },
  }));

  return (
    visible?
    <BodyContainer>
      <BodyTitle>
        Body <span>{getText}</span>
      </BodyTitle>
      <BodyDetail>Power: 80</BodyDetail>
      <BodyContent>
        {Object.values(images).map((image: any) => (
          <BodyItem id={image.key} key={image.key}>
            <img
              id={image.id}
              src={image[`value${index}`]}
              alt={image.string}
              onClick={(e: any) => setItem(e)}
            />
          </BodyItem>
        ))}
      </BodyContent>
    </BodyContainer>: <></>
  );
});

export default Body;
