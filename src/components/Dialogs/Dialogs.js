import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";

let newMessageElement = React.createRef();
let sendMessage = () => {
    let text = newMessageElement.current.value
    alert(text)
}

const Dialogs = (props) => {


    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.state.messages.map(m => <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div><textarea ref={newMessageElement}></textarea></div>
                <button onClick={sendMessage}>send</button>
            </div>
        </div>
    )
}

export default Dialogs;