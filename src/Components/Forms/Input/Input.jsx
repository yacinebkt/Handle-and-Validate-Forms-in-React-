import React from "react";
import "./style.css";

export default function Input(props) {
  return (
    <div className="FormIn">
      <label> {props.label}</label>
      <input 
        placeholder={props.placeholder} 
        name={props.name}
        type = {props.type}
        value={props.value}
        onChange={props.onChange}
      />
      <span>
          {props.errorMessage}
      </span>
      
    </div>
  );
}
