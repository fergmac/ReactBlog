import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';

import _ from 'lodash';

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, 'id');
        case FETCH_POST:
            // es5
            // const post = action.payload.data;
            // const newState = { ...state,  };
            // newState[post.id] = post;
            // return newState;

            //es6 key interpolation: make new key on object using first property and give it value of second property
            return { ...state, [action.payload.data.id]: action.payload.data };
        case DELETE_POST:
            return _.omit(state, action.payload);
        default:
            return state;
    }
}