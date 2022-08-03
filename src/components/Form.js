import React from 'react';
import styled from 'styled-components';
import { useDispatch } from "react-redux";

import {addTodo} from '../redux/modules/todos';

const Form = () => {
    const [val, setVal] = React.useState({
        id:0,
        title:'',
        content:'',
        done:false,
    });
    
    const {title,content} = val;

    const getInputVlaue = (e) => {
        const {name,value} = e.target;

        setVal({...val,[name]:value});
    }
    const dispatch = useDispatch();
    const getInfo = () => {
        if(title==='' || content===''){return false;}
        console.log("VAL->",val);
        dispatch(addTodo({
            id:Date.now(),
            title,
            content,
            done:false,
        }));
        
        /* 초기화 */
        setVal({
            title:'',
            content:'',
        });
    }
    return(
        <>
            <DivForm>
                <div className="div-title">
                    <label htmlFor='input-title'>제목: </label>
                    <input type="text" id="input-title" className='input-title' name="title" onChange={getInputVlaue} value={title}/>
                </div>
                <div className="div-title">
                    <label htmlFor='input-content' id="div-content" className="div-content">내용: </label>
                    <input type="text" id="input-content" className='input-content' name="content" onChange={getInputVlaue} value={content}/>
                </div>
                <DivButton onClick={getInfo}>전송하기</DivButton>
            </DivForm>
        </>
    )
}

export default Form

const DivForm = styled.div`
    display:flex;
    justify-content:space-around;
    align-items:center;
    padding:10px 0;
    width:100%;
    background-color:rgba(255,200,200,0.5);
    border-radius: 10px;
    margin-top:10px;
`;
const DivButton = styled.button`
    background-color:transparent;
    padding:5px 25px;
    border:1px solid gray;
    border-radius:10px;
    cursor:pointer;
`;