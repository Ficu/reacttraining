import React, { FC } from 'react'
import { Link } from 'react-router-dom';


export const NotFound: FC = () => {
    return(

        <div>
            <h1>404 - Not Found!</h1>
            <Link to="/">
            Go Home
            </Link>
        </div>
    );

}