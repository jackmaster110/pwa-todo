import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { Route, Switch, useLocation } from "react-router-dom";
import AddList from "./Components/AddList";
import TodoList, { TodoListType } from "./Components/TodoList";
import NavTree, { addToNavTree } from "./navTree";

function App() {
    const [todoLists, setTodoLists] = useState<TodoListType[]>([
        {
            path: "/list1",
            id: nanoid(),
            title: "List 1",
            list: [],
        },
    ]);
    const [currentTitle, setCurrentTitle] = useState("");
    const [currentDesc, setCurrentDesc] = useState("");
    const [currentListTitle, setCurrentListTitle] = useState("");
    const [currentLastPath, setCurrentLastPath] = useState(1);
    const currentLocation = useLocation();

    useEffect(() => {
        const data = localStorage.getItem("data");

        if (data) {
            setTodoLists(JSON.parse(data).todoLists);
            setCurrentTitle(JSON.parse(data).currentTitle);
            setCurrentDesc(JSON.parse(data).currentDesc);
            setCurrentListTitle(JSON.parse(data).currentListTitle);
            setCurrentLastPath(JSON.parse(data).currentLastPath);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(
            "data",
            JSON.stringify({
                todoLists: todoLists,
                currentTitle: currentTitle,
                currentDesc: currentDesc,
                currentListTitle: currentListTitle,
                currentLastPath: currentLastPath,
            })
        );
    });

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

    const onListTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentListTitle(event.currentTarget.value);
    };

    const addList = (event: React.MouseEvent<HTMLButtonElement>) => {
        const numb = currentLastPath + 1;
        const newList: TodoListType = {
            path: `/list${numb}`,
            id: nanoid(),
            title: currentListTitle,
            list: [],
        };
        setTodoLists([...todoLists, newList]);
        setCurrentLastPath(numb);
        addToNavTree(newList.path, newList.title);
    };

    const checkboxChange = (
        event: React.MouseEvent<HTMLInputElement>,
        id: string
    ) => {
        var temp = todoLists;
        temp.forEach((todo) => {
            todo.list.forEach((item) => {
                if (item.id === id) {
                    item.checked = event.currentTarget.checked;
                    console.log(item.checked);
                }
            });
        });
        setTodoLists(temp);
        console.log(temp);
    };

    return (
        <div className="app-container">
            <NavTree />
            <Switch>
                <Route exact path="/" component={Home} />
                {todoLists.map((todoList) => {
                    return (
                        <Route
                            path={todoList.path}
                            render={(props) => (
                                <TodoList
                                    {...props}
                                    path={todoList.path}
                                    id={todoList.id}
                                    title={todoList.title}
                                    list={todoList.list}
                                    functions={{
                                        list: {
                                            doTitleChange: doTitleChange,
                                            doDescChange: doDescChange,
                                            doClick: doAddTodo,
                                            doCheckboxChange: checkboxChange,
                                        },
                                    }}
                                />
                            )}
                        />
                    );
                })}
                <Route
                    path="/add"
                    render={(props) => (
                        <AddList
                            {...props}
                            onSubmit={addList}
                            onTextChange={onListTitleChange}
                        />
                    )}
                />
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
