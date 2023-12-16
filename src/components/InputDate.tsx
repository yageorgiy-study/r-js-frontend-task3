import {ChangeEvent, ChangeEventHandler} from "react";
import "./Input.css"

export default function InputDate({value, onEdited}: {value: Date, onEdited: (value: Date) => void}){

    function tryParse(e: ChangeEvent<HTMLInputElement>){
        const tryParse = Date.parse(e.target.value);
        if(isNaN(tryParse)) return;

        const date = new Date(tryParse);
        onEdited(date);
    }

    function parseDate(date: Date): string{
        const month = date.getMonth();
        const day = date.getDate();
        return date.getFullYear() + "-" + (month < 10 ? "0" + month : month) + "-" + (day < 10 ? "0" + day : day);
    }

    return (
        <input type={"date"} className={"InputDate"} value={parseDate(value)} onChange={tryParse} />
    );
}