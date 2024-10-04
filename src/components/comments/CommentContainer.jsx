import React, { useEffect, useState } from "react";
import CommentForm from "./CommentForm";
import { getCommentData } from "../../data/comments";
import Comment from "./Comment";

const CommentContainer = ({ className, loggedUserId }) => {
  const [comments, setcomments] = useState([]);
  console.log(comments);
  // Lấy các comment bố
  const mainComments = comments.filter((comment) => comment.parent === null);

  const [affectedComment, setAffectedComment] = useState(null);

  // Lấy dữ liệu từ data
  useEffect(() => {
    (async () => {
      const commentData = await getCommentData();
      setcomments(commentData);
    })();
  }, []);

  // Thêm comment mới
  const addCommentHandle = (value, parent = null, replyOnUser = null) => {
    const currentDate = new Date().toISOString();
    const newComment = {
      _id: Math.random().toString(),
      postId: "1",
      user: {
        userId: loggedUserId,
        username: "admin",
        email: "admin@admin.com",
      },
      parent: parent,
      replyOnUser: replyOnUser,
      comment: value,
      likes: 3,
      createdAt: currentDate,
      updatedAt: currentDate,
      status: "pending",
    };
    setcomments((current) => {
      return [newComment, ...current];
    });
    setAffectedComment(null);
  };

  // Chỉnh sửa comment
  const updateCommentHandler = (value, commentId) => {
    console.log(commentId);
    const updateComment = comments.map((comment) => {
      if (comment._id === commentId) {
        return { ...comment, comment: value };
      }
      return comment;
    });
    setcomments(updateComment);
    setAffectedComment(null);
  };

  // Xóa comment
  const deleteCommentHandler = (commentId) => {
    const updatedComment = comments.filter((comment) => {
      return comment._id !== commentId;
    });
    setcomments(updatedComment);
  };

  const getRepliesComment = (commentId) => {
    return comments
      .filter((comment) => comment.parent === commentId)
      .sort((a, b) => {
        return (
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
      });
  };

  return (
    <div className={`${className}`}>
      <CommentForm
        btnLable={"Send"}
        formSubmitHandle={(value) => addCommentHandle(value)}
      />

      <div className="space-y-4 mt-8">
        <h2 className="font-bold text-3xl">All comments ({comments.length})</h2>
        {mainComments.map((item, index) => {
          return (
            <Comment
              data={item}
              key={index}
              loggedUserId={loggedUserId}
              affectedComment={affectedComment}
              setAffectedComment={setAffectedComment}
              addComment={addCommentHandle}
              updateComment={updateCommentHandler}
              deleteComment={deleteCommentHandler}
              replies={getRepliesComment(item._id)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CommentContainer;
