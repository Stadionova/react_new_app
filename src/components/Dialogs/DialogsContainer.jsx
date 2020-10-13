import Dialogs from './Dialogs';
import { actionCreatorChangeMessageValue, actionCreatorSendMessage } from '../../redux/reducer_dialogs';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsState
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        changeMessageValue: (texts) => {
            dispatch(actionCreatorChangeMessageValue(texts));
        },
        sendMessage: () => {
            dispatch(actionCreatorSendMessage());
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;