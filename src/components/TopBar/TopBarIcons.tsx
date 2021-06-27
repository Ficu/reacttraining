import { FC } from 'react';
import styled from 'styled-components';

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