import { ADD_COMMENT, REMOVE_COMMENT, EDIT_COMMENT } from "./actionTypes";
import uuid from "uuid";

const REMOVE_COMMENT = "REMOVE_COMMENT";
const EDIT_COMMENT = "EDIT_COMMENT";
const THUMB_UP_COMMENT = "THUMB_UP_COMMENT";
const THUMB_DOWN_COMMENT = "THUMB_DOWN_COMMENT";
const ADD_COMMENT = "ADD_COMMENT";

//action creator

function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4()
    }
};

const boundAddComment = text => dispatch(addComment(text));

boundAddComment("New comment!");
boundAddComment("Another new comment!");

function editComment(text, id) {
    return {
        type: EDIT_COMMENT,
        text,
        id: id
    }
};

const boundEditComment = (text, id) => dispatch(editComment(text, id));

function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        id: id
    }
}

const boundRemoveComment = id => dispatchEvent(removeComment(id));

function thumbsUp(id) {
    return {
        type: THUMB_UP_COMMENT,
        id: id
    }
}

function thumbsDown(id) {
    return {
        type: THUMB_DOWN_COMMENT,
        id: id
    }
}