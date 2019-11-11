import { userConstants } from '../_constants';

export function users(state = {}, action) {
  switch (action.type) {
    case userConstants.GETALL_REQUEST:
      return {
        loading: true
      };
    case userConstants.GETALL_SUCCESS:
      return {
        items: action.users
      };
    case userConstants.GETALL_FAILURE:
      return { 
        error: action.error
      };
    case userConstants.DELETE_REQUEST:
      // add 'deleting:true' property to user being deleted
      return {
        ...state,
        items: state.items.map(user =>
          user.id === action.id
            ? { ...user, deleting: true }
            : user
        )
      };
    case userConstants.DELETE_SUCCESS:
      // remove deleted user from state
      return {
        items: state.items.filter(user => user.id !== action.id)
      };
    case userConstants.DELETE_FAILURE:
      // remove 'deleting:true' property and add 'deleteError:[error]' property to user 
      return {
        ...state,
        items: state.items.map(user => {
          if (user.id === action.id) {
            // make copy of user without 'deleting:true' property
            const { deleting, ...userCopy } = user;
            // return copy of user with 'deleteError:[error]' property
            return { ...userCopy, deleteError: action.error };
          }

          return user;
        })
      };
    case userConstants.PROFILE_SUCCESS:
      return {
        ...state,
        profile:action.profile
      };
    case userConstants.PROFILE_FAILURE:
      return {
        error: action.error
      };
    case userConstants.LANGUAGE_SUCCESS:
      return {
        ...state,
        languages: action.languages
      };
    case userConstants.LANGUAGE_FAILURE:
      return {
        ...state,
        error: action.error
      };
    case userConstants.ALL_LANGUAGES_SUCCESS:
      return {
        ...state,
        all_languages: action.languages
      };
    case userConstants.ALL_LANGUAGES_FAILURE:
      return {
        ...state,
        error: action.error
      };
    default:
      return state
  }
}