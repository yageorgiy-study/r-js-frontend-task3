import {ChangeEvent, ChangeEventHandler} from "react";
import "./Input.css"
export default function Input({value, onEdited}: {value: string, onEdited: (event: ChangeEvent<HTMLInputElement>) => void}){
    return (
        <input className={"Input"} value={value} onChange={onEdited} />
    );
}