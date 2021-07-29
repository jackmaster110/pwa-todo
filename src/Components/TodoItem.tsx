import React, { useEffect, useState } from "react";
import { MdDeleteForever } from "react-icons/md";

export type TodoItemType = {
    id: string;
    title: string;
    desc: string;
    checked: boolean;
};

export type TodoItemProps = {
    id: string;
    title: string;
    desc: string;
    checked: boolean;
    changeChecked: (
        event: React.MouseEvent<HTMLInputElement>,
        id: string
    ) => void;
    deleteItem: (event: React.MouseEvent<SVGElement>, id: string) => void;
};

function TodoItem(props: TodoItemProps) {
    const [isChecked, setIsChecked] = useState(props.checked);

    useEffect(() => {
        const data = localStorage.getItem("checkboxData");

        if (data) setIsChecked(JSON.parse(data).checked);
    }, []);

    useEffect(() => {
        localStorage.setItem("checkBoxData", JSON.stringify(isChecked));
    });

    return (
        <div className="todo-item">
            <h3>{props.title}</h3>
            <p>{props.desc}</p>
            <footer>
                <span>{isChecked ? "Finished" : "Unfinished"}</span>
                <div className="footer-buttons">
                    <MdDeleteForever
                        className="icon delete-icon"
                        onClick={(e) => {
                            props.deleteItem(e, props.id);
                        }}
                    />
                    <input
                        type="checkbox"
                        checked={isChecked}
                        onClick={(e) => {
                            props.changeChecked(e, props.id);
                            setIsChecked(!isChecked);
                        }}
                    />
                </div>
            </footer>
        </div>
    );
}

export default TodoItem;
