import { FC, useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Search, SearchBar } from '../common/Search/Search';
import { Colors } from '../../styledHelpers/Colors';
import { useSelector } from 'react-redux';
import { IState } from '../../reducers';
import { IUsersReducer } from '../../reducers/usersReducers';
import { ISinglePhotoReducer } from '../../reducers/photoReducers';

const DropdownMenuWrapper = styled.div`
    position: absolute;
    background-color: white;
    width: 100%;
    border: 2px solid ${Colors.border};
    border-top:1px solid ${Colors.border};
    border-radius: 0px ​0px 7px 7px;

    ul {
        font-size: 1rem;
        padding: 0 1rem;
        li {
            padding: 7px 0;
            min-height: 1.5rem;
            display: flex;
            align-items: center;
            img {
                padding-right: 0.5rem;
            }
            &:hover {
                background-color: ${Colors.bgColorLightHover};
            }
        }
    }
`;

const Header4 = styled.h4`
    font-size: 0.75rem;
    margin: 0.5rem;
    color: ${Colors.fontColorLight};
`;

const MenuLink = styled(Link)`
    text-decoration:none;
    color: ${Colors.fontColor};
`;

const LinksWrapper = styled.div`
    overflow-y: auto;
    max-height: 16rem;
    border-bottom: 1px solid ${Colors.border};
`;

const UserPhoto = styled.img`
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
`;

const AccLinksWrapper = styled.div``;

export const ExpandedMenu: FC = () => {

    const [inputText, setInputText] = useState<string>('');

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setInputText(text);
    }

    const { usersList } = useSelector<IState, IUsersReducer>(state => ({
        ...state.users
    }));

    const { photoList } = useSelector<IState, ISinglePhotoReducer>(state => ({
        ...state.photo
    }));

    
    if(usersList?.length > 0 && photoList?.length > 0) {
    return(
        <DropdownMenuWrapper>

            <SearchBar >
                <input type="text" value={inputText} onChange={inputHandler} placeholder="Filter.." />
            </SearchBar>

            <LinksWrapper>
                <Header4>Platform</Header4>
                <ul>
                    {'Home'.toLocaleLowerCase().includes(inputText.toLocaleLowerCase()) &&
                    <MenuLink to="/"><li><img src="./assets/icons/house2.png" alt="" /> Home</li></MenuLink>}
                    {'Publications'.toLocaleLowerCase().includes(inputText.toLocaleLowerCase()) &&
                    <MenuLink to="/publications"><li><img src="./assets/icons/publications.png" alt="" /> Publications</li></MenuLink>}
                    {'People'.toLocaleLowerCase().includes(inputText.toLocaleLowerCase()) &&
                    <MenuLink to="/people"><li><img src="./assets/icons/people.png" alt="" /> People</li></MenuLink>}
                    {'Entities'.toLocaleLowerCase().includes(inputText.toLocaleLowerCase()) &&
                    <MenuLink to="/entities"><li><img src="./assets/icons/entities2.png" alt="" /> Entities</li></MenuLink>}
                    {'Administration'.toLocaleLowerCase().includes(inputText.toLocaleLowerCase()) &&
                    <MenuLink to="/administration"><li><img src="./assets/icons/administration.png" alt="" /> Administration</li></MenuLink>}
                </ul>
                <Header4>Workspaces</Header4>
                <ul>
                    {'Client Contract'.toLocaleLowerCase().includes(inputText.toLocaleLowerCase()) &&
                    <MenuLink to="/"><li><img src="./assets/icons/administration.png" alt="" /> Client contract</li></MenuLink>}
                    {'Supplier contract'.toLocaleLowerCase().includes(inputText.toLocaleLowerCase()) &&
                    <MenuLink to="/"><li><img src="./assets/icons/publications.png" alt="" /> Supplier contract</li></MenuLink>}
                    {'Corporate'.toLocaleLowerCase().includes(inputText.toLocaleLowerCase()) &&
                    <MenuLink to="/"><li><img src="./assets/icons/entities.png" alt="" /> Corporate</li></MenuLink>}
                    {'Group Norms'.toLocaleLowerCase().includes(inputText.toLocaleLowerCase()) &&
                    <MenuLink to="/"><li><img src="./assets/icons/administration.png" alt="" /> Group Norms</li></MenuLink>}
                    {'Real Estate Contracts'.toLocaleLowerCase().includes(inputText.toLocaleLowerCase()) &&
                    <MenuLink to="/"><li><img src="./assets/icons/administration.png" alt="" /> Real Estate Contracts</li></MenuLink>}
                </ul>
            </LinksWrapper>
            <AccLinksWrapper>
                <Header4>Account</Header4>
                <ul>
                    <MenuLink to="/"><li><UserPhoto src={photoList[0].thumbnailUrl} alt="" /> {usersList[0].name}</li></MenuLink>
                    <MenuLink to="/"><li><img src="./assets/icons/privacy.png" alt="" /> Privacy</li></MenuLink>
                    <MenuLink to="/"><li><img src="./assets/icons/settings.png" alt="" /> Settings</li></MenuLink>
                </ul>
            </AccLinksWrapper>
        </DropdownMenuWrapper>
    );
    } else {
        return(<></>);
    }
}