import React, { useState, useCallback } from "react";
import { MdAdd } from "react-icons/md";
import "../scss/TodoInsert.scss";

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState("");

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue("");
      e.preventDefault();
    },
    [onInsert, value]
  );
  return (
    <form className='TodoInsert' onSubmit={onSubmit}>
      <input
        type='text'
        placeholder='할 일을 입력하세요'
        value={value}
        onChange={onChange}
      />
      {/* onSubmit을 사용하면 키보드 엔터로도 이벤트가 전달된다 */}
      <button type='submit'>
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
