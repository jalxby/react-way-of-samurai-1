import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to={'1'}>Dimychs</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'2'}>Andrey</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'3'}>Sveta</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'4'}>Sasha</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'5'}>Victor</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'6'}>Valery</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi!</div>
                <div className={s.message}>How is you it-camasutra?</div>
                <div className={s.message}>Yo!</div>
            </div>
        </div>
    )
}

export default Dialogs;