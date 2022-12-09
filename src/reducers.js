function rootReducer(state = {isDark: false}, action) {
    if (action.type === 'CHANGE_THEME') {
        return {
            ...state, 
            isDark: action.isDark
        }
    };
    return state;
  }; 
export default rootReducer;
