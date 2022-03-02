import React, { useEffect, useState, useRef } from "react";
import {
  CollectiblesContainer,
  LogoContainer,
  LogoTitle,
  GifContainer,
} from "./index.styled";
import LargeLogo from "../../../assets/large_logo.png";

import Back from "../../playground/Back";
import Body from "../../playground/Body";
import Tail from "../../playground/Tail";
import Eyes from "../../playground/Eyes";
import Color from "../../playground/Color";
import Ears from "../../playground/Ears";
import Mouth from "../../playground/Mouth";
import Head from "../../playground/Head";

const Collectibles = () => {
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

  const onLoad = () => {
    setLoaded(true);
  };
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

  useEffect(() => {
    RandomGif();
  }, []);

  const RandomGif = () => {
    setLoaded(false);
    var colorVal = Math.floor(Math.random() * 9 + 1);
    console.log("colorVal", colorVal, Math.random());
    childRefColor.current.RandomNumber(colorVal);
    childRefBack.current.RandomNumber(colorVal);
    childRefBody.current.RandomNumber(colorVal);
    childRefEars.current.RandomNumber(colorVal);
    childRefEyes.current.RandomNumber(colorVal);
    childRefTail.current.RandomNumber(colorVal);
    childRefMouth.current.RandomNumber(colorVal);
    childRefHead.current.RandomNumber(colorVal);
  };

  return (
    <CollectiblesContainer>
      <LogoContainer>
        <img src={LargeLogo} width="483px" height="auto" alt="large_logo" />
        <LogoTitle>The Cutest Itty Bitty NFT Collectibles</LogoTitle>
      </LogoContainer>
      <GifContainer onClick={() => RandomGif()}>
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
        <span>Click me!</span>
      </GifContainer>
      <Color SetColor={PropsColor} ref={childRefColor} visible={false} />
      <Head SetHead={PropsHead} ref={childRefHead} visible={false} />
      <Mouth SetMouth={PropsMouth} ref={childRefMouth} visible={false} />
      <Eyes SetEyes={PropsEyes} ref={childRefEyes} visible={false} />
      <Ears SetEars={PropsEars} ref={childRefEars} visible={false} />
      <Back SetBack={PropsBack} ref={childRefBack} visible={false} />
      <Tail SetTail={PropsTail} ref={childRefTail} visible={false} />
      <Body SetBody={PropsBody} ref={childRefBody} visible={false} />
    </CollectiblesContainer>
  );
};

export default Collectibles;
