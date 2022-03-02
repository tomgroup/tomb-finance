import React, { forwardRef, useImperativeHandle, useEffect, useState } from "react";
import {
  MouthContainer,
  MouthTitle,
  MouthDetail,
  MouthContent,
  MouthItem,
} from "./index.styled";
import { useTypedSelector } from "../../../hooks/useTypeSelector";

const images: { [key: string]: any } = {
  capitalize1: {
    value1: require("../../../assets/parts/Mouth/Axiekiss/(1).png"),
    value2: require("../../../assets/parts/Mouth/Axiekiss/(2).png"),
    value3: require("../../../assets/parts/Mouth/Axiekiss/(3).png"),
    value4: require("../../../assets/parts/Mouth/Axiekiss/(4).png"),
    value5: require("../../../assets/parts/Mouth/Axiekiss/(5).png"),
    value6: require("../../../assets/parts/Mouth/Axiekiss/(6).png"),
    value7: require("../../../assets/parts/Mouth/Axiekiss/(7).png"),
    value8: require("../../../assets/parts/Mouth/Axiekiss/(8).png"),
    value9: require("../../../assets/parts/Mouth/Axiekiss/(9).png"),
    key: "mouth1",
    string: "Axiekiss",
    id: "1",
  },
  capitalize2: {
    value1: require("../../../assets/parts/Mouth/Doubletalk/(1).png"),
    value2: require("../../../assets/parts/Mouth/Doubletalk/(2).png"),
    value3: require("../../../assets/parts/Mouth/Doubletalk/(3).png"),
    value4: require("../../../assets/parts/Mouth/Doubletalk/(4).png"),
    value5: require("../../../assets/parts/Mouth/Doubletalk/(5).png"),
    value6: require("../../../assets/parts/Mouth/Doubletalk/(6).png"),
    value7: require("../../../assets/parts/Mouth/Doubletalk/(7).png"),
    value8: require("../../../assets/parts/Mouth/Doubletalk/(8).png"),
    value9: require("../../../assets/parts/Mouth/Doubletalk/(9).png"),
    key: "mouth2",
    string: "Doubletalk",
    id: "2",
  },
  capitalize3: {
    value1: require("../../../assets/parts/Mouth/Hungrybird/(1).png"),
    value2: require("../../../assets/parts/Mouth/Hungrybird/(2).png"),
    value3: require("../../../assets/parts/Mouth/Hungrybird/(3).png"),
    value4: require("../../../assets/parts/Mouth/Hungrybird/(4).png"),
    value5: require("../../../assets/parts/Mouth/Hungrybird/(5).png"),
    value6: require("../../../assets/parts/Mouth/Hungrybird/(6).png"),
    value7: require("../../../assets/parts/Mouth/Hungrybird/(7).png"),
    value8: require("../../../assets/parts/Mouth/Hungrybird/(8).png"),
    value9: require("../../../assets/parts/Mouth/Hungrybird/(9).png"),
    key: "mouth3",
    string: "Hungrybird",
    id: "3",
  },
  capitalize4: {
    value1: require("../../../assets/parts/Mouth/Kissy/(1).png"),
    value2: require("../../../assets/parts/Mouth/Kissy/(2).png"),
    value3: require("../../../assets/parts/Mouth/Kissy/(3).png"),
    value4: require("../../../assets/parts/Mouth/Kissy/(4).png"),
    value5: require("../../../assets/parts/Mouth/Kissy/(5).png"),
    value6: require("../../../assets/parts/Mouth/Kissy/(6).png"),
    value7: require("../../../assets/parts/Mouth/Kissy/(7).png"),
    value8: require("../../../assets/parts/Mouth/Kissy/(8).png"),
    value9: require("../../../assets/parts/Mouth/Kissy/(9).png"),
    key: "mouth4",
    string: "Kissy",
    id: "4",
  },
  capitalize5: {
    value1: require("../../../assets/parts/Mouth/Lam/(1).png"),
    value2: require("../../../assets/parts/Mouth/Lam/(2).png"),
    value3: require("../../../assets/parts/Mouth/Lam/(3).png"),
    value4: require("../../../assets/parts/Mouth/Lam/(4).png"),
    value5: require("../../../assets/parts/Mouth/Lam/(5).png"),
    value6: require("../../../assets/parts/Mouth/Lam/(6).png"),
    value7: require("../../../assets/parts/Mouth/Lam/(7).png"),
    value8: require("../../../assets/parts/Mouth/Lam/(8).png"),
    value9: require("../../../assets/parts/Mouth/Lam/(9).png"),
    key: "mouth5",
    string: "Lam",
    id: "5",
  },
  capitalize6: {
    value1: require("../../../assets/parts/Mouth/Little Owl/(1).png"),
    value2: require("../../../assets/parts/Mouth/Little Owl/(2).png"),
    value3: require("../../../assets/parts/Mouth/Little Owl/(3).png"),
    value4: require("../../../assets/parts/Mouth/Little Owl/(4).png"),
    value5: require("../../../assets/parts/Mouth/Little Owl/(5).png"),
    value6: require("../../../assets/parts/Mouth/Little Owl/(6).png"),
    value7: require("../../../assets/parts/Mouth/Little Owl/(7).png"),
    value8: require("../../../assets/parts/Mouth/Little Owl/(8).png"),
    value9: require("../../../assets/parts/Mouth/Little Owl/(9).png"),
    key: "mouth6",
    string: "Little Owl",
    id: "6",
  },
  capitalize7: {
    value1: require("../../../assets/parts/Mouth/NutCracker/(1).png"),
    value2: require("../../../assets/parts/Mouth/NutCracker/(2).png"),
    value3: require("../../../assets/parts/Mouth/NutCracker/(3).png"),
    value4: require("../../../assets/parts/Mouth/NutCracker/(4).png"),
    value5: require("../../../assets/parts/Mouth/NutCracker/(5).png"),
    value6: require("../../../assets/parts/Mouth/NutCracker/(6).png"),
    value7: require("../../../assets/parts/Mouth/NutCracker/(7).png"),
    value8: require("../../../assets/parts/Mouth/NutCracker/(8).png"),
    value9: require("../../../assets/parts/Mouth/NutCracker/(9).png"),
    key: "mouth7",
    string: "NutCracker",
    id: "7",
  },
  capitalize8: {
    value1: require("../../../assets/parts/Mouth/PeaceMaker/(1).png"),
    value2: require("../../../assets/parts/Mouth/PeaceMaker/(2).png"),
    value3: require("../../../assets/parts/Mouth/PeaceMaker/(3).png"),
    value4: require("../../../assets/parts/Mouth/PeaceMaker/(4).png"),
    value5: require("../../../assets/parts/Mouth/PeaceMaker/(5).png"),
    value6: require("../../../assets/parts/Mouth/PeaceMaker/(6).png"),
    value7: require("../../../assets/parts/Mouth/PeaceMaker/(7).png"),
    value8: require("../../../assets/parts/Mouth/PeaceMaker/(8).png"),
    value9: require("../../../assets/parts/Mouth/PeaceMaker/(9).png"),
    key: "mouth8",
    string: "PeaceMaker",
    id: "8",
  },
  capitalize9: {
    value1: require("../../../assets/parts/Mouth/Pincer/(1).png"),
    value2: require("../../../assets/parts/Mouth/Pincer/(2).png"),
    value3: require("../../../assets/parts/Mouth/Pincer/(3).png"),
    value4: require("../../../assets/parts/Mouth/Pincer/(4).png"),
    value5: require("../../../assets/parts/Mouth/Pincer/(5).png"),
    value6: require("../../../assets/parts/Mouth/Pincer/(6).png"),
    value7: require("../../../assets/parts/Mouth/Pincer/(7).png"),
    value8: require("../../../assets/parts/Mouth/Pincer/(8).png"),
    value9: require("../../../assets/parts/Mouth/Pincer/(9).png"),
    key: "mouth9",
    string: "Pincer",
    id: "9",
  },
  capitalize10: {
    value1: require("../../../assets/parts/Mouth/Piranha/(1).png"),
    value2: require("../../../assets/parts/Mouth/Piranha/(2).png"),
    value3: require("../../../assets/parts/Mouth/Piranha/(3).png"),
    value4: require("../../../assets/parts/Mouth/Piranha/(4).png"),
    value5: require("../../../assets/parts/Mouth/Piranha/(5).png"),
    value6: require("../../../assets/parts/Mouth/Piranha/(6).png"),
    value7: require("../../../assets/parts/Mouth/Piranha/(7).png"),
    value8: require("../../../assets/parts/Mouth/Piranha/(8).png"),
    value9: require("../../../assets/parts/Mouth/Piranha/(9).png"),
    key: "mouth10",
    string: "Piranha",
    id: "10",
  },
  capitalize11: {
    value1: require("../../../assets/parts/Mouth/Sailor/(1).png"),
    value2: require("../../../assets/parts/Mouth/Sailor/(2).png"),
    value3: require("../../../assets/parts/Mouth/Sailor/(3).png"),
    value4: require("../../../assets/parts/Mouth/Sailor/(4).png"),
    value5: require("../../../assets/parts/Mouth/Sailor/(5).png"),
    value6: require("../../../assets/parts/Mouth/Sailor/(6).png"),
    value7: require("../../../assets/parts/Mouth/Sailor/(7).png"),
    value8: require("../../../assets/parts/Mouth/Sailor/(8).png"),
    value9: require("../../../assets/parts/Mouth/Sailor/(9).png"),
    key: "mouth11",
    string: "Sailor",
    id: "11",
  },
  capitalize12: {
    value1: require("../../../assets/parts/Mouth/Silencewhisper/(1).png"),
    value2: require("../../../assets/parts/Mouth/Silencewhisper/(2).png"),
    value3: require("../../../assets/parts/Mouth/Silencewhisper/(3).png"),
    value4: require("../../../assets/parts/Mouth/Silencewhisper/(4).png"),
    value5: require("../../../assets/parts/Mouth/Silencewhisper/(5).png"),
    value6: require("../../../assets/parts/Mouth/Silencewhisper/(6).png"),
    value7: require("../../../assets/parts/Mouth/Silencewhisper/(7).png"),
    value8: require("../../../assets/parts/Mouth/Silencewhisper/(8).png"),
    value9: require("../../../assets/parts/Mouth/Silencewhisper/(9).png"),
    key: "mouth12",
    string: "Silencewhisper",
    id: "12",
  },
  capitalize13: {
    value1: require("../../../assets/parts/Mouth/Squareteeth/(1).png"),
    value2: require("../../../assets/parts/Mouth/Squareteeth/(2).png"),
    value3: require("../../../assets/parts/Mouth/Squareteeth/(3).png"),
    value4: require("../../../assets/parts/Mouth/Squareteeth/(4).png"),
    value5: require("../../../assets/parts/Mouth/Squareteeth/(5).png"),
    value6: require("../../../assets/parts/Mouth/Squareteeth/(6).png"),
    value7: require("../../../assets/parts/Mouth/Squareteeth/(7).png"),
    value8: require("../../../assets/parts/Mouth/Squareteeth/(8).png"),
    value9: require("../../../assets/parts/Mouth/Squareteeth/(9).png"),
    key: "mouth13",
    string: "Squareteeth",
    id: "13",
  },
  capitalize14: {
    value1: require("../../../assets/parts/Mouth/Straight/(1).png"),
    value2: require("../../../assets/parts/Mouth/Straight/(2).png"),
    value3: require("../../../assets/parts/Mouth/Straight/(3).png"),
    value4: require("../../../assets/parts/Mouth/Straight/(4).png"),
    value5: require("../../../assets/parts/Mouth/Straight/(5).png"),
    value6: require("../../../assets/parts/Mouth/Straight/(6).png"),
    value7: require("../../../assets/parts/Mouth/Straight/(7).png"),
    value8: require("../../../assets/parts/Mouth/Straight/(8).png"),
    value9: require("../../../assets/parts/Mouth/Straight/(9).png"),
    key: "mouth14",
    string: "Straight",
    id: "14",
  },
  capitalize15: {
    value1: require("../../../assets/parts/Mouth/Toothlessbite/(1).png"),
    value2: require("../../../assets/parts/Mouth/Toothlessbite/(2).png"),
    value3: require("../../../assets/parts/Mouth/Toothlessbite/(3).png"),
    value4: require("../../../assets/parts/Mouth/Toothlessbite/(4).png"),
    value5: require("../../../assets/parts/Mouth/Toothlessbite/(5).png"),
    value6: require("../../../assets/parts/Mouth/Toothlessbite/(6).png"),
    value7: require("../../../assets/parts/Mouth/Toothlessbite/(7).png"),
    value8: require("../../../assets/parts/Mouth/Toothlessbite/(8).png"),
    value9: require("../../../assets/parts/Mouth/Toothlessbite/(9).png"),
    key: "mouth15",
    string: "Toothlessbite",
    id: "15",
  },
};

