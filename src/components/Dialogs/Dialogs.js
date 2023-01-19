import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Sveta'},
        {id: 3, name: 'Sasha'},
        {id: 4, name: 'Victor'},
        {id: 5, name: 'Andrey'},
        {id: 6, name: 'Valery'}
    ]


    let messages = [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How is you it-camasutra?'},
        {id: 3, message: 'Yo!'},
        {id: 4, message: 'Hello!'},
        {id: 5, message: 'Go go go!'},
        {id: 6, message: 'Ready?'}
    ]
    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = messages.map(m => <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;