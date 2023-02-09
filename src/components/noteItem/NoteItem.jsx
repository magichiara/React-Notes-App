import "./noteItem.scss";
import { BsTrash } from "react-icons/bs";
import { useContext } from "react";
import { Context } from "../../store/context";
import actions from "../../store/actions";

const NoteItem = ({ data }) => {
  const { dispatch } = useContext(Context);

  const onClickHandler = (e) => {
    dispatch({
      type: actions.REMOVE_NOTE,
      payload: data,
    });
  };

  return (
    <div className="NoteItem">
      <h3>{data.title}</h3>
      <p>{data.content}</p>
      <p>#{data.tag}</p>
      <i onClick={onClickHandler}>
        <BsTrash />
      </i>
    </div>
  );
};

export default NoteItem;
