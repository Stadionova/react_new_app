import Dialogs from './Dialogs';
import { changeMessageValue, sendMessages } from '../../redux/reducer_dialogs';
import { connect } from 'react-redux';

let mapStateToPropsOne = (state) => {
    return {
        messages: state.messagesState,
        newMessageText: state.messagesState.inputValue
    }
}

let mapDispatchToPropsOne = (dispatch) => {
    return {
        changeMessageValue: (texts) => {
            dispatch(changeMessageValue(texts));
        },
        sendMessage: () => {
            dispatch(sendMessages());
        }
    }
}

const DialogsContainer = connect(mapStateToPropsOne, mapDispatchToPropsOne)(Dialogs);

export default DialogsContainer;