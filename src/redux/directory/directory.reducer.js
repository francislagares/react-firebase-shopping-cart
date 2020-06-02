import SECTIONS_DATA from './sections.data';

const INITAL_STATE = {
  sections: SECTIONS_DATA,
};

const directoryReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
