import MyPosts from './MyPosts';
import { changeValue, addPost, removePost } from '../../../redux/reducer_profile';
import { connect } from 'react-redux';

let mapStateToPropsPost = (state) => {
    return {
        posts: state.dialogsState,
        newPostText: state.dialogsState.inputValue
    }
}

let mapDispatchToPropsPost = (dispatch) => {
    return {
        updateInputValue: (texts) => {
            dispatch(changeValue(texts));
        },
        addPost: () => {
            dispatch(addPost());
        },
        removePost: () => {
            dispatch(removePost());
        }
    }
}

const MyPostsContainer = connect(mapStateToPropsPost, mapDispatchToPropsPost)(MyPosts);

export default MyPostsContainer;