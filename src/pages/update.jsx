import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Update() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const navigate = useNavigate();

  return (
    <div>
      <form>
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
        <button type="submit" onClick={() => navigate("/boardDetail")}>
          등록
        </button>
      </form>
    </div>
  );
}

export default Update;
