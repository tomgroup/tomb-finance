import React, { useState, useEffect, useImperativeHandle, forwardRef } from "react";
import {
  TailContainer,
  TailTitle,
  TailDetail,
  TailContent,
  TailItem,
} from "./index.styled";
import { useTypedSelector } from "../../../hooks/useTypeSelector";

const images: { [key: string]: any } = {
  capitalize1: {
    value1: require("../../../assets/parts/Tail/Ant/(1).png"),
    value2: require("../../../assets/parts/Tail/Ant/(2).png"),
    value3: require("../../../assets/parts/Tail/Ant/(3).png"),
    value4: require("../../../assets/parts/Tail/Ant/(4).png"),
    value5: require("../../../assets/parts/Tail/Ant/(5).png"),
    value6: require("../../../assets/parts/Tail/Ant/(6).png"),
    value7: require("../../../assets/parts/Tail/Ant/(7).png"),
    value8: require("../../../assets/parts/Tail/Ant/(8).png"),
    value9: require("../../../assets/parts/Tail/Ant/(9).png"),
    key: "Tail1",
    string: "Ant",
    id: "1",
  },
  capitalize2: {
    value1: require("../../../assets/parts/Tail/CarrotTail/(1).png"),
    value2: require("../../../assets/parts/Tail/CarrotTail/(2).png"),
    value3: require("../../../assets/parts/Tail/CarrotTail/(3).png"),
    value4: require("../../../assets/parts/Tail/CarrotTail/(4).png"),
    value5: require("../../../assets/parts/Tail/CarrotTail/(5).png"),
    value6: require("../../../assets/parts/Tail/CarrotTail/(6).png"),
    value7: require("../../../assets/parts/Tail/CarrotTail/(7).png"),
    value8: require("../../../assets/parts/Tail/CarrotTail/(8).png"),
    value9: require("../../../assets/parts/Tail/CarrotTail/(9).png"),
    key: "Tail2",
    string: "CarrotTail",
    id: "2",
  },
  capitalize3: {
    value1: require("../../../assets/parts/Tail/Cottontail/(1).png"),
    value2: require("../../../assets/parts/Tail/Cottontail/(2).png"),
    value3: require("../../../assets/parts/Tail/Cottontail/(3).png"),
    value4: require("../../../assets/parts/Tail/Cottontail/(4).png"),
    value5: require("../../../assets/parts/Tail/Cottontail/(5).png"),
    value6: require("../../../assets/parts/Tail/Cottontail/(6).png"),
    value7: require("../../../assets/parts/Tail/Cottontail/(7).png"),
    value8: require("../../../assets/parts/Tail/Cottontail/(8).png"),
    value9: require("../../../assets/parts/Tail/Cottontail/(9).png"),
    key: "Tail3",
    string: "Cottontail",
    id: "3",
  },
  capitalize4: {
    value1: require("../../../assets/parts/Tail/FishTail/(1).png"),
    value2: require("../../../assets/parts/Tail/FishTail/(2).png"),
    value3: require("../../../assets/parts/Tail/FishTail/(3).png"),
    value4: require("../../../assets/parts/Tail/FishTail/(4).png"),
    value5: require("../../../assets/parts/Tail/FishTail/(5).png"),
    value6: require("../../../assets/parts/Tail/FishTail/(6).png"),
    value7: require("../../../assets/parts/Tail/FishTail/(7).png"),
    value8: require("../../../assets/parts/Tail/FishTail/(8).png"),
    value9: require("../../../assets/parts/Tail/FishTail/(9).png"),
    key: "Tail4",
    string: "FishTail",
    id: "4",
  },
  capitalize5: {
    value1: require("../../../assets/parts/Tail/Fishy/(1).png"),
    value2: require("../../../assets/parts/Tail/Fishy/(2).png"),
    value3: require("../../../assets/parts/Tail/Fishy/(3).png"),
    value4: require("../../../assets/parts/Tail/Fishy/(4).png"),
    value5: require("../../../assets/parts/Tail/Fishy/(5).png"),
    value6: require("../../../assets/parts/Tail/Fishy/(6).png"),
    value7: require("../../../assets/parts/Tail/Fishy/(7).png"),
    value8: require("../../../assets/parts/Tail/Fishy/(8).png"),
    value9: require("../../../assets/parts/Tail/Fishy/(9).png"),
    key: "Tail5",
    string: "Fishy",
    id: "5",
  },
  capitalize6: {
    value1: require("../../../assets/parts/Tail/Gerbil/(1).png"),
    value2: require("../../../assets/parts/Tail/Gerbil/(2).png"),
    value3: require("../../../assets/parts/Tail/Gerbil/(3).png"),
    value4: require("../../../assets/parts/Tail/Gerbil/(4).png"),
    value5: require("../../../assets/parts/Tail/Gerbil/(5).png"),
    value6: require("../../../assets/parts/Tail/Gerbil/(6).png"),
    value7: require("../../../assets/parts/Tail/Gerbil/(7).png"),
    value8: require("../../../assets/parts/Tail/Gerbil/(8).png"),
    value9: require("../../../assets/parts/Tail/Gerbil/(9).png"),
    key: "Tail6",
    string: "Gerbil",
    id: "6",
  },
  capitalize7: {
    value1: require("../../../assets/parts/Tail/Grammas/(1).png"),
    value2: require("../../../assets/parts/Tail/Grammas/(2).png"),
    value3: require("../../../assets/parts/Tail/Grammas/(3).png"),
    value4: require("../../../assets/parts/Tail/Grammas/(4).png"),
    value5: require("../../../assets/parts/Tail/Grammas/(5).png"),
    value6: require("../../../assets/parts/Tail/Grammas/(6).png"),
    value7: require("../../../assets/parts/Tail/Grammas/(7).png"),
    value8: require("../../../assets/parts/Tail/Grammas/(8).png"),
    value9: require("../../../assets/parts/Tail/Grammas/(9).png"),
    key: "Tail7",
    string: "Grammas",
    id: "7",
  },
  capitalize8: {
    value1: require("../../../assets/parts/Tail/Grassnake/(1).png"),
    value2: require("../../../assets/parts/Tail/Grassnake/(2).png"),
    value3: require("../../../assets/parts/Tail/Grassnake/(3).png"),
    value4: require("../../../assets/parts/Tail/Grassnake/(4).png"),
    value5: require("../../../assets/parts/Tail/Grassnake/(5).png"),
    value6: require("../../../assets/parts/Tail/Grassnake/(6).png"),
    value7: require("../../../assets/parts/Tail/Grassnake/(7).png"),
    value8: require("../../../assets/parts/Tail/Grassnake/(8).png"),
    value9: require("../../../assets/parts/Tail/Grassnake/(9).png"),
    key: "Tail8",
    string: "Grassnake",
    id: "8",
  },
  capitalize9: {
    value1: require("../../../assets/parts/Tail/Hare/(1).png"),
    value2: require("../../../assets/parts/Tail/Hare/(2).png"),
    value3: require("../../../assets/parts/Tail/Hare/(3).png"),
    value4: require("../../../assets/parts/Tail/Hare/(4).png"),
    value5: require("../../../assets/parts/Tail/Hare/(5).png"),
    value6: require("../../../assets/parts/Tail/Hare/(6).png"),
    value7: require("../../../assets/parts/Tail/Hare/(7).png"),
    value8: require("../../../assets/parts/Tail/Hare/(8).png"),
    value9: require("../../../assets/parts/Tail/Hare/(9).png"),
    key: "Tail9",
    string: "Hare",
    id: "9",
  },
  capitalize10: {
    value1: require("../../../assets/parts/Tail/HotButt/(1).png"),
    value2: require("../../../assets/parts/Tail/HotButt/(2).png"),
    value3: require("../../../assets/parts/Tail/HotButt/(3).png"),
    value4: require("../../../assets/parts/Tail/HotButt/(4).png"),
    value5: require("../../../assets/parts/Tail/HotButt/(5).png"),
    value6: require("../../../assets/parts/Tail/HotButt/(6).png"),
    value7: require("../../../assets/parts/Tail/HotButt/(7).png"),
    value8: require("../../../assets/parts/Tail/HotButt/(8).png"),
    value9: require("../../../assets/parts/Tail/HotButt/(9).png"),
    key: "Tail10",
    string: "HotButt",
    id: "10",
  },
  capitalize11: {
    value1: require("../../../assets/parts/Tail/Latsune/(1).png"),
    value2: require("../../../assets/parts/Tail/Latsune/(2).png"),
    value3: require("../../../assets/parts/Tail/Latsune/(3).png"),
    value4: require("../../../assets/parts/Tail/Latsune/(4).png"),
    value5: require("../../../assets/parts/Tail/Latsune/(5).png"),
    value6: require("../../../assets/parts/Tail/Latsune/(6).png"),
    value7: require("../../../assets/parts/Tail/Latsune/(7).png"),
    value8: require("../../../assets/parts/Tail/Latsune/(8).png"),
    value9: require("../../../assets/parts/Tail/Latsune/(9).png"),
    key: "Tail11",
    string: "Latsune",
    id: "11",
  },
  capitalize12: {
    value1: require("../../../assets/parts/Tail/Navaja/(1).png"),
    value2: require("../../../assets/parts/Tail/Navaja/(2).png"),
    value3: require("../../../assets/parts/Tail/Navaja/(3).png"),
    value4: require("../../../assets/parts/Tail/Navaja/(4).png"),
    value5: require("../../../assets/parts/Tail/Navaja/(5).png"),
    value6: require("../../../assets/parts/Tail/Navaja/(6).png"),
    value7: require("../../../assets/parts/Tail/Navaja/(7).png"),
    value8: require("../../../assets/parts/Tail/Navaja/(8).png"),
    value9: require("../../../assets/parts/Tail/Navaja/(9).png"),
    key: "Tail12",
    string: "Navaja",
    id: "12",
  },
  capitalize13: {
    value1: require("../../../assets/parts/Tail/pupae/(1).png"),
    value2: require("../../../assets/parts/Tail/pupae/(2).png"),
    value3: require("../../../assets/parts/Tail/pupae/(3).png"),
    value4: require("../../../assets/parts/Tail/pupae/(4).png"),
    value5: require("../../../assets/parts/Tail/pupae/(5).png"),
    value6: require("../../../assets/parts/Tail/pupae/(6).png"),
    value7: require("../../../assets/parts/Tail/pupae/(7).png"),
    value8: require("../../../assets/parts/Tail/pupae/(8).png"),
    value9: require("../../../assets/parts/Tail/pupae/(9).png"),
    key: "Tail13",
    string: "pupae",
    id: "13",
  },
  capitalize14: {
    value1: require("../../../assets/parts/Tail/ThornyCaterpillar/(1).png"),
    value2: require("../../../assets/parts/Tail/ThornyCaterpillar/(2).png"),
    value3: require("../../../assets/parts/Tail/ThornyCaterpillar/(3).png"),
    value4: require("../../../assets/parts/Tail/ThornyCaterpillar/(4).png"),
    value5: require("../../../assets/parts/Tail/ThornyCaterpillar/(5).png"),
    value6: require("../../../assets/parts/Tail/ThornyCaterpillar/(6).png"),
    value7: require("../../../assets/parts/Tail/ThornyCaterpillar/(7).png"),
    value8: require("../../../assets/parts/Tail/ThornyCaterpillar/(8).png"),
    value9: require("../../../assets/parts/Tail/ThornyCaterpillar/(9).png"),
    key: "Tail14",
    string: "ThornyCaterpillar",
    id: "14",
  },

  capitalize15: {
    value1: require("../../../assets/parts/Tail/Yam/(1).png"),
    value2: require("../../../assets/parts/Tail/Yam/(2).png"),
    value3: require("../../../assets/parts/Tail/Yam/(3).png"),
    value4: require("../../../assets/parts/Tail/Yam/(4).png"),
    value5: require("../../../assets/parts/Tail/Yam/(5).png"),
    value6: require("../../../assets/parts/Tail/Yam/(6).png"),
    value7: require("../../../assets/parts/Tail/Yam/(7).png"),
    value8: require("../../../assets/parts/Tail/Yam/(8).png"),
    value9: require("../../../assets/parts/Tail/Yam/(9).png"),
    key: "Tail15",
    string: "Yam",
    id: "15",
  },
};
type TailProps = {
  SetTail: Function;
  visible: boolean;
};
const Tail = forwardRef((props: TailProps, ref) => {
  const { SetTail, visible } = props;
  const [ getTailColor, setTailColor ] = useState(1);
  const [ getText, setText ] = useState("");
  const { index } = useTypedSelector((state) => state.color);
  const setItem = (e: any) => {
    SetTail(e.target.src);
    setTailColor(e.target.id);
    setText(e.target.alt);
    for (let i = 1; i <= 15; i++) {
      document.getElementById("Tail" + i)?.classList.remove("border");
    }
    document.getElementById("Tail" + e.target.id)?.classList.add("border");
  };

  const setRandItem = () => {
    var Rnum = Math.floor(Math.random() * 15 + 1);
    SetTail(images[`capitalize${Rnum}`][`value${index}`]);
    setText(images[`capitalize${Rnum}`]["string"]);
    setTailColor(Rnum);
    for (let i = 1; i <= 15; i++) {
      document.getElementById("Tail" + i)?.classList.remove("border");
    }
    document.getElementById("Tail" + Rnum)?.classList.add("border");
  };

  const setRandItemVal = (colVal: Number) => {
    var Rnum = Math.floor(Math.random() * 15 + 1);
    SetTail(images[`capitalize${Rnum}`][`value${colVal}`]);
    setText(images[`capitalize${Rnum}`]["string"]);
    setTailColor(Rnum);
    for (let i = 1; i <= 15; i++) {
      document.getElementById("Tail" + i)?.classList.remove("border");
    }
    document.getElementById("Tail" + Rnum)?.classList.add("border");
  };

  const setRandItemColor = () => {
    SetTail(images[`capitalize${getTailColor}`][`value${index}`]);
    setText(images[`capitalize${getTailColor}`]["string"]);
    for (let i = 1; i <= 15; i++) {
      document.getElementById("Tail" + i)?.classList.remove("border");
    }
    document.getElementById("Tail" + getTailColor)?.classList.add("border");
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
    <TailContainer>
      <TailTitle>
        Tail <span>{getText}</span>
      </TailTitle>
      <TailDetail>Power: 40</TailDetail>
      <TailContent>
        {Object.values(images).map((image: any) => (
          <TailItem id={image.key} key={image.key}>
            <img
              id={image.id}
              src={image[`value${index}`]}
              alt={image.string}
              onClick={(e: any) => setItem(e)}
            />
          </TailItem>
        ))}
      </TailContent>
    </TailContainer>: <></>
  );
});

export default Tail;
