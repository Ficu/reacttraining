import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { Reset } from 'styled-reset';

import { ActionButton } from '../common/Search/ActionButton';

const IconContainer = styled.div`
    display: block;
`;

export const TopBarIcons: FC = () => {
    
    return(
        <IconContainer>
            <ActionButton iconType="./assets/icons/house.png"/>
            <ActionButton iconType="./assets/icons/comments.png" />
            <ActionButton iconType="./assets/icons/bell.png" />
        </IconContainer>
    );

};