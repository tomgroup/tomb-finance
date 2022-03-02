import React, { forwardRef, useImperativeHandle, useEffect, useState } from "react";
import {
  BackContainer,
  BackTitle,
  BackDetail,
  BackContent,
  BackItem,
} from "./index.styled";
import { useTypedSelector } from "../../../hooks/useTypeSelector";

const images: { [key: string]: any } = {
  capitalize1: {
    value1: require("../../../assets/parts/Back/BackFlower/(1).png"),
    value2: require("../../../assets/parts/Back/BackFlower/(2).png"),
    value3: require("../../../assets/parts/Back/BackFlower/(3).png"),
    value4: require("../../../assets/parts/Back/BackFlower/(4).png"),
    value5: require("../../../assets/parts/Back/BackFlower/(5).png"),
    value6: require("../../../assets/parts/Back/BackFlower/(6).png"),
    value7: require("../../../assets/parts/Back/BackFlower/(7).png"),
    value8: require("../../../assets/parts/Back/BackFlower/(8).png"),
    value9: require("../../../assets/parts/Back/BackFlower/(9).png"),
    key: "back1",
    string: "BackFlower",
    id: "1",
  },
  capitalize2: {
    value1: require("../../../assets/parts/Back/Balloon/(1).png"),
    value2: require("../../../assets/parts/Back/Balloon/(2).png"),
    value3: require("../../../assets/parts/Back/Balloon/(3).png"),
    value4: require("../../../assets/parts/Back/Balloon/(4).png"),
    value5: require("../../../assets/parts/Back/Balloon/(5).png"),
    value6: require("../../../assets/parts/Back/Balloon/(6).png"),
    value7: require("../../../assets/parts/Back/Balloon/(7).png"),
    value8: require("../../../assets/parts/Back/Balloon/(8).png"),
    value9: require("../../../assets/parts/Back/Balloon/(9).png"),
    key: "back2",
    string: "Balloon",
    id: "2",
  },
  capitalize3: {
    value1: require("../../../assets/parts/Back/Cupid/(1).png"),
    value2: require("../../../assets/parts/Back/Cupid/(2).png"),
    value3: require("../../../assets/parts/Back/Cupid/(3).png"),
    value4: require("../../../assets/parts/Back/Cupid/(4).png"),
    value5: require("../../../assets/parts/Back/Cupid/(5).png"),
    value6: require("../../../assets/parts/Back/Cupid/(6).png"),
    value7: require("../../../assets/parts/Back/Cupid/(7).png"),
    value8: require("../../../assets/parts/Back/Cupid/(8).png"),
    value9: require("../../../assets/parts/Back/Cupid/(9).png"),
    key: "back3",
    string: "Cupid",
    id: "3",
  },
  capitalize4: {
    value1: require("../../../assets/parts/Back/Fishy/(1).png"),
    value2: require("../../../assets/parts/Back/Fishy/(2).png"),
    value3: require("../../../assets/parts/Back/Fishy/(3).png"),
    value4: require("../../../assets/parts/Back/Fishy/(4).png"),
    value5: require("../../../assets/parts/Back/Fishy/(5).png"),
    value6: require("../../../assets/parts/Back/Fishy/(6).png"),
    value7: require("../../../assets/parts/Back/Fishy/(7).png"),
    value8: require("../../../assets/parts/Back/Fishy/(8).png"),
    value9: require("../../../assets/parts/Back/Fishy/(9).png"),
    key: "back4",
    string: "Fishy",
    id: "4",
  },
  capitalize5: {
    value1: require("../../../assets/parts/Back/GreenThorns/(1).png"),
    value2: require("../../../assets/parts/Back/GreenThorns/(2).png"),
    value3: require("../../../assets/parts/Back/GreenThorns/(3).png"),
    value4: require("../../../assets/parts/Back/GreenThorns/(4).png"),
    value5: require("../../../assets/parts/Back/GreenThorns/(5).png"),
    value6: require("../../../assets/parts/Back/GreenThorns/(6).png"),
    value7: require("../../../assets/parts/Back/GreenThorns/(7).png"),
    value8: require("../../../assets/parts/Back/GreenThorns/(8).png"),
    value9: require("../../../assets/parts/Back/GreenThorns/(9).png"),
    key: "back5",
    string: "GreenThorns",
    id: "5",
  },
  capitalize6: {
    value1: require("../../../assets/parts/Back/Mushy/(1).png"),
    value2: require("../../../assets/parts/Back/Mushy/(2).png"),
    value3: require("../../../assets/parts/Back/Mushy/(3).png"),
    value4: require("../../../assets/parts/Back/Mushy/(4).png"),
    value5: require("../../../assets/parts/Back/Mushy/(5).png"),
    value6: require("../../../assets/parts/Back/Mushy/(6).png"),
    value7: require("../../../assets/parts/Back/Mushy/(7).png"),
    value8: require("../../../assets/parts/Back/Mushy/(8).png"),
    value9: require("../../../assets/parts/Back/Mushy/(9).png"),
    key: "back6",
    string: "Mushy",
    id: "6",
  },
  capitalize7: {
    value1: require("../../../assets/parts/Back/PigeonPost/(1).png"),
    value2: require("../../../assets/parts/Back/PigeonPost/(2).png"),
    value3: require("../../../assets/parts/Back/PigeonPost/(3).png"),
    value4: require("../../../assets/parts/Back/PigeonPost/(4).png"),
    value5: require("../../../assets/parts/Back/PigeonPost/(5).png"),
    value6: require("../../../assets/parts/Back/PigeonPost/(6).png"),
    value7: require("../../../assets/parts/Back/PigeonPost/(7).png"),
    value8: require("../../../assets/parts/Back/PigeonPost/(8).png"),
    value9: require("../../../assets/parts/Back/PigeonPost/(9).png"),
    key: "back7",
    string: "PigeonPost",
    id: "7",
  },
  capitalize8: {
    value1: require("../../../assets/parts/Back/pumpking/(1).png"),
    value2: require("../../../assets/parts/Back/pumpking/(2).png"),
    value3: require("../../../assets/parts/Back/pumpking/(3).png"),
    value4: require("../../../assets/parts/Back/pumpking/(4).png"),
    value5: require("../../../assets/parts/Back/pumpking/(5).png"),
    value6: require("../../../assets/parts/Back/pumpking/(6).png"),
    value7: require("../../../assets/parts/Back/pumpking/(7).png"),
    value8: require("../../../assets/parts/Back/pumpking/(8).png"),
    value9: require("../../../assets/parts/Back/pumpking/(9).png"),
    key: "back8",
    string: "pumpking",
    id: "8",
  },
  capitalize9: {
    value1: require("../../../assets/parts/Back/Ronin/(1).png"),
    value2: require("../../../assets/parts/Back/Ronin/(2).png"),
    value3: require("../../../assets/parts/Back/Ronin/(3).png"),
    value4: require("../../../assets/parts/Back/Ronin/(4).png"),
    value5: require("../../../assets/parts/Back/Ronin/(5).png"),
    value6: require("../../../assets/parts/Back/Ronin/(6).png"),
    value7: require("../../../assets/parts/Back/Ronin/(7).png"),
    value8: require("../../../assets/parts/Back/Ronin/(8).png"),
    value9: require("../../../assets/parts/Back/Ronin/(9).png"),
    key: "back9",
    string: "Ronin",
    id: "9",
  },
  capitalize10: {
    value1: require("../../../assets/parts/Back/Rosebud/(1).png"),
    value2: require("../../../assets/parts/Back/Rosebud/(2).png"),
    value3: require("../../../assets/parts/Back/Rosebud/(3).png"),
    value4: require("../../../assets/parts/Back/Rosebud/(4).png"),
    value5: require("../../../assets/parts/Back/Rosebud/(5).png"),
    value6: require("../../../assets/parts/Back/Rosebud/(6).png"),
    value7: require("../../../assets/parts/Back/Rosebud/(7).png"),
    value8: require("../../../assets/parts/Back/Rosebud/(8).png"),
    value9: require("../../../assets/parts/Back/Rosebud/(9).png"),
    key: "back10",
    string: "Rosebud",
    id: "10",
  },
  capitalize11: {
    value1: require("../../../assets/parts/Back/Snail Shell/(1).png"),
    value2: require("../../../assets/parts/Back/Snail Shell/(2).png"),
    value3: require("../../../assets/parts/Back/Snail Shell/(3).png"),
    value4: require("../../../assets/parts/Back/Snail Shell/(4).png"),
    value5: require("../../../assets/parts/Back/Snail Shell/(5).png"),
    value6: require("../../../assets/parts/Back/Snail Shell/(6).png"),
    value7: require("../../../assets/parts/Back/Snail Shell/(7).png"),
    value8: require("../../../assets/parts/Back/Snail Shell/(8).png"),
    value9: require("../../../assets/parts/Back/Snail Shell/(9).png"),
    key: "back11",
    string: "Snail Shell",
    id: "11",
  },
  capitalize12: {
    value1: require("../../../assets/parts/Back/SpikyWing/(1).png"),
    value2: require("../../../assets/parts/Back/SpikyWing/(2).png"),
    value3: require("../../../assets/parts/Back/SpikyWing/(3).png"),
    value4: require("../../../assets/parts/Back/SpikyWing/(4).png"),
    value5: require("../../../assets/parts/Back/SpikyWing/(5).png"),
    value6: require("../../../assets/parts/Back/SpikyWing/(6).png"),
    value7: require("../../../assets/parts/Back/SpikyWing/(7).png"),
    value8: require("../../../assets/parts/Back/SpikyWing/(8).png"),
    value9: require("../../../assets/parts/Back/SpikyWing/(9).png"),
    key: "back12",
    string: "SpikyWing",
    id: "12",
  },
  capitalize13: {
    value1: require("../../../assets/parts/Back/Sponge/(1).png"),
    value2: require("../../../assets/parts/Back/Sponge/(2).png"),
    value3: require("../../../assets/parts/Back/Sponge/(3).png"),
    value4: require("../../../assets/parts/Back/Sponge/(4).png"),
    value5: require("../../../assets/parts/Back/Sponge/(5).png"),
    value6: require("../../../assets/parts/Back/Sponge/(6).png"),
    value7: require("../../../assets/parts/Back/Sponge/(7).png"),
    value8: require("../../../assets/parts/Back/Sponge/(8).png"),
    value9: require("../../../assets/parts/Back/Sponge/(9).png"),
    key: "back13",
    string: "Sponge",
    id: "13",
  },
  capitalize14: {
    value1: require("../../../assets/parts/Back/Trispikes/(1).png"),
    value2: require("../../../assets/parts/Back/Trispikes/(2).png"),
    value3: require("../../../assets/parts/Back/Trispikes/(3).png"),
    value4: require("../../../assets/parts/Back/Trispikes/(4).png"),
    value5: require("../../../assets/parts/Back/Trispikes/(5).png"),
    value6: require("../../../assets/parts/Back/Trispikes/(6).png"),
    value7: require("../../../assets/parts/Back/Trispikes/(7).png"),
    value8: require("../../../assets/parts/Back/Trispikes/(8).png"),
    value9: require("../../../assets/parts/Back/Trispikes/(9).png"),
    key: "back14",
    string: "Trispikes",
    id: "14",
  },
  capitalize15: {
    value1: require("../../../assets/parts/Back/Turnip/(1).png"),
    value2: require("../../../assets/parts/Back/Turnip/(2).png"),
    value3: require("../../../assets/parts/Back/Turnip/(3).png"),
    value4: require("../../../assets/parts/Back/Turnip/(4).png"),
    value5: require("../../../assets/parts/Back/Turnip/(5).png"),
    value6: require("../../../assets/parts/Back/Turnip/(6).png"),
    value7: require("../../../assets/parts/Back/Turnip/(7).png"),
    value8: require("../../../assets/parts/Back/Turnip/(8).png"),
    value9: require("../../../assets/parts/Back/Turnip/(9).png"),
    key: "back15",
    string: "Turnip",
    id: "15",
  },
};

