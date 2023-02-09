import actions from "./actions";

const globalReducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_NOTE:
      return {
        ...state,
        noteList: [...state.noteList, action.payload],
      };

    case actions.REMOVE_NOTE:
      return {
        ...state,
        noteList: state.noteList.filter((note) => note.id != action.payload.id),
      };
  }
};

export default globalReducer;
