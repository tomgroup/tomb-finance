import React, { forwardRef, useImperativeHandle, useEffect, useState } from "react";
import {
  HeadContainer,
  HeadTitle,
  HeadDetail,
  HeadContent,
  HeadItem,
} from "./index.styled";
import { useTypedSelector } from "../../../hooks/useTypeSelector";

const images: { [key: string]: any } = {
  capitalize1: {
    value1: require("../../../assets/parts/Head/Antenna/(1).png"),
    value2: require("../../../assets/parts/Head/Antenna/(2).png"),
    value3: require("../../../assets/parts/Head/Antenna/(3).png"),
    value4: require("../../../assets/parts/Head/Antenna/(4).png"),
    value5: require("../../../assets/parts/Head/Antenna/(5).png"),
    value6: require("../../../assets/parts/Head/Antenna/(6).png"),
    value7: require("../../../assets/parts/Head/Antenna/(7).png"),
    value8: require("../../../assets/parts/Head/Antenna/(8).png"),
    value9: require("../../../assets/parts/Head/Antenna/(9).png"),
    key: "head1",
    string: "Antenna",
    id: "1",
  },
  capitalize2: {
    value1: require("../../../assets/parts/Head/Babylonia/(1).png"),
    value2: require("../../../assets/parts/Head/Babylonia/(2).png"),
    value3: require("../../../assets/parts/Head/Babylonia/(3).png"),
    value4: require("../../../assets/parts/Head/Babylonia/(4).png"),
    value5: require("../../../assets/parts/Head/Babylonia/(5).png"),
    value6: require("../../../assets/parts/Head/Babylonia/(6).png"),
    value7: require("../../../assets/parts/Head/Babylonia/(7).png"),
    value8: require("../../../assets/parts/Head/Babylonia/(8).png"),
    value9: require("../../../assets/parts/Head/Babylonia/(9).png"),
    key: "head2",
    string: "Babylonia",
    id: "2",
  },
  capitalize3: {
    value1: require("../../../assets/parts/Head/Cuckoo/(1).png"),
    value2: require("../../../assets/parts/Head/Cuckoo/(2).png"),
    value3: require("../../../assets/parts/Head/Cuckoo/(3).png"),
    value4: require("../../../assets/parts/Head/Cuckoo/(4).png"),
    value5: require("../../../assets/parts/Head/Cuckoo/(5).png"),
    value6: require("../../../assets/parts/Head/Cuckoo/(6).png"),
    value7: require("../../../assets/parts/Head/Cuckoo/(7).png"),
    value8: require("../../../assets/parts/Head/Cuckoo/(8).png"),
    value9: require("../../../assets/parts/Head/Cuckoo/(9).png"),
    key: "head3",
    string: "Cuckoo",
    id: "3",
  },
  capitalize4: {
    value1: require("../../../assets/parts/Head/DeepSea/(1).png"),
    value2: require("../../../assets/parts/Head/DeepSea/(2).png"),
    value3: require("../../../assets/parts/Head/DeepSea/(3).png"),
    value4: require("../../../assets/parts/Head/DeepSea/(4).png"),
    value5: require("../../../assets/parts/Head/DeepSea/(5).png"),
    value6: require("../../../assets/parts/Head/DeepSea/(6).png"),
    value7: require("../../../assets/parts/Head/DeepSea/(7).png"),
    value8: require("../../../assets/parts/Head/DeepSea/(8).png"),
    value9: require("../../../assets/parts/Head/DeepSea/(9).png"),
    key: "head4",
    string: "DeepSea",
    id: "4",
  },
  capitalize5: {
    value1: require("../../../assets/parts/Head/DualBlades/(1).png"),
    value2: require("../../../assets/parts/Head/DualBlades/(2).png"),
    value3: require("../../../assets/parts/Head/DualBlades/(3).png"),
    value4: require("../../../assets/parts/Head/DualBlades/(4).png"),
    value5: require("../../../assets/parts/Head/DualBlades/(5).png"),
    value6: require("../../../assets/parts/Head/DualBlades/(6).png"),
    value7: require("../../../assets/parts/Head/DualBlades/(7).png"),
    value8: require("../../../assets/parts/Head/DualBlades/(8).png"),
    value9: require("../../../assets/parts/Head/DualBlades/(9).png"),
    key: "head5",
    string: "DualBlades",
    id: "5",
  },
  capitalize6: {
    value1: require("../../../assets/parts/Head/EggshellRouge/(1).png"),
    value2: require("../../../assets/parts/Head/EggshellRouge/(2).png"),
    value3: require("../../../assets/parts/Head/EggshellRouge/(3).png"),
    value4: require("../../../assets/parts/Head/EggshellRouge/(4).png"),
    value5: require("../../../assets/parts/Head/EggshellRouge/(5).png"),
    value6: require("../../../assets/parts/Head/EggshellRouge/(6).png"),
    value7: require("../../../assets/parts/Head/EggshellRouge/(7).png"),
    value8: require("../../../assets/parts/Head/EggshellRouge/(8).png"),
    value9: require("../../../assets/parts/Head/EggshellRouge/(9).png"),
    key: "head6",
    string: "EggshellRouge",
    id: "6",
  },
  capitalize7: {
    value1: require("../../../assets/parts/Head/Hero/(1).png"),
    value2: require("../../../assets/parts/Head/Hero/(2).png"),
    value3: require("../../../assets/parts/Head/Hero/(3).png"),
    value4: require("../../../assets/parts/Head/Hero/(4).png"),
    value5: require("../../../assets/parts/Head/Hero/(5).png"),
    value6: require("../../../assets/parts/Head/Hero/(6).png"),
    value7: require("../../../assets/parts/Head/Hero/(7).png"),
    value8: require("../../../assets/parts/Head/Hero/(8).png"),
    value9: require("../../../assets/parts/Head/Hero/(9).png"),
    key: "head7",
    string: "Hero",
    id: "7",
  },
  capitalize8: {
    value1: require("../../../assets/parts/Head/Leaf Bug/(1).png"),
    value2: require("../../../assets/parts/Head/Leaf Bug/(2).png"),
    value3: require("../../../assets/parts/Head/Leaf Bug/(3).png"),
    value4: require("../../../assets/parts/Head/Leaf Bug/(4).png"),
    value5: require("../../../assets/parts/Head/Leaf Bug/(5).png"),
    value6: require("../../../assets/parts/Head/Leaf Bug/(6).png"),
    value7: require("../../../assets/parts/Head/Leaf Bug/(7).png"),
    value8: require("../../../assets/parts/Head/Leaf Bug/(8).png"),
    value9: require("../../../assets/parts/Head/Leaf Bug/(9).png"),
    key: "head8",
    string: "Leaf Bug",
    id: "8",
  },
  capitalize9: {
    value1: require("../../../assets/parts/Head/Parasite/(1).png"),
    value2: require("../../../assets/parts/Head/Parasite/(2).png"),
    value3: require("../../../assets/parts/Head/Parasite/(3).png"),
    value4: require("../../../assets/parts/Head/Parasite/(4).png"),
    value5: require("../../../assets/parts/Head/Parasite/(5).png"),
    value6: require("../../../assets/parts/Head/Parasite/(6).png"),
    value7: require("../../../assets/parts/Head/Parasite/(7).png"),
    value8: require("../../../assets/parts/Head/Parasite/(8).png"),
    value9: require("../../../assets/parts/Head/Parasite/(9).png"),
    key: "head9",
    string: "Parasite",
    id: "9",
  },
  capitalize10: {
    value1: require("../../../assets/parts/Head/Rosebud/(1).png"),
    value2: require("../../../assets/parts/Head/Rosebud/(2).png"),
    value3: require("../../../assets/parts/Head/Rosebud/(3).png"),
    value4: require("../../../assets/parts/Head/Rosebud/(4).png"),
    value5: require("../../../assets/parts/Head/Rosebud/(5).png"),
    value6: require("../../../assets/parts/Head/Rosebud/(6).png"),
    value7: require("../../../assets/parts/Head/Rosebud/(7).png"),
    value8: require("../../../assets/parts/Head/Rosebud/(8).png"),
    value9: require("../../../assets/parts/Head/Rosebud/(9).png"),
    key: "head10",
    string: "Rosebud",
    id: "10",
  },
  capitalize11: {
    value1: require("../../../assets/parts/Head/Tealshell/(1).png"),
    value2: require("../../../assets/parts/Head/Tealshell/(2).png"),
    value3: require("../../../assets/parts/Head/Tealshell/(3).png"),
    value4: require("../../../assets/parts/Head/Tealshell/(4).png"),
    value5: require("../../../assets/parts/Head/Tealshell/(5).png"),
    value6: require("../../../assets/parts/Head/Tealshell/(6).png"),
    value7: require("../../../assets/parts/Head/Tealshell/(7).png"),
    value8: require("../../../assets/parts/Head/Tealshell/(8).png"),
    value9: require("../../../assets/parts/Head/Tealshell/(9).png"),
    key: "head11",
    string: "Tealshell",
    id: "11",
  },
  capitalize12: {
    value1: require("../../../assets/parts/Head/UniCorn/(1).png"),
    value2: require("../../../assets/parts/Head/UniCorn/(2).png"),
    value3: require("../../../assets/parts/Head/UniCorn/(3).png"),
    value4: require("../../../assets/parts/Head/UniCorn/(4).png"),
    value5: require("../../../assets/parts/Head/UniCorn/(5).png"),
    value6: require("../../../assets/parts/Head/UniCorn/(6).png"),
    value7: require("../../../assets/parts/Head/UniCorn/(7).png"),
    value8: require("../../../assets/parts/Head/UniCorn/(8).png"),
    value9: require("../../../assets/parts/Head/UniCorn/(9).png"),
    key: "head12",
    string: "UniCorn",
    id: "12",
  },
  capitalize13: {
    value1: require("../../../assets/parts/Head/Unko/(1).png"),
    value2: require("../../../assets/parts/Head/Unko/(2).png"),
    value3: require("../../../assets/parts/Head/Unko/(3).png"),
    value4: require("../../../assets/parts/Head/Unko/(4).png"),
    value5: require("../../../assets/parts/Head/Unko/(5).png"),
    value6: require("../../../assets/parts/Head/Unko/(6).png"),
    value7: require("../../../assets/parts/Head/Unko/(7).png"),
    value8: require("../../../assets/parts/Head/Unko/(8).png"),
    value9: require("../../../assets/parts/Head/Unko/(9).png"),
    key: "head13",
    string: "Unko",
    id: "13",
  },
  capitalize14: {
    value1: require("../../../assets/parts/Head/Watermelon/(1).png"),
    value2: require("../../../assets/parts/Head/Watermelon/(2).png"),
    value3: require("../../../assets/parts/Head/Watermelon/(3).png"),
    value4: require("../../../assets/parts/Head/Watermelon/(4).png"),
    value5: require("../../../assets/parts/Head/Watermelon/(5).png"),
    value6: require("../../../assets/parts/Head/Watermelon/(6).png"),
    value7: require("../../../assets/parts/Head/Watermelon/(7).png"),
    value8: require("../../../assets/parts/Head/Watermelon/(8).png"),
    value9: require("../../../assets/parts/Head/Watermelon/(9).png"),
    key: "head14",
    string: "Watermelon",
    id: "14",
  },
  capitalize15: {
    value1: require("../../../assets/parts/Head/Winghorn/(1).png"),
    value2: require("../../../assets/parts/Head/Winghorn/(2).png"),
    value3: require("../../../assets/parts/Head/Winghorn/(3).png"),
    value4: require("../../../assets/parts/Head/Winghorn/(4).png"),
    value5: require("../../../assets/parts/Head/Winghorn/(5).png"),
    value6: require("../../../assets/parts/Head/Winghorn/(6).png"),
    value7: require("../../../assets/parts/Head/Winghorn/(7).png"),
    value8: require("../../../assets/parts/Head/Winghorn/(8).png"),
    value9: require("../../../assets/parts/Head/Winghorn/(9).png"),
    key: "head15",
    string: "Winghorn",
    id: "15",
  },
};

