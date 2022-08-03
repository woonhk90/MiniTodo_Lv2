import React from 'react';
import styled from 'styled-components';
import Header from './Header'
import Form from './Form'
import List from './List'

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