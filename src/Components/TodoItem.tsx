import React from 'react';

export type TodoItemProps = {
    id: string,
    title: string,
    desc: string,
    checked: boolean
}

function TodoItem(props: TodoItemProps) {
    return(
        <div className="todo-item">
            <h3>{props.title}</h3>
            <p>{props.desc}</p>
            <footer>
                <span>{props.checked ? "Finished" : "Unfinished"}</span>
                <input type="checkbox" checked={props.checked} />
            </footer>
        </div>
    );
}

export default TodoItem;