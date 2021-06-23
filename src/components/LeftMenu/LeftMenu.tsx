import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import { UserCard } from './UserCard/UserCard';

const LeftAside = styled.aside`
    display: flex;
    align-items: center;
    flex-direction: column;
    flex-shrink: 0;
    justify-content: flex-start;
    width: 15rem;
    padding-top: 0.75rem;
`;
const AsideMenu = styled.div``;

export const LeftMenu: FC = () => {
    return(
        <LeftAside>
            <UserCard />
            <AsideMenu></AsideMenu>
        </LeftAside>
    );

};