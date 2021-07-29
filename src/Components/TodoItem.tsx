import React, { useEffect, useState } from 'react';

export type TodoItemType = {
    id: string,
    title: string,
    desc: string,
    checked: boolean
}

export type TodoItemProps = {
    id: string,
    title: string,
    desc: string,
    checked: boolean,
    changeChecked: (event: React.MouseEvent<HTMLInputElement>, id: string) => void,
}

function TodoItem(props: TodoItemProps) {
    const [ isChecked, setIsChecked ] = useState(props.checked);

    useEffect(() => {
        const data = localStorage.getItem("checkboxData");

        if (data) setIsChecked(JSON.parse(data).checked);
    }, [])

    useEffect(() => {
        localStorage.setItem("checkBoxData", JSON.stringify(isChecked));
    });

    return(
        <div className="todo-item">
            <h3>{props.title}</h3>
            <p>{props.desc}</p>
            <footer>
                <span>{isChecked ? "Finished" : "Unfinished"}</span>
                <input type="checkbox" checked={isChecked} onClick={(e) => {
                    props.changeChecked(e, props.id);
                    setIsChecked(!isChecked);
                }} />
            </footer>
        </div>
    );
}

export default TodoItem;