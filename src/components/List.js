import React from 'react';
import Todo from './Todo';
import styled from 'styled-components'
import {useSelector, useDispatch} from 'react-redux';

const List = () => {
    const todoList = useSelector((state)=>state.todos);
    console.log(todoList);
    return(
        <>
            <div className='todo-list'>
                <h2>WORKING</h2>
                <TodoListWork className = 'todo-list-work'>
                    
                    {todoList.map((v)=>{
                        if(v.done===false){
                            return <div key={v.id}><Todo todo={v}/></div>
                        }else{
                            return null;
                        }
                    }
                        // v.done===false?<div key={v.id}><Todo todo={v}/></div>:null
                    )}
                </TodoListWork>

                <h2>DONE</h2>
                <TodoListDone className = 'todo-list-done'>
                    {todoList.map((v)=>
                        v.done===true?<div key={v.id}><Todo todo={v}/></div>:null
                    )}
                </TodoListDone>
            </div>
        </>
    )
}

export default List

const TodoListWork = styled.div`
    display:flex;
    flex-wrap:wrap;
`;
const TodoListDone = styled.div`
    display:flex;
    flex-wrap:wrap;
`;