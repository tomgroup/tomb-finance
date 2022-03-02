import React, { useEffect, useImperativeHandle, forwardRef, useState } from "react";
import {
  EyesContainer,
  EyesTitle,
  EyesDetail,
  EyesContent,
  EyesItem,
} from "./index.styled";
import { useTypedSelector } from "../../../hooks/useTypeSelector";

const images: { [key: string]: any } = {
  capitalize1: {
    value1: require("../../../assets/parts/Eyes/Blossom/(1).png"),
    value2: require("../../../assets/parts/Eyes/Blossom/(2).png"),
    value3: require("../../../assets/parts/Eyes/Blossom/(3).png"),
    value4: require("../../../assets/parts/Eyes/Blossom/(4).png"),
    value5: require("../../../assets/parts/Eyes/Blossom/(5).png"),
    value6: require("../../../assets/parts/Eyes/Blossom/(6).png"),
    value7: require("../../../assets/parts/Eyes/Blossom/(7).png"),
    value8: require("../../../assets/parts/Eyes/Blossom/(8).png"),
    value9: require("../../../assets/parts/Eyes/Blossom/(9).png"),
    key: "Eyes1",
    string: "Blossom",
    id: "1",
  },
  capitalize2: {
    value1: require("../../../assets/parts/Eyes/Chubby/(1).png"),
    value2: require("../../../assets/parts/Eyes/Chubby/(2).png"),
    value3: require("../../../assets/parts/Eyes/Chubby/(3).png"),
    value4: require("../../../assets/parts/Eyes/Chubby/(4).png"),
    value5: require("../../../assets/parts/Eyes/Chubby/(5).png"),
    value6: require("../../../assets/parts/Eyes/Chubby/(6).png"),
    value7: require("../../../assets/parts/Eyes/Chubby/(7).png"),
    value8: require("../../../assets/parts/Eyes/Chubby/(8).png"),
    value9: require("../../../assets/parts/Eyes/Chubby/(9).png"),
    key: "Eyes2",
    string: "Chubby",
    id: "2",
  },
  capitalize3: {
    value1: require("../../../assets/parts/Eyes/Confused/(1).png"),
    value2: require("../../../assets/parts/Eyes/Confused/(2).png"),
    value3: require("../../../assets/parts/Eyes/Confused/(3).png"),
    value4: require("../../../assets/parts/Eyes/Confused/(4).png"),
    value5: require("../../../assets/parts/Eyes/Confused/(5).png"),
    value6: require("../../../assets/parts/Eyes/Confused/(6).png"),
    value7: require("../../../assets/parts/Eyes/Confused/(7).png"),
    value8: require("../../../assets/parts/Eyes/Confused/(8).png"),
    value9: require("../../../assets/parts/Eyes/Confused/(9).png"),
    key: "Eyes3",
    string: "Confused",
    id: "3",
  },
  capitalize4: {
    value1: require("../../../assets/parts/Eyes/CoolGlasses/(1).png"),
    value2: require("../../../assets/parts/Eyes/CoolGlasses/(2).png"),
    value3: require("../../../assets/parts/Eyes/CoolGlasses/(3).png"),
    value4: require("../../../assets/parts/Eyes/CoolGlasses/(4).png"),
    value5: require("../../../assets/parts/Eyes/CoolGlasses/(5).png"),
    value6: require("../../../assets/parts/Eyes/CoolGlasses/(6).png"),
    value7: require("../../../assets/parts/Eyes/CoolGlasses/(7).png"),
    value8: require("../../../assets/parts/Eyes/CoolGlasses/(8).png"),
    value9: require("../../../assets/parts/Eyes/CoolGlasses/(9).png"),
    key: "Eyes4",
    string: "CoolGlasses",
    id: "4",
  },
  capitalize5: {
    value1: require("../../../assets/parts/Eyes/Dot/(1).png"),
    value2: require("../../../assets/parts/Eyes/Dot/(2).png"),
    value3: require("../../../assets/parts/Eyes/Dot/(3).png"),
    value4: require("../../../assets/parts/Eyes/Dot/(4).png"),
    value5: require("../../../assets/parts/Eyes/Dot/(5).png"),
    value6: require("../../../assets/parts/Eyes/Dot/(6).png"),
    value7: require("../../../assets/parts/Eyes/Dot/(7).png"),
    value8: require("../../../assets/parts/Eyes/Dot/(8).png"),
    value9: require("../../../assets/parts/Eyes/Dot/(9).png"),
    key: "Eyes5",
    string: "Dot",
    id: "5",
  },
  capitalize6: {
    value1: require("../../../assets/parts/Eyes/Gero/(1).png"),
    value2: require("../../../assets/parts/Eyes/Gero/(2).png"),
    value3: require("../../../assets/parts/Eyes/Gero/(3).png"),
    value4: require("../../../assets/parts/Eyes/Gero/(4).png"),
    value5: require("../../../assets/parts/Eyes/Gero/(5).png"),
    value6: require("../../../assets/parts/Eyes/Gero/(6).png"),
    value7: require("../../../assets/parts/Eyes/Gero/(7).png"),
    value8: require("../../../assets/parts/Eyes/Gero/(8).png"),
    value9: require("../../../assets/parts/Eyes/Gero/(9).png"),
    key: "Eyes6",
    string: "Gero",
    id: "6",
  },
  capitalize7: {
    value1: require("../../../assets/parts/Eyes/LittleOwl/(1).png"),
    value2: require("../../../assets/parts/Eyes/LittleOwl/(2).png"),
    value3: require("../../../assets/parts/Eyes/LittleOwl/(3).png"),
    value4: require("../../../assets/parts/Eyes/LittleOwl/(4).png"),
    value5: require("../../../assets/parts/Eyes/LittleOwl/(5).png"),
    value6: require("../../../assets/parts/Eyes/LittleOwl/(6).png"),
    value7: require("../../../assets/parts/Eyes/LittleOwl/(7).png"),
    value8: require("../../../assets/parts/Eyes/LittleOwl/(8).png"),
    value9: require("../../../assets/parts/Eyes/LittleOwl/(9).png"),
    key: "Eyes7",
    string: "LittleOwl",
    id: "7",
  },
  capitalize8: {
    value1: require("../../../assets/parts/Eyes/Lucas/(1).png"),
    value2: require("../../../assets/parts/Eyes/Lucas/(2).png"),
    value3: require("../../../assets/parts/Eyes/Lucas/(3).png"),
    value4: require("../../../assets/parts/Eyes/Lucas/(4).png"),
    value5: require("../../../assets/parts/Eyes/Lucas/(5).png"),
    value6: require("../../../assets/parts/Eyes/Lucas/(6).png"),
    value7: require("../../../assets/parts/Eyes/Lucas/(7).png"),
    value8: require("../../../assets/parts/Eyes/Lucas/(8).png"),
    value9: require("../../../assets/parts/Eyes/Lucas/(9).png"),
    key: "Eyes8",
    string: "Lucas",
    id: "8",
  },
  capitalize9: {
    value1: require("../../../assets/parts/Eyes/Mavis/(1).png"),
    value2: require("../../../assets/parts/Eyes/Mavis/(2).png"),
    value3: require("../../../assets/parts/Eyes/Mavis/(3).png"),
    value4: require("../../../assets/parts/Eyes/Mavis/(4).png"),
    value5: require("../../../assets/parts/Eyes/Mavis/(5).png"),
    value6: require("../../../assets/parts/Eyes/Mavis/(6).png"),
    value7: require("../../../assets/parts/Eyes/Mavis/(7).png"),
    value8: require("../../../assets/parts/Eyes/Mavis/(8).png"),
    value9: require("../../../assets/parts/Eyes/Mavis/(9).png"),
    key: "Eyes9",
    string: "Mavis",
    id: "9",
  },
  capitalize10: {
    value1: require("../../../assets/parts/Eyes/Nerd/(1).png"),
    value2: require("../../../assets/parts/Eyes/Nerd/(2).png"),
    value3: require("../../../assets/parts/Eyes/Nerd/(3).png"),
    value4: require("../../../assets/parts/Eyes/Nerd/(4).png"),
    value5: require("../../../assets/parts/Eyes/Nerd/(5).png"),
    value6: require("../../../assets/parts/Eyes/Nerd/(6).png"),
    value7: require("../../../assets/parts/Eyes/Nerd/(7).png"),
    value8: require("../../../assets/parts/Eyes/Nerd/(8).png"),
    value9: require("../../../assets/parts/Eyes/Nerd/(9).png"),
    key: "Eyes10",
    string: "Nerd",
    id: "10",
  },
  capitalize11: {
    value1: require("../../../assets/parts/Eyes/Puppy/(1).png"),
    value2: require("../../../assets/parts/Eyes/Puppy/(2).png"),
    value3: require("../../../assets/parts/Eyes/Puppy/(3).png"),
    value4: require("../../../assets/parts/Eyes/Puppy/(4).png"),
    value5: require("../../../assets/parts/Eyes/Puppy/(5).png"),
    value6: require("../../../assets/parts/Eyes/Puppy/(6).png"),
    value7: require("../../../assets/parts/Eyes/Puppy/(7).png"),
    value8: require("../../../assets/parts/Eyes/Puppy/(8).png"),
    value9: require("../../../assets/parts/Eyes/Puppy/(9).png"),
    key: "Eyes11",
    string: "Puppy",
    id: "11",
  },
  capitalize12: {
    value1: require("../../../assets/parts/Eyes/ScaryEyes/(1).png"),
    value2: require("../../../assets/parts/Eyes/ScaryEyes/(2).png"),
    value3: require("../../../assets/parts/Eyes/ScaryEyes/(3).png"),
    value4: require("../../../assets/parts/Eyes/ScaryEyes/(4).png"),
    value5: require("../../../assets/parts/Eyes/ScaryEyes/(5).png"),
    value6: require("../../../assets/parts/Eyes/ScaryEyes/(6).png"),
    value7: require("../../../assets/parts/Eyes/ScaryEyes/(7).png"),
    value8: require("../../../assets/parts/Eyes/ScaryEyes/(8).png"),
    value9: require("../../../assets/parts/Eyes/ScaryEyes/(9).png"),
    key: "Eyes12",
    string: "ScaryEyes",
    id: "12",
  },
  capitalize13: {
    value1: require("../../../assets/parts/Eyes/Sleepless/(1).png"),
    value2: require("../../../assets/parts/Eyes/Sleepless/(2).png"),
    value3: require("../../../assets/parts/Eyes/Sleepless/(3).png"),
    value4: require("../../../assets/parts/Eyes/Sleepless/(4).png"),
    value5: require("../../../assets/parts/Eyes/Sleepless/(5).png"),
    value6: require("../../../assets/parts/Eyes/Sleepless/(6).png"),
    value7: require("../../../assets/parts/Eyes/Sleepless/(7).png"),
    value8: require("../../../assets/parts/Eyes/Sleepless/(8).png"),
    value9: require("../../../assets/parts/Eyes/Sleepless/(9).png"),
    key: "Eyes13",
    string: "Sleepless",
    id: "13",
  },
  capitalize14: {
    value1: require("../../../assets/parts/Eyes/Topaz/(1).png"),
    value2: require("../../../assets/parts/Eyes/Topaz/(2).png"),
    value3: require("../../../assets/parts/Eyes/Topaz/(3).png"),
    value4: require("../../../assets/parts/Eyes/Topaz/(4).png"),
    value5: require("../../../assets/parts/Eyes/Topaz/(5).png"),
    value6: require("../../../assets/parts/Eyes/Topaz/(6).png"),
    value7: require("../../../assets/parts/Eyes/Topaz/(7).png"),
    value8: require("../../../assets/parts/Eyes/Topaz/(8).png"),
    value9: require("../../../assets/parts/Eyes/Topaz/(9).png"),
    key: "Eyes14",
    string: "Topaz",
    id: "14",
  }
};

