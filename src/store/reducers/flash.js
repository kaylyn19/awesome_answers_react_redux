// src/store/reducers/flash.js
// default state to [] if it has not been initialized
const flash = (state = [], action) => {
    switch (action.type) {
      case 'SHOW_FLASH':
        return [...state, { text: action.text, id: action.id }];
      case 'REMOVE_FLASH': {
        // action.id
        // [{id: 1}, {id: 2}, {id: 3}]
        return [...state].filter(message => message.id !== action.id)
    }
      default:
        return state;
    }
};

export default flash;
