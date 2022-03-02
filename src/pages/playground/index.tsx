import React, { useState, useRef } from "react";
import {
  PlayGroundContainer,
  PlayGroundDisplay,
  PlayGroundItem,
  PlayGroundTitle,
  Detail,
  CombineContent,
} from "./index.styled";
import Back from "./Back";
import Body from "./Body";
import Tail from "./Tail";
import Eyes from "./Eyes";
import Color from "./Color";
import Ears from "./Ears";
import Mouth from "./Mouth";
import Head from "./Head";

const PlayGround = () => {
  const childRefBack = useRef<any>();
  const childRefBody = useRef<any>();
  const childRefEars = useRef<any>();
  const childRefEyes = useRef<any>();
  const childRefTail = useRef<any>();
  const childRefColor = useRef<any>();
  const childRefMouth = useRef<any>();
  const childRefHead = useRef<any>();
  const [gifBack, setBackSrc] = useState("");
  const [gifBody, setBodySrc] = useState("");
  const [gifEars, setEarsSrc] = useState("");
  const [gifTail, setTailSrc] = useState("");
  const [gifEyes, setEyesSrc] = useState("");
  const [gifMouth, setMouthSrc] = useState("");
  const [gifHead, setHeadSrc] = useState("");
  const [indexColor, setColorSrc] = useState("");
  const [loaded, setLoaded] = useState(false);
  const PropsBack = (e: any) => {
    setBackSrc(e);
  };
  const PropsBody = (e: any) => {
    setBodySrc(e);
  };
  const PropsEars = (e: any) => {
    setEarsSrc(e);
  };
  const PropsTail = (e: any) => {
    setTailSrc(e);
  };
  const PropsEyes = (e: any) => {
    setEyesSrc(e);
  };
  const PropsColor = (e: any) => {
    setColorSrc(e);
  };
  const PropsMouth = (e: any) => {
    setMouthSrc(e);
  };
  const PropsHead = (e: any) => {
    setHeadSrc(e);
  };
  const onLoad = () => {
    setLoaded(true);
  };

  return (
    <PlayGroundContainer>
      <PlayGroundDisplay>
        {gifBody ? (
          <img
            src={gifBody}
            width="400px"
            height="auto"
            alt="example"
            style={{ display: loaded ? "block" : "none" }}
            
          />
        ) : (
          ""
        )}
        {gifHead ? (
          <img
            src={gifHead}
            width="400px"
            height="auto"
            alt="example"
            style={{ display: loaded ? "block" : "none" }}
            onLoad={onLoad}
          />
        ) : (
          ""
        )}

        {gifMouth ? (
          <img
            src={gifMouth}
            width="400px"
            height="auto"
            alt="example"
            style={{ display: loaded ? "block" : "none" }}
          />
        ) : (
          ""
        )}
        {gifEyes ? (
          <img
            src={gifEyes}
            width="400px"
            height="auto"
            alt="example"
            style={{ display: loaded ? "block" : "none" }}
          />
        ) : (
          ""
        )}
        {gifEars ? (
          <img
            src={gifEars}
            width="400px"
            height="auto"
            alt="example"
            style={{ display: loaded ? "block" : "none" }}
          />
        ) : (
          ""
        )}
        {gifBack ? (
          <img
            src={gifBack}
            width="400px"
            height="auto"
            alt="example"
            style={{ display: loaded ? "block" : "none" }}
          />
        ) : (
          ""
        )}
        {gifTail ? (
          <img
            src={gifTail}
            width="400px"
            height="auto"
            alt="example"
            style={{ display: loaded ? "block" : "none" }}
          />
        ) : (
          ""
        )}
      </PlayGroundDisplay>
      <PlayGroundItem>
        <PlayGroundTitle>Select Parts</PlayGroundTitle>
        <Detail>Possible Combinations: 4587520</Detail>
        <CombineContent>
          <span>Press Enter to</span>
          <button
            onClick={() => {
              setLoaded(false);
              var colorVal = Math.floor(Math.random() * 9 + 1);
              childRefColor.current.RandomNumber(colorVal);
              childRefBack.current.RandomNumber(colorVal);
              childRefBody.current.RandomNumber(colorVal);
              childRefEars.current.RandomNumber(colorVal);
              childRefEyes.current.RandomNumber(colorVal);
              childRefTail.current.RandomNumber(colorVal);
              childRefMouth.current.RandomNumber(colorVal);
              childRefHead.current.RandomNumber(colorVal);
            }}
          >
            Randomizes
          </button>
        </CombineContent>
        <Color SetColor={PropsColor} ref={childRefColor} visible={true} />
        <Head SetHead={PropsHead} ref={childRefHead} visible={true} />
        <Mouth SetMouth={PropsMouth} ref={childRefMouth} visible={true} />
        <Eyes SetEyes={PropsEyes} ref={childRefEyes} visible={true} />
        <Ears SetEars={PropsEars} ref={childRefEars} visible={true} />
        <Back SetBack={PropsBack} ref={childRefBack} visible={true} />
        <Tail SetTail={PropsTail} ref={childRefTail} visible={true} />
        <Body SetBody={PropsBody} ref={childRefBody} visible={true} />
      </PlayGroundItem>
    </PlayGroundContainer>
  );
};

export default PlayGround;
