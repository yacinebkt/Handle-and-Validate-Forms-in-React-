import React, {useState} from "react";
import "./style.css";

export default function Input(props) {
    const [focusedAndLive, setfocusedAndLive] = useState(false)

    const handleFocus = (e) => {
        setfocusedAndLive(true)

    }
  return (
    <div className="FormIn">
      <label> {props.label}</label>
      <input 
        placeholder={props.placeholder} 
        name={props.name}
        type = {props.type}
        value={props.value}
        onChange={props.onChange}
        required ={props.required}
        pattern = {props.pattern}
        onBlur = {handleFocus}
        //onFocus ={() => props.name =='confirmPassword' && setfocusedAndLive(true)}
        focused={focusedAndLive.toString()}
      />
      <span>
          {props.errorMessage}
      </span>
      
    </div>
  );
}
