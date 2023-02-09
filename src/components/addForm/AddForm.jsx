import "./addForm.scss";
import { useState, useContext } from "react";
import { Context } from "../../store/context";
import actions from "../../store/actions";
import { tagList } from "../../store/tags";

const AddForm = () => {
  const { dispatch } = useContext(Context);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tag, setTag] = useState("default");

  const onChangeTitleHandler = (e) => {
    setTitle(e.target.value);
  };
  const onChangeContentHandler = (e) => {
    setContent(e.target.value);
  };
  const onChangeTagHandler = (e) => {
    setTag(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch({
      type: actions.ADD_NOTE,
      payload: {
        id: Date.now(),
        title,
        content,
        tag,
      },
    });
    setTitle("");
    setContent("");
    setTag("default");
  };

  return (
    <div className="AddForm">
      <h2>ADD NOTE</h2>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          value={title}
          onChange={onChangeTitleHandler}
          placeholder="Insert title"
          required
        />
        <input
          type="text"
          value={content}
          onChange={onChangeContentHandler}
          placeholder="Insert note"
          required
        />
        <select defaultValue={"default"} onChange={onChangeTagHandler}>
          <option disabled value={"default"}>
            Select a tag
          </option>
          {tagList.map((tag, index) => (
            <option key={index} value={tag.label}>
              {tag.label}
            </option>
          ))}
        </select>
        <button type="submit">ADD</button>
      </form>
    </div>
  );
};

export default AddForm;
