import "./noteList.scss";
import { useContext } from "react";
import { Context } from "../../store/context";
import NoteItem from "../noteItem/NoteItem";

const NoteList = () => {
  const { state } = useContext(Context);

  return (
    <div className="NoteList">
      {state.noteList.map((note, index) => (
        <NoteItem data={note} key={index} />
      ))}
    </div>
  );
};

export default NoteList;
