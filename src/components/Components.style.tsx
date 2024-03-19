import styled from "styled-components";
import { Link } from "react-router-dom";
import Modal from "./Modal";

export const ButtonRound = styled.button`
  text-align: center;
  line-height: 0px;
  padding-right: 0px;
  padding-left: 0px;

  height: 13px;
  width: 13px;
  color: #ccc;
  background-color: white;
  padding-bottom: 3px;
  position: relative;
  top: 0px;
  border: solid 1px #ccc;
  border-radius: 10px;
  align-self: center;
  justify-self: center;
`;

export const InputGrey = styled.input`
  border: 1px solid #ccc;
  border-radius: 5px;
  color: #ccc;
  text-align: left;
  font-size: 12px;
  padding-left: 0.5rem;
  justify-self: start;
  width: 100%;
  margin-right: 0.5rem;
`;

// el código para la estética del botón está sacado directamente de internet
export const LabelToggle = styled.label<{ checked: boolean }>`
  cursor: pointer;
  text-indent: -9999px;
  width: 250px;
  height: 125px;
  background: ${({ checked }) => (checked ? "#50b78b" : "#888")};
  display: block;
  border-radius: 100px;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    left: ${({ checked }) => (checked ? "14px" : "calc(55% - 5px)")};
    top: 12px;
    width: 100px;
    height: 100px;
    background: #fff;
    border-radius: 90px;
    transition: 0.3s;
  }
`;

// export const LinkGreen = styled.link`
//   background-color: #50b78b;
//   color: "white";
//   font-size: 6px;
//   white-space: nowrap;
// `;
