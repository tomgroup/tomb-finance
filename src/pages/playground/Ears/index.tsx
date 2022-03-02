import React, { useEffect, useImperativeHandle, forwardRef, useState } from "react";
import {
  EarsContainer,
  EarsTitle,
  EarsDetail,
  EarsContent,
  EarsItem,
} from "./index.styled";
import { useTypedSelector } from "../../../hooks/useTypeSelector";

const images: { [key: string]: any } = {
  capitalize1: {
    value1: require("../../../assets/parts/Ears/Belieber/(1).png"),
    value2: require("../../../assets/parts/Ears/Belieber/(2).png"),
    value3: require("../../../assets/parts/Ears/Belieber/(3).png"),
    value4: require("../../../assets/parts/Ears/Belieber/(4).png"),
    value5: require("../../../assets/parts/Ears/Belieber/(5).png"),
    value6: require("../../../assets/parts/Ears/Belieber/(6).png"),
    value7: require("../../../assets/parts/Ears/Belieber/(7).png"),
    value8: require("../../../assets/parts/Ears/Belieber/(8).png"),
    value9: require("../../../assets/parts/Ears/Belieber/(9).png"),
    key: "Ears1",
    string: "Belieber",
    id: "1",
  },
  capitalize2: {
    value1: require("../../../assets/parts/Ears/BubbleMaker/(1).png"),
    value2: require("../../../assets/parts/Ears/BubbleMaker/(2).png"),
    value3: require("../../../assets/parts/Ears/BubbleMaker/(3).png"),
    value4: require("../../../assets/parts/Ears/BubbleMaker/(4).png"),
    value5: require("../../../assets/parts/Ears/BubbleMaker/(5).png"),
    value6: require("../../../assets/parts/Ears/BubbleMaker/(6).png"),
    value7: require("../../../assets/parts/Ears/BubbleMaker/(7).png"),
    value8: require("../../../assets/parts/Ears/BubbleMaker/(8).png"),
    value9: require("../../../assets/parts/Ears/BubbleMaker/(9).png"),
    key: "Ears2",
    string: "BubbleMaker",
    id: "2",
  },
  capitalize3: {
    value1: require("../../../assets/parts/Ears/Hollow/(1).png"),
    value2: require("../../../assets/parts/Ears/Hollow/(2).png"),
    value3: require("../../../assets/parts/Ears/Hollow/(3).png"),
    value4: require("../../../assets/parts/Ears/Hollow/(4).png"),
    value5: require("../../../assets/parts/Ears/Hollow/(5).png"),
    value6: require("../../../assets/parts/Ears/Hollow/(6).png"),
    value7: require("../../../assets/parts/Ears/Hollow/(7).png"),
    value8: require("../../../assets/parts/Ears/Hollow/(8).png"),
    value9: require("../../../assets/parts/Ears/Hollow/(9).png"),
    key: "Ears3",
    string: "Hollow",
    id: "3",
  },
  capitalize4: {
    value1: require("../../../assets/parts/Ears/Lamb/(1).png"),
    value2: require("../../../assets/parts/Ears/Lamb/(2).png"),
    value3: require("../../../assets/parts/Ears/Lamb/(3).png"),
    value4: require("../../../assets/parts/Ears/Lamb/(4).png"),
    value5: require("../../../assets/parts/Ears/Lamb/(5).png"),
    value6: require("../../../assets/parts/Ears/Lamb/(6).png"),
    value7: require("../../../assets/parts/Ears/Lamb/(7).png"),
    value8: require("../../../assets/parts/Ears/Lamb/(8).png"),
    value9: require("../../../assets/parts/Ears/Lamb/(9).png"),
    key: "Ears4",
    string: "Lamb",
    id: "4",
  },
  capitalize5: {
    value1: require("../../../assets/parts/Ears/leafy/(1).png"),
    value2: require("../../../assets/parts/Ears/leafy/(2).png"),
    value3: require("../../../assets/parts/Ears/leafy/(3).png"),
    value4: require("../../../assets/parts/Ears/leafy/(4).png"),
    value5: require("../../../assets/parts/Ears/leafy/(5).png"),
    value6: require("../../../assets/parts/Ears/leafy/(6).png"),
    value7: require("../../../assets/parts/Ears/leafy/(7).png"),
    value8: require("../../../assets/parts/Ears/leafy/(8).png"),
    value9: require("../../../assets/parts/Ears/leafy/(9).png"),
    key: "Ears5",
    id: "5",
  },
  capitalize6: {
    value1: require("../../../assets/parts/Ears/Nutcracler/(1).png"),
    value2: require("../../../assets/parts/Ears/Nutcracler/(2).png"),
    value3: require("../../../assets/parts/Ears/Nutcracler/(3).png"),
    value4: require("../../../assets/parts/Ears/Nutcracler/(4).png"),
    value5: require("../../../assets/parts/Ears/Nutcracler/(5).png"),
    value6: require("../../../assets/parts/Ears/Nutcracler/(6).png"),
    value7: require("../../../assets/parts/Ears/Nutcracler/(7).png"),
    value8: require("../../../assets/parts/Ears/Nutcracler/(8).png"),
    value9: require("../../../assets/parts/Ears/Nutcracler/(9).png"),
    key: "Ears6",
    string: "Nutcracler",
    id: "6",
  },
  capitalize7: {
    value1: require("../../../assets/parts/Ears/Nyan/(1).png"),
    value2: require("../../../assets/parts/Ears/Nyan/(2).png"),
    value3: require("../../../assets/parts/Ears/Nyan/(3).png"),
    value4: require("../../../assets/parts/Ears/Nyan/(4).png"),
    value5: require("../../../assets/parts/Ears/Nyan/(5).png"),
    value6: require("../../../assets/parts/Ears/Nyan/(6).png"),
    value7: require("../../../assets/parts/Ears/Nyan/(7).png"),
    value8: require("../../../assets/parts/Ears/Nyan/(8).png"),
    value9: require("../../../assets/parts/Ears/Nyan/(9).png"),
    key: "Ears7",
    string: "Nyan",
    id: "7",
  },
  capitalize8: {
    value1: require("../../../assets/parts/Ears/Puppy/(1).png"),
    value2: require("../../../assets/parts/Ears/Puppy/(2).png"),
    value3: require("../../../assets/parts/Ears/Puppy/(3).png"),
    value4: require("../../../assets/parts/Ears/Puppy/(4).png"),
    value5: require("../../../assets/parts/Ears/Puppy/(5).png"),
    value6: require("../../../assets/parts/Ears/Puppy/(6).png"),
    value7: require("../../../assets/parts/Ears/Puppy/(7).png"),
    value8: require("../../../assets/parts/Ears/Puppy/(8).png"),
    value9: require("../../../assets/parts/Ears/Puppy/(9).png"),
    key: "Ears8",
    string: "Puppy",
    id: "8",
  },
  capitalize9: {
    value1: require("../../../assets/parts/Ears/Swirl/(1).png"),
    value2: require("../../../assets/parts/Ears/Swirl/(2).png"),
    value3: require("../../../assets/parts/Ears/Swirl/(3).png"),
    value4: require("../../../assets/parts/Ears/Swirl/(4).png"),
    value5: require("../../../assets/parts/Ears/Swirl/(5).png"),
    value6: require("../../../assets/parts/Ears/Swirl/(6).png"),
    value7: require("../../../assets/parts/Ears/Swirl/(7).png"),
    value8: require("../../../assets/parts/Ears/Swirl/(8).png"),
    value9: require("../../../assets/parts/Ears/Swirl/(9).png"),
    key: "Ears9",
    string: "Swirl",
    id: "9",
  },
  capitalize10: {
    value1: require("../../../assets/parts/Ears/tassels/(1).png"),
    value2: require("../../../assets/parts/Ears/tassels/(2).png"),
    value3: require("../../../assets/parts/Ears/tassels/(3).png"),
    value4: require("../../../assets/parts/Ears/tassels/(4).png"),
    value5: require("../../../assets/parts/Ears/tassels/(5).png"),
    value6: require("../../../assets/parts/Ears/tassels/(6).png"),
    value7: require("../../../assets/parts/Ears/tassels/(7).png"),
    value8: require("../../../assets/parts/Ears/tassels/(8).png"),
    value9: require("../../../assets/parts/Ears/tassels/(9).png"),
    key: "Ears10",
    string: "tassels",
    id: "10",
  },
  capitalize11: {
    value1: require("../../../assets/parts/Ears/Tinyfan/(1).png"),
    value2: require("../../../assets/parts/Ears/Tinyfan/(2).png"),
    value3: require("../../../assets/parts/Ears/Tinyfan/(3).png"),
    value4: require("../../../assets/parts/Ears/Tinyfan/(4).png"),
    value5: require("../../../assets/parts/Ears/Tinyfan/(5).png"),
    value6: require("../../../assets/parts/Ears/Tinyfan/(6).png"),
    value7: require("../../../assets/parts/Ears/Tinyfan/(7).png"),
    value8: require("../../../assets/parts/Ears/Tinyfan/(8).png"),
    value9: require("../../../assets/parts/Ears/Tinyfan/(9).png"),
    key: "Ears11",
    string: "Tinyfan",
    id: "11",
  },
  capitalize12: {
    value1: require("../../../assets/parts/Ears/Zen/(1).png"),
    value2: require("../../../assets/parts/Ears/Zen/(2).png"),
    value3: require("../../../assets/parts/Ears/Zen/(3).png"),
    value4: require("../../../assets/parts/Ears/Zen/(4).png"),
    value5: require("../../../assets/parts/Ears/Zen/(5).png"),
    value6: require("../../../assets/parts/Ears/Zen/(6).png"),
    value7: require("../../../assets/parts/Ears/Zen/(7).png"),
    value8: require("../../../assets/parts/Ears/Zen/(8).png"),
    value9: require("../../../assets/parts/Ears/Zen/(9).png"),
    key: "Ears12",
    string: "Zen",
    id: "12",
  },
};

