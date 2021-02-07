import Dialogs from './Dialogs';
import { changeMessageValue, sendMessages } from '../../redux/reducer_dialogs';
import { connect } from 'react-redux';
import withAuthRedirect from './../../hoc/withAuthRedirect';

let mapStateToPropsOneRedirect = (state) => {
    return {
        isAuth: state.auth.isAuth
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

let AuthRedirectComponent = withAuthRedirect(Dialogs);
AuthRedirectComponent = connect(mapStateToPropsOneRedirect)(AuthRedirectComponent);

let mapStateToPropsOne = (state) => {
    return {
        messages: state.messagesState,
        newMessageText: state.messagesState.inputValue
    }
}

const DialogsContainer = connect(mapStateToPropsOne, mapDispatchToPropsOne)(AuthRedirectComponent);

export default DialogsContainer;