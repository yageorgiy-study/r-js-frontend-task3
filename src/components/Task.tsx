import {ChangeEvent, EventHandler, useContext} from "react";
import {ListContext} from "./ListTasks";
import ButtonTick from "./ButtonTick";
import Input from "./Input";
import ButtonAction from "./ButtonAction";
import InputDate from "./InputDate";
import "./Task.css"

export type TaskType = {
    id: number,
    isCompleted: boolean,
    name: string,
    description: string,
    date: Date
};

export default function Task({data}: {data: TaskType}) {
    const { tasks, setTasks} = useContext(ListContext);

    /* Delete task */

    function deleteTask() {
        const remainingTasks = tasks.filter((task) => data.id !== task.id);
        setTasks(remainingTasks);
    }

    /* Edit task name */

    function editTick(){
        const editedTaskList = tasks.map((task) => {
            if (data.id === task.id) {
                return { ...task, isCompleted: !task.isCompleted };
            }
            return task;
        });
        setTasks(editedTaskList);
    }

    function editTaskDescription(e: ChangeEvent<HTMLInputElement>){
        const editedTaskList = tasks.map((task) => {
            if (data.id === task.id) {
                return { ...task, description: e.target.value };
            }
            return task;
        });
        setTasks(editedTaskList);
    }

    function editTaskName(e: ChangeEvent<HTMLInputElement>){
        const editedTaskList = tasks.map((task) => {
            if (data.id === task.id) {
                return { ...task, name: e.target.value };
            }
            return task;
        });
        setTasks(editedTaskList);
    }

    function editDate(e: Date){
        const editedTaskList = tasks.map((task) => {
            if (data.id === task.id) {
                return { ...task, date: e };
            }
            return task;
        });
        setTasks(editedTaskList);
    }

    return (
        <div className={"Task"}>
            <div className={"Information"}>
                <div className={"Name"}>
                    <Input value={data.name} onEdited={editTaskName} />
                </div>
                <div className={"Description"}>
                    <Input value={data.description} onEdited={editTaskDescription} />
                    <p className={"Date"}>Выполнить до: {
                        data.date.getFullYear() + " / " + data.date.getMonth() + " / " + data.date.getDate()
                    }</p>
                    <InputDate value={data.date} onEdited={editDate} />
                </div>
            </div>
            <div className={"TaskControls"}>
                <ButtonTick isTicked={data.isCompleted} onClicked={editTick}/>
                <ButtonAction text={"🗑️"} onClicked={deleteTask}/>
            </div>
        </div>
    );
};