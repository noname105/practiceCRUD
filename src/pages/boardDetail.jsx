import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function BoardDetail() {
  const navigate = useNavigate();
  const { boardId } = useParams();
  const [post, setPost] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios(
          "http://localhost:3000/mockData/boardData.json"
        );
        const targetId = parseInt(boardId);
        const data = response.data.find((item) => item.id === targetId);
        setPost(data);
      } catch (error) {
        console.error("데이터를 가져오는 동안 오류가 발생했습니다:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {console.log(post)}
      <button onClick={() => navigate("/update")}>수정</button>
      <button>삭제</button>
      <div>
        <h2>작성자</h2>
        <p></p>
        <h2>제목</h2>
        <p></p>
        <h2>내용</h2>
        <p></p>
      </div>
    </div>
  );
}

export default BoardDetail;
