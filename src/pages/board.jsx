import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function Board() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/mockData/boardData.json"
        );
        setPosts(response.data);
      } catch (error) {
        console.error("데이터를 가져오는 동안 오류가 발생했습니다:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <div>
        <p>제목</p>
        <p>작성자</p>
        <p>작성일</p>
      </div>
      <div>
        <ul>
          {[...posts].reverse().map((post) => (
            <li key={post.id}>
              <Link to={`/board/${post.id}`}>{post.title}</Link>
              <p>{post.author}</p>
              <p>{post.createdAt}</p>
            </li>
          ))}
        </ul>
      </div>
      <button
        onClick={() => {
          navigate("/writing");
        }}
      >
        글쓰기
      </button>
    </div>
  );
}

export default Board;