type EyesProps = {
  SetEyes: Function;
  visible: boolean;
};
const Eyes = forwardRef((props: EyesProps, ref) => {
  const { SetEyes, visible } = props;
  const [ getEyesColor, SetEyesColor ] = useState(1);
  const [ getText, setText] = useState("");
  const { index } = useTypedSelector((state) => state.color);
  const setItem = (e: any) => {
    SetEyes(e.target.src);
    SetEyesColor(e.target.id);
    setText(e.target.alt);
    for (let i = 1; i <= 14; i++) {
      document.getElementById("Eyes" + i)?.classList.remove("border");
    }
    document.getElementById("Eyes" + e.target.id)?.classList.add("border");
  };

  const setRandItem = () => {
    var Rnum = Math.floor(Math.random() * 14 + 1);
    SetEyes(images[`capitalize${Rnum}`][`value${index}`]);
    setText(images[`capitalize${Rnum}`]["string"]);
    SetEyesColor(Rnum);
    for (let i = 1; i <= 14; i++) {
      document.getElementById("Eyes" + i)?.classList.remove("border");
    }
    document.getElementById("Eyes" + Rnum)?.classList.add("border");
  };

  const setRandItemVal = (colVal: Number) => {
    var Rnum = Math.floor(Math.random() * 14 + 1);
    SetEyes(images[`capitalize${Rnum}`][`value${colVal}`]);
    setText(images[`capitalize${Rnum}`]["string"]);
    SetEyesColor(Rnum);
    for (let i = 1; i <= 14; i++) {
      document.getElementById("Eyes" + i)?.classList.remove("border");
    }
    document.getElementById("Eyes" + Rnum)?.classList.add("border");
  };

  const setRandItemColor = () => {
    SetEyes(images[`capitalize${getEyesColor}`][`value${index}`]);
    setText(images[`capitalize${getEyesColor}`]["string"]);
    for (let i = 1; i <= 14; i++) {
      document.getElementById("Eyes" + i)?.classList.remove("border");
    }
    document.getElementById("Eyes" + getEyesColor)?.classList.add("border");
  };

  useImperativeHandle(ref, () => ({
    RandomNumber(colVal: Number) {
      setRandItemVal(colVal);
    },
  }));

  useEffect(() => {
    setRandItem();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setRandItemColor();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  return (
    visible?
    <EyesContainer>
      <EyesTitle>
        Eyes <span>{getText}</span>
      </EyesTitle>
      <EyesDetail>Power: 40</EyesDetail>
      <EyesContent>
        {Object.values(images).map((image: any) => (
          <EyesItem id={image.key} key={image.key}>
            <img
              id={image.id}
              src={image[`value${index}`]}
              alt={image.string}
              onClick={(e: any) => setItem(e)}
            />
          </EyesItem>
        ))}
      </EyesContent>
    </EyesContainer>: <></>
  );
});

export default Eyes;
