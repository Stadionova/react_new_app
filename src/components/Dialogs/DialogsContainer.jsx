import Dialogs from './Dialogs';
import { changeMessageValue, sendMessages } from '../../redux/reducer_dialogs';
import { connect } from 'react-redux';
import { compose } from "redux";
import withAuthRedirect from './../../hoc/withAuthRedirect';

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

// вот так
export default compose(
    connect(mapStateToPropsOne, mapDispatchToPropsOne),
    withAuthRedirect
)(Dialogs);

// вместо
// let AuthRedirectComponent = withAuthRedirect(Dialogs);
// const DialogsContainer = connect(mapStateToPropsOne, mapDispatchToPropsOne)(AuthRedirectComponent);
// export default DialogsContainer;