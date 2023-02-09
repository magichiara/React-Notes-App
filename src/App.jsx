import "./App.scss";
import AddForm from "./components/addForm/AddForm";
import NoteList from "./components/noteList/NoteList";
import { Context } from "./store/context";
import { useReducer } from "react";
import globalReducer from "./store/reducer";
import initState from "./store/initState";

function App() {
  const [state, dispatch] = useReducer(globalReducer, initState);
  return (
    <Context.Provider value={{ state, dispatch }}>
      <div className="App">
        <div className="left-section">
          <AddForm />
        </div>
        <div className="right-section">
          <NoteList />
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
