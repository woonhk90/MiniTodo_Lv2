// src/pages/Work.js

import React from "react";
import { useNavigate } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import styled from 'styled-components';
// 아래 코드를 추가해주세요. 👇
import { useParams } from "react-router-dom";

const Work = () => {
	// 아래 코드를 추가해주세요. 👇
  const param = useParams();
		// 훅을 사용해서 생성한 param을 콘솔에 찍어봅시다.
  console.log(param);
  console.log(param.id);

  const navigate = useNavigate();
  const getInfos = useSelector((state)=>state.todos);
  console.log("getInfos",getInfos);
  const getInfo = getInfos.find((val)=>parseInt(val.id)===parseInt(param.id));
  console.log('getInfo',getInfo);

  return (
    <DetailWrap>
      <DetailView>
        <DetailViewTop>
          <span>ID: {getInfo.id}</span>
          <DetailBtn onClick={() => {navigate("/");}}>이전으로</DetailBtn>
        </DetailViewTop>
        <h1>{getInfo.title}</h1>
        <p>{getInfo.content}</p>
      </DetailView>
    </DetailWrap>
    );
};

export default Work;

const DetailWrap = styled.div`
  width:100vw;
  height:100vh;
  display:flex;
  justify-content:center;
  align-items:center;
`;
const DetailView = styled.div`
  width:600px;
  height:400px;
  border:2px solid rgba(0,0,0,0.1);
  padding:25px;
  box-sizing:border-box;
`;
const DetailViewTop = styled.div`
  display:flex;
  justify-content:space-between;
`;
const DetailBtn = styled.button`
  background-color:transparent;
  border:1px solid gray;
  padding:10px 25px;
  border-radius:15px;
  cursor:pointer;
`;