type EarsProps = {
  SetEars: Function;
  visible: boolean;
};
const Ears = forwardRef((props: EarsProps, ref) => {
  const { SetEars, visible } = props;
  const [ getEarsColor, SetEarsColor ] = useState(1);
  const [ getText, setText ] = useState("");
  const { index } = useTypedSelector((state) => state.color);
  const setItem = (e: any) => {
    SetEars(e.target.src);
    SetEarsColor(e.target.id);
    setText(e.target.alt);
    for (let i = 1; i <= 12; i++) {
      document.getElementById("Ears" + i)?.classList.remove("border");
    }
    document.getElementById("Ears" + e.target.id)?.classList.add("border");
  };

  const setRandItem = () => {
    var Rnum = Math.floor(Math.random() * 12 + 1);
    SetEars(images[`capitalize${Rnum}`][`value${index}`]);
    setText(images[`capitalize${Rnum}`]["string"]);
    SetEarsColor(Rnum);
    for (let i = 1; i <= 12; i++) {
      document.getElementById("Ears" + i)?.classList.remove("border");
    }
    document.getElementById("Ears" + Rnum)?.classList.add("border");
  };

  const setRandItemVal = (colVal: Number) => {
    var Rnum = Math.floor(Math.random() * 12 + 1);
    SetEars(images[`capitalize${Rnum}`][`value${colVal}`]);
    setText(images[`capitalize${Rnum}`]["string"]);
    SetEarsColor(Rnum);
    for (let i = 1; i <= 12; i++) {
      document.getElementById("Ears" + i)?.classList.remove("border");
    }
    document.getElementById("Ears" + Rnum)?.classList.add("border");
  };

  const setRandItemColor = () => {
    SetEars(images[`capitalize${getEarsColor}`][`value${index}`]);
    setText(images[`capitalize${getEarsColor}`]["string"]);
    for (let i = 1; i <= 12; i++) {
      document.getElementById("Ears" + i)?.classList.remove("border");
    }
    document.getElementById("Ears" + getEarsColor)?.classList.add("border");
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
    <EarsContainer>
      <EarsTitle>
        Ears <span>{getText}</span>
      </EarsTitle>
      <EarsDetail>Power: 190</EarsDetail>
      <EarsContent>
        {Object.values(images).map((image: any) => (
          <EarsItem id={image.key} key={image.key}>
            <img
              id={image.id}
              src={image[`value${index}`]}
              alt={image.string}
              onClick={(e: any) => setItem(e)}
            />
          </EarsItem>
        ))}
      </EarsContent>
    </EarsContainer>: <></>
  );
});

export default Ears;
