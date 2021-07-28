import React from 'react';
import { Button } from 'react-md';

interface AddItemProps {
    doDescChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    doTitleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    doClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function AddItem(props: AddItemProps) {
    return(
        <div className="todo-item add-item">
            <input type="text" placeholder="Title..." onChange={props.doTitleChange} />
            <textarea placeholder="Description..." onChange={props.doDescChange}></textarea>
            <footer>
                <Button type="submit" onClick={props.doClick}>Save</Button>
            </footer>
        </div>
    );
}

export default AddItem;