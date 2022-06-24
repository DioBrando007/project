import cls from './Dialogs.module.css';

import {NavLink} from 'react-router-dom'
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogsData.map(elem => <DialogItem name={elem.name} id={elem.id}/>);  
    
    let messagesElements = props.state.messagesData.map(elem => <Message message={elem.message}/>);

    return (        
            <div className={cls.dialogs}>
                <div className={cls.dialogItems}>
                    {dialogsElements}                    
                </div>
                <div className={cls.messages}>
                    {messagesElements}
                </div>
            </div>
        
    )
}

export default Dialogs;