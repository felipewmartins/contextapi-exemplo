import React from 'react';

import styled from 'styled-components';

const List = styled.ul`
    background: ${props => props.theme.theme.background};
    color: ${props => props.theme.theme.color};
    font-family: sans-serif;
    font-size: 18px;

    li {
        line-height: 36px;
    }
    
`;

const TodoList = () => (
    <List>
        <li>Fazer café</li>
        <li>Assar castanhas</li>
        <li>Varrer o quintal</li>
    </List>
) 

export default TodoList;
