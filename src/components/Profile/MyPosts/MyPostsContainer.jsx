import MyPosts from './MyPosts';
import { actionCreatorChangeValue, actionCreatorAddPost } from '../../../redux/reducer_profile';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        posts: state.dialogsState,
        newPostText: state.inputValue
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateInputValue: (texts) => {
            dispatch(actionCreatorChangeValue(texts));
        },
        addPost: () => {
            dispatch(actionCreatorAddPost());
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;