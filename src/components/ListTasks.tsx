import React, {useEffect, useState} from 'react';
import { createContext, useContext } from "react";
import Task, {TaskType} from "./Task";
import ButtonAction from "./ButtonAction";
import "./ListTasks.css"

const initialTasksState: TaskType[] = [];
const initialListContext: {
    tasks: TaskType[],
    setTasks:  React.Dispatch<React.SetStateAction<TaskType[]>>
} = {
    tasks: [],
    setTasks: function(value: React.SetStateAction<TaskType[]>) {}
};

export const ListContext = createContext(initialListContext);

export default function ListTasks(){

    function dateTimeReviver(key: any, value: any): any {
        if (typeof value === 'string') {
            let a= Date.parse(value);
            if (!isNaN(a)) {
                return new Date(a);
            }
        }

        return value;
    }

    const parsedTasks: TaskType[] = JSON.parse(localStorage.getItem('tasks') ?? "[]", dateTimeReviver) ?? [];
    const [tasks, setTasks]
        = useState(parsedTasks);
    const [nextTaskNumber, setNextTaskNumber]
        = useState(parseInt(localStorage.getItem('nextTaskKey') ?? "0", 10) ?? 0);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
        localStorage.setItem('nextTaskKey', "" + tasks.length);
    }, [tasks]);


    function addItem(){
        const newTask: TaskType = {
            id: nextTaskNumber,
            name: "Новая задача",
            description: "Очень важная задача, которую нужно сделать",
            isCompleted: false,
            date: new Date()
        };
        setTasks([...tasks, newTask]);
        setNextTaskNumber(nextTaskNumber + 1);
    }

    return (
        <div className={"ListTasks"}>
            <ListContext.Provider value={{tasks, setTasks}}>
                {tasks.map((task, i) => {
                    return (<Task data={task} />);
                })}
            </ListContext.Provider>
            <div className={"ListControls"}>
                <ButtonAction text={"➕"} onClicked={addItem} />
            </div>
        </div>
    );
}