type BackProps = {
  SetBack: Function;
  visible: boolean;
};

const Back = forwardRef((props: BackProps, ref) => {
  const { SetBack, visible } = props;
  const [ getBackColor, setBackColor] = useState(1);
  const [ getText, setText ] = useState("");
  const { index } = useTypedSelector((state) => state.color);
  const setItem = (e: any) => {
    SetBack(e.target.src);
    setBackColor(e.target.id);
    setText(e.target.alt);
    for (let i = 1; i <= 15; i++) {
      document.getElementById("back" + i)?.classList.remove("border");
    }
    document.getElementById("back" + e.target.id)?.classList.add("border");
  };

  const setRandItem = () => {
    var Rnum = Math.floor(Math.random() * 15 + 1);
    SetBack(images[`capitalize${Rnum}`][`value${index}`]);
    setText(images[`capitalize${Rnum}`]["string"]);
    setBackColor(Rnum);
    for (let i = 1; i <= 15; i++) {
      document.getElementById("back" + i)?.classList.remove("border");
    }
    document.getElementById("back" + Rnum)?.classList.add("border");
  };

  const setRandItemVal = (colVal: Number) => {
    var Rnum = Math.floor(Math.random() * 15 + 1);
    SetBack(images[`capitalize${Rnum}`][`value${colVal}`]);
    setText(images[`capitalize${Rnum}`]["string"]);
    setBackColor(Rnum);
    for (let i = 1; i <= 15; i++) {
      document.getElementById("back" + i)?.classList.remove("border");
    }
    document.getElementById("back" + Rnum)?.classList.add("border");
  };

  const setRandItemColor = () => {
    SetBack(images[`capitalize${getBackColor}`][`value${index}`]);
    setText(images[`capitalize${getBackColor}`]["string"]);
    for (let i = 1; i <= 15; i++) {
      document.getElementById("back" + i)?.classList.remove("border");
    }
    document.getElementById("back" + getBackColor)?.classList.add("border");
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
    <BackContainer>
      <BackTitle>
        Back <span>{getText}</span>
      </BackTitle>
      <BackDetail>Power: 40</BackDetail>
      <BackContent>
        {Object.values(images).map((image: any) => (
          <BackItem id={image.key} key={image.key}>
            <img
              id={image.id}
              src={image[`value${index}`]}
              alt={image.string}
              onClick={(e: any) => setItem(e)}
            />
          </BackItem>
        ))}
      </BackContent>
    </BackContainer>: <></>
  );
});

export default Back;
