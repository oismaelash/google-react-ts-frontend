import React from "react";
import "./index.css";
import { ButtonProps } from "../../@types";

export default function Button(props: ButtonProps) {
  return (
    <button className={props.classNameType} onClick={props.onClickProp}>
      {props.title}
    </button>
  );
}
