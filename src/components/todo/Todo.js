import React from 'react';
import {useDispatch} from 'react-redux';
import styled from 'styled-components';

import {deleteTodo, updateTodo } from '../../redux/modules/todos'
import { useNavigate } from "react-router-dom";

const Todo = ({todo}) => {
    console.log("TODO==>",todo);
    const dispatch = useDispatch();
    const deleteClick = (id) => {
        console.log("DELETECLICK->",id);
        dispatch(deleteTodo(id));
    }
    const updateClick = (id) => {
        console.log("DELETECLICK->",id);
        dispatch(updateTodo(id));
    }
    const navigate = useNavigate();
    return(
        <>
            <TodoBox key={todo.id} className='todo-box'>
                <DetailViewDiv className='todo-detail-btn'>
                    <DetailViewBtn onClick={() => { navigate(`/works/${todo.id}`); }}>상세보기</DetailViewBtn>
                </DetailViewDiv>
                <div className='todo-top'>
                    <p>{todo.title}</p>
                    <p>{todo.content}</p>
                </div>
                <div className='todo-bottom'>
                    <TodoBtns onClick={()=>{deleteClick(todo.id)}}>삭제</TodoBtns>
                    <TodoBtns onClick={()=>{updateClick(todo.id)}}>{todo.done?'취소':'완료'}</TodoBtns>
                </div>
            </TodoBox>
        </>
    )
}

export default Todo

const TodoBox = styled.div`
    display:flex;
    flex-direction:column;
    width:250px;
    border:3px solid purple;
    text-align:center;
    margin:10px 15px;
    border-radius:25px;
    padding:15px;
    box-sizing:border-box;
    word-break:break-all;
`;

const DetailViewDiv = styled.div`
    text-align:left;
    margin:5px 0 0 5px;
`;

const DetailViewBtn = styled.button`
    padding:10px 15px;
    border:none;
    background-color:transparent;
    cursor:pointer;
`;

const TodoBtns = styled.button`
    margin: 25px 10px 10px;
    padding:10px 25px;
    background-color:transparent;
    border:2px solid blue;
    cursor:pointer;
`;
