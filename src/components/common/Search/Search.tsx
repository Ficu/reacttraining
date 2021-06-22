import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { Reset } from 'styled-reset';

import { Colors } from '../../../styledHelpers/Colors';

interface SearchProps {
    SearchWidth: string,
    SearchPlaceholder?: string,
}

export const SearchBar = styled.div<{CompWidth?: string;}>`
    width:  ${props => props.CompWidth};
    max-width: 100%;
    margin: 0 0.5rem;
    position: relative;
    overflow: hidden;
    height: 2rem;
    input {
        font-family: inherit;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        padding-right: 1.5rem;
        padding-left: 0.5rem;
        transition: border ease-in 0.14s;
        border: 1px solid ${Colors.border};
        border-radius: 4px;
        &:focus {
            border: 1px solid $active;
            outline: 0;
        }
        &::-webkit-search-cancel-button {
            -webkit-appearance: none;
        }

        &::-webkit-input-placeholder {
            color: rgba($fontColor, 0.5);
            text-align: center;
            font-weight: bold;
        }
    }
    button {
        position: absolute;
        top: 0;
        right: 0;
        display: flex;
        height: 100%;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        background: transparent;
        border: 0;
        img {
            position: relative;
        }
    }
`;

export const Search: FC<SearchProps> = props => {
    return(
        
        <SearchBar CompWidth={props.SearchWidth}>
            <input placeholder={props.SearchPlaceholder!} />
            <button>
                <img src="./assets/icons/search.png" alt="" />
            </button>
           
        </SearchBar>
    );

};