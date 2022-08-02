import React from 'react';
import styled from "styled-components";

const Header = () => {
    return(
        <>
            <HeaderStyled>
                <h1>My Todo List</h1>
                <span>Redux</span>
            </HeaderStyled>
        </>
    )
}

export default Header

const HeaderStyled = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    border:1px solid rgba(205,205,205,0.5);
    background-color:rgba(205,205,205,0.5);
    width:100%;
    border-radius: 10px;
    padding:0 25px;
    box-sizing:border-box;
`;