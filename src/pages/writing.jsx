import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Write() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const navigate = useNavigate();

  const hnadleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      id: Date.now().toString(),
      title: title,
      content: content,
      author: author,
      createdAt: new Date(),
    };
    //URL 임시사용
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        formData
      );
      const newPost = response.data;
      console.log("새로운 글이 추가되었습니다:", newPost);
      navigate("/board");
    } catch (error) {
      console.error("데이터를 전송하는 동안 오류가 발생했습니다:", error);
    }
  };

  return (
    <div>
      <form onSubmit={hnadleSubmit}>
        <div>
          <div>
            <label>작성자</label>
          </div>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div>
          <div>
            <label>제목</label>
          </div>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <div>
            <label>내용</label>
          </div>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button type="submit">등록</button>
      </form>
    </div>
  );
}

export default Write;
