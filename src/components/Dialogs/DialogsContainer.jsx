import Dialogs from './Dialogs';
import { actionCreatorChangeMessageValue, actionCreatorSendMessage } from '../../redux/reducer_dialogs';
import { connect } from 'react-redux';

let mapStateToPropsOne = (state) => {
    return {
        dialogsState: state.dialogsState
    }
}

let mapDispatchToPropsOne = (dispatch) => {
    return {
        changeMessageValue: (texts) => {
            dispatch(actionCreatorChangeMessageValue(texts));
        },
        sendMessage: () => {
            dispatch(actionCreatorSendMessage());
        }
    }
}

const DialogsContainer = connect(mapStateToPropsOne, mapDispatchToPropsOne)(Dialogs);

export default DialogsContainer;