import MyPosts from './MyPosts';
import { actionCreatorChangeValue, actionCreatorAddPost } from '../../../redux/reducer_profile';
import { connect } from 'react-redux';

let mapStateToPropsPost = (state) => {
    return {
        posts: state.dialogsState,
        newPostText: state.inputValue
    }
}

let mapDispatchToPropsPost = (dispatch) => {
    return {
        updateInputValue: (texts) => {
            dispatch(actionCreatorChangeValue(texts));
        },
        addPost: () => {
            dispatch(actionCreatorAddPost());
        }
    }
}

const MyPostsContainer = connect(mapStateToPropsPost, mapDispatchToPropsPost)(MyPosts);

export default MyPostsContainer;