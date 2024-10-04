import React from "react";
import { images } from "../../constansts";
import CommentForm from "./CommentForm";

const Comment = ({
  data,
  loggedUserId,
  affectedComment,
  setAffectedComment,
  addComment,
  parentId = null,
  updateComment,
  deleteComment,
  replies,
}) => {
  // Check user đã login hay chưa
  const isLoggedUserId = Boolean(loggedUserId);

  // Check comment đó có phải của người dùng đang đăng nhập không
  const commentBelongsToUser = loggedUserId === data.user.userId;

  const isReplying =
    affectedComment &&
    affectedComment.type === "replying" &&
    affectedComment._id === data._id;

  const isEditing =
    affectedComment &&
    affectedComment.type === "editing" &&
    affectedComment._id === data._id;

  // Lấy id của comment gốc
  const repliedCommentId = parentId ? parentId : data._id;

  // Lấy Id người gửi comment
  const replyOnUserId = data.user._id;
  return (
    <div className="flex flex-nowrap gap-x-3 bg-[#f2f2f2] rounded-xl text-2xl p-5 ">
      <img
        src={images.batman}
        alt=""
        className="w-20 h-20 rounded-full object-cover"
      />
      <div className="flex flex-col flex-1">
        <h2 className="font-bold">{data.user.username}</h2>
        <span className="text-[#898989] font-semibold text-lg">
          {new Date(data.createdAt).toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
            hour: "2-digit",
          })}
        </span>
        {/* Khi đang edit tin nhắn thì hiện bảng edit, không thì hiện tin nhắn hiện tại */}
        {!isEditing && <p className="mt-6 font-opensans">{data.comment}</p>}
        {isEditing && (
          <CommentForm
            btnLable="Update"
            formSubmitHandle={(value) => updateComment(value, data._id)}
            formCancelHandler={() => setAffectedComment(null)}
            initialText={data.comment}
          />
        )}
        <div className="mt-4 flex gap-8">
          {/* Chỉ được reply khi đã đăng nhập */}
          {isLoggedUserId && (
            <button
              onClick={() =>
                setAffectedComment({ type: "replying", _id: data._id })
              }
              className="flex gap-2 cursor-pointer group hover:text-green-dark text-gray-500 mb-4"
            >
              <span>
                <svg
                  className="w-8 h-8 group-hover:text-green-dark text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14.5 8.046H11V6.119c0-.921-.9-1.446-1.524-.894l-5.108 4.49a1.2 1.2 0 0 0 0 1.739l5.108 4.49c.624.556 1.524.027 1.524-.893v-1.928h2a3.023 3.023 0 0 1 3 3.046V19a5.593 5.593 0 0 0-1.5-10.954Z"
                  />
                </svg>
              </span>
              <p>Reply</p>
            </button>
          )}
          {/* Những chức năng mà chỉ có comment của người đăng nhập được dùng */}
          {commentBelongsToUser && (
            <>
              <button
                className="flex gap-2 cursor-pointer group hover:text-green-dark text-gray-500"
                onClick={() =>
                  setAffectedComment({ type: "editing", _id: data._id })
                }
              >
                <span>
                  <svg
                    className="w-8 h-8 group-hover:text-green-dark text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10.779 17.779 4.36 19.918 6.5 13.5m4.279 4.279 8.364-8.643a3.027 3.027 0 0 0-2.14-5.165 3.03 3.03 0 0 0-2.14.886L6.5 13.5m4.279 4.279L6.499 13.5m2.14 2.14 6.213-6.504M12.75 7.04 17 11.28"
                    />
                  </svg>
                </span>
                <p>Edit</p>
              </button>
              <button
                onClick={() => deleteComment(data._id)}
                className="flex gap-2 cursor-pointer group hover:text-green-dark text-gray-500"
              >
                <span>
                  <svg
                    className="w-8 h-8 group-hover:text-green-dark text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
                    />
                  </svg>
                </span>
                <p>Delete</p>
              </button>
            </>
          )}
        </div>
        {isReplying && (
          <CommentForm
            btnLable="Reply"
            formSubmitHandle={(value) =>
              addComment(value, repliedCommentId, replyOnUserId)
            }
            formCancelHandler={() => setAffectedComment(null)}
          />
        )}
        {replies.length > 0 && (
          <div>
            {replies.map((reply) => (
              <Comment
                key={reply._id}
                addComment={addComment}
                affectedComment={affectedComment}
                setAffectedComment={setAffectedComment}
                data={reply}
                deleteComment={deleteComment}
                loggedUserId={loggedUserId}
                replies={[]}
                updateComment={updateComment}
                parentId={data._id}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Comment;
