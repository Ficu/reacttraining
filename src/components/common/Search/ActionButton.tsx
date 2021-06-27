import { FC } from 'react';
import styled from 'styled-components';

interface ActionButtonProps {
    iconType: string;
    alt?:string;
}

const IconButton = styled.button`
    background: transparent;
    border: 0;
    padding: 0 5px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
`;
const ButtonContainer = styled.div`
   

`;


export const ActionButton: FC<ActionButtonProps> = props => {
    
    return(
        <IconButton>
            <img src={props.iconType} alt=""/>
            <ButtonContainer>{props.children}</ButtonContainer>
        </IconButton>
    );
}