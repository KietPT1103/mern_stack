import React, { useState } from "react";

const CommentForm = ({
  btnLable,
  formSubmitHandle,
  formCancelHandler = null,
  initialText = "",
}) => {
  const [value, setValue] = useState(initialText);

  const submitForm = (e) => {
    e.preventDefault();
    formSubmitHandle(value);
    setValue("");
  };
  return (
    <div>
      <form
        onSubmit={submitForm}
        className="border border-green-700 rounded-md p-6"
      >
        <div className="flex justify-end items-end flex-col">
          <textarea
            value={value}
            rows={5}
            className="resize-none w-full focus:outline-none text-xl bg-transparent"
            placeholder="Leave your comment here..."
            onChange={(e) => setValue(e.target.value)}
          ></textarea>
          <div className="flex gap-4 pt-2">
            {formCancelHandler && (
              <button onClick={formCancelHandler} className="px-6 py-4  rounded-lg border border-red-500 text-[#ccc] font-semibold text-2xl mt-4 w-[12rem] transition-all">
                Cancel
              </button>
            )}
            <button className="px-6 py-4  rounded-lg bg-primary text-white font-semibold text-2xl mt-4 w-[12rem] hover:bg-green-dark transition-all">
              {btnLable}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CommentForm;
