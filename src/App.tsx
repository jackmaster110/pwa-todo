import React, { useState } from "react";
import { nanoid } from "nanoid";
import { Route, Switch, useLocation } from "react-router-dom";
import AddList from "./Components/AddList";
import TodoList, { TodoListType } from "./Components/TodoList";

function App() {
    const [todoLists, setTodoLists] = useState<TodoListType[]>([
        {
            path: "/list1",
            id: nanoid(),
            title: "List 1",
            list: [
                {
                    id: nanoid(),
                    title: "Todo Item 1",
                    desc: "First todo item",
                    checked: false,
                },
            ],
        },
    ]);
    const [currentTitle, setCurrentTitle] = useState("");
    const [currentDesc, setCurrentDesc] = useState("");
    const currentLocation = useLocation();

    const doTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentTitle(event.currentTarget.value);
    };

    const doDescChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setCurrentDesc(event.currentTarget.value);
    };

    const doAddTodo = (event: React.MouseEvent<HTMLButtonElement>) => {
        const newItem = {
            id: nanoid(),
            title: currentTitle,
            desc: currentDesc,
            checked: false,
        };
        setTodoLists(
            todoLists.map((list) => {
                if (list.path === currentLocation.pathname) {
                    return { ...list, list: [...list.list, newItem] };
                } else return list;
            })
        );
    };

    return (
        <div className="app-container">
            <Switch>
                <Route exact path="/" component={Home} />
                {todoLists.map((todo) => {
                    return (
                        <Route
                            path={todo.path}
                            render={(props) => (
                                <TodoList
                                    {...props}
                                    path={todo.path}
                                    id={todo.id}
                                    title={todo.title}
                                    list={todo.list}
                                    functions={{
                                        list: {
                                            doTitleChange: doTitleChange,
                                            doDescChange: doDescChange,
                                            doClick: doAddTodo,
                                        },
                                    }}
                                />
                            )}
                        />
                    );
                })}
                <Route path="/add" component={AddList} />
            </Switch>
        </div>
    );
}

function Home() {
    return (
        <div className="content home-container">
            PWA todo lists, choose a list to get started.
        </div>
    );
}

export default App;