type HeadProps = {
  SetHead: Function;
  visible: boolean;
};

const Head = forwardRef((props: HeadProps, ref) => {
  const { SetHead, visible } = props;
  const [ getHeadColor, SetHeadColor ] = useState(1);
  const [ getText, setText ] = useState("");
  const { index } = useTypedSelector((state) => state.color);
  const setItem = (e: any) => {
    SetHeadColor(e.target.id);
    SetHead(e.target.src);
    setText(e.target.alt);
    for (let i = 1; i <= 15; i++) {
      document.getElementById("head" + i)?.classList.remove("border");
    }
    document.getElementById("head" + e.target.id)?.classList.add("border");
  };

  const setRandItem = () => {
    var Rnum = Math.floor(Math.random() * 15 + 1);
    SetHeadColor(Rnum);
    SetHead(images[`capitalize${Rnum}`][`value${index}`]);
    setText(images[`capitalize${Rnum}`]["string"]);
    for (let i = 1; i <= 15; i++) {
      document.getElementById("head" + i)?.classList.remove("border");
    }
    document.getElementById("head" + Rnum)?.classList.add("border");
  };

  const setRandItemVal = (colVal: Number) => {
    var Rnum = Math.floor(Math.random() * 15 + 1);
    SetHeadColor(Rnum);
    SetHead(images[`capitalize${Rnum}`][`value${colVal}`]);
    setText(images[`capitalize${Rnum}`]["string"]);
    for (let i = 1; i <= 15; i++) {
      document.getElementById("head" + i)?.classList.remove("border");
    }
    document.getElementById("head" + Rnum)?.classList.add("border");
  };

  const setRandItemColor = () => {
    SetHead(images[`capitalize${getHeadColor}`][`value${index}`]);
    setText(images[`capitalize${getHeadColor}`]["string"]);
    for (let i = 1; i <= 15; i++) {
      document.getElementById("head" + i)?.classList.remove("border");
    }
    document.getElementById("head" + getHeadColor)?.classList.add("border");
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
    <HeadContainer>
      <HeadTitle>
        Head <span>{getText}</span>
      </HeadTitle>
      <HeadDetail>Power: 40</HeadDetail>
      <HeadContent>
        {Object.values(images).map((image: any) => (
          <HeadItem id={image.key} key={image.key}>
            <img
              id={image.id}
              src={image[`value${index}`]}
              alt={image.string}
              onClick={(e: any) => setItem(e)}
            />
          </HeadItem>
        ))}
      </HeadContent>
    </HeadContainer>: <></>
  );
});

export default Head;
