import React from "react";
import AddItem from "./AddItem";
import TodoItem, { TodoItemProps } from "./TodoItem";

interface TodoHandlers {
    list: {
        doDescChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
        doTitleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
        doClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    };
}

export type TodoListType = {
    path: string,
    id: string,
    title: string,
    list: TodoItemProps[]
}

export type TodoListProps = {
    path: string;
    id: string;
    title: string;
    list: TodoItemProps[];
    functions: TodoHandlers;
};

function TodoList(props: TodoListProps) {
    return (
        <div className="todo-list">
            {props.list.map((item) => {
                return (
                    <TodoItem
                        id={item.id}
                        title={item.title}
                        desc={item.desc}
                        checked={item.checked}
                    />
                );
            })}
            <AddItem
                doClick={props.functions.list.doClick}
                doTitleChange={props.functions.list.doTitleChange}
                doDescChange={props.functions.list.doDescChange}
            />
        </div>
    );
}

export default TodoList;