type MouthProps = {
  SetMouth: Function;
  visible: boolean;
};

const Mouth = forwardRef((props: MouthProps, ref) => {
  const { SetMouth, visible } = props;
  const [ getMouthColor, SetMouthColor ] = useState(1);
  const [ getText, setText ] = useState("");
  const { index } = useTypedSelector((state) => state.color);
  const setItem = (e: any) => {
    SetMouth(e.target.src);
    SetMouthColor(e.target.id);
    setText(e.target.alt);
    for (let i = 1; i <= 15; i++) {
      document.getElementById("mouth" + i)?.classList.remove("border");
    }
    document.getElementById("mouth" + e.target.id)?.classList.add("border");
  };

  const setRandItem = () => {
    var Rnum = Math.floor(Math.random() * 15 + 1);
    SetMouthColor(Rnum);
    SetMouth(images[`capitalize${Rnum}`][`value${index}`]);
    setText(images[`capitalize${Rnum}`]["string"]);
    for (let i = 1; i <= 15; i++) {
      document.getElementById("mouth" + i)?.classList.remove("border");
    }
    document.getElementById("mouth" + Rnum)?.classList.add("border");
  };

  const setRandItemVal = (colVal: Number) => {
    var Rnum = Math.floor(Math.random() * 15 + 1);
    SetMouthColor(Rnum);
    SetMouth(images[`capitalize${Rnum}`][`value${colVal}`]);
    setText(images[`capitalize${Rnum}`]["string"]);
    for (let i = 1; i <= 15; i++) {
      document.getElementById("mouth" + i)?.classList.remove("border");
    }
    document.getElementById("mouth" + Rnum)?.classList.add("border");
  };

  const setRandItemColor = () => {
    SetMouth(images[`capitalize${getMouthColor}`][`value${index}`]);
    setText(images[`capitalize${getMouthColor}`]["string"]);
    for (let i = 1; i <= 15; i++) {
      document.getElementById("mouth" + i)?.classList.remove("border");
    }
    document.getElementById("mouth" + getMouthColor)?.classList.add("border");
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
    <MouthContainer>
      <MouthTitle>
        Mouth <span>{getText}</span>
      </MouthTitle>
      <MouthDetail>Power: 40</MouthDetail>
      <MouthContent>
        {Object.values(images).map((image: any) => (
          <MouthItem id={image.key} key={image.key}>
            <img
              id={image.id}
              src={image[`value${index}`]}
              alt={image.string}
              onClick={(e: any) => setItem(e)}
            />
          </MouthItem>
        ))}
      </MouthContent>
    </MouthContainer>: <></>
  );
});

export default Mouth;
