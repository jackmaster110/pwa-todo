import React from 'react';
import { Button, Form } from 'react-md';

interface AddListProps {
    onTextChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function AddList(props: AddListProps) {
    return(
        <div className="add-list todo-list">
            <Form className="form">
                <h3>Add List</h3>
                <label className="label">List Title: </label>
                <input type="text" onChange={props.onTextChange} />
                <Button type="submit" onClick={props.onSubmit} >Add List</Button>
            </Form>
        </div>
    );
}

export default AddList;
