import React from "react";
import styled from "styled-components";

interface styledBtnProps {
  text: string;
  color: string;
  textColr: string;
  onClick?: (e: any) => void;
}
const StyledButton = (props: styledBtnProps) => {
  const StyledButtonContainer = styled.button`
    background-color: ${props.color};
    border: 0;
    cursor: pointer;
    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
    padding: 6px 16px;
    font-size: 0.875rem;
    min-width: 64px;
    box-sizing: border-box;
    font-family: "Poppins",sans-serif;
    font-weight: 500;
    line-height: 1.75;
    border-radius: 4px;
    text-transform: uppercase;
    color: ${props.textColr};
  `;

  return (
    <StyledButtonContainer onClick={props.onClick}>
      {props.text}
    </StyledButtonContainer>
  );
};

export default StyledButton;
