import React from 'react';
import styled from 'styled-components';
import Header from '../header/Header'
import Form from '../form/Form'
import List from '../list/List'

const Layout = () => {
    return(
        <>
            <Wrap>
                <Header/>
                <Form/>
                <List/>
            </Wrap>
        </>
    )
}

export default Layout;

const Wrap = styled.div`
    max-width:1200px;
    min-width:800px;
    margin:25px auto 0;
`;