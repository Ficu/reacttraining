import React, { FC } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NotFoundElem = styled.div`
   padding: 50px;
    text-align: center;
    background-color: white;
    border: 1px solid #dedede;
`;

export const NotFound: FC = () => {
    return(

        <NotFoundElem>
            <h1>404 - Not Found!</h1>
            <Link to="/">
            Go Home
            </Link>
        </NotFoundElem>
    );

}
