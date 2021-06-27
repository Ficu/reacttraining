import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IState } from '../../../reducers';
import { IUsersReducer } from '../../../reducers/usersReducers';
import { ISinglePhotoReducer } from '../../../reducers/photoReducers';

import { Colors } from '../../../styledHelpers/Colors';
import { ActionButton } from '../../common/Search/ActionButton';

const ParentUserCard = styled.div``;

const UserCardWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    box-sizing: border-box;
    width: 13rem;
    padding: 0.75rem 0rem 0.5rem;
    border-radius: 4px;
    background: #fff;
    box-shadow: 0 2px 6px rgb(91 94 106 / 30%);
`;
const UserCardLink = styled(Link)`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    padding-top: 0.25rem;
    border-bottom: 1px solid ${Colors.border};
`;

const UserPic = styled.img`
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
`;

const UserName = styled.h3`
    color: ${Colors.active};
    margin: 0.5rem;
`;

const UserPosition = styled.h4`
    color: ${Colors.fontColorLight};
    font-size: 0.8rem;
    padding-bottom: 0.5rem;
`;

const UserCardButton = styled.div`
    display: flex;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    width: 90%;
    place-content: space-between;
    button {
        &:hover {
            background-color: ${Colors.bgColorLightHover};
        }
    }
`;

const UserCardButtonsLink = styled(Link)`
    text-decoration: none;
    color: ${Colors.fontColor};
`;

const UserCardIconButton = styled.button`
    background: transparent;
    border-radius: 5px;
    padding: 5px 8px;
    cursor: pointer;
`;

const UserCardLinksWrapper = styled.div``;

const LinksButton = styled.button`
    display: flex;
    width: 100%;
    background: transparent;
    padding: 10px;
    align-items: center;
    margin-top: 0.8rem;
    border:0px;
    cursor: pointer;
        &:hover {
            background-color: ${Colors.bgColorLightHover};

        }
        img {
            padding-right: 0.3rem;
        }
        div {
            text-decoration: none;
            color: ${Colors.fontColor};
        }
`;
export const UserCard: FC = () => {

    const { usersList } = useSelector<IState, IUsersReducer>(state => ({
        ...state.users
    }));

    const { photoList } = useSelector<IState, ISinglePhotoReducer>(state => ({
        ...state.photo
    }));
    if(usersList?.length > 0 && photoList?.length > 0) {
        return(
            
            <ParentUserCard>
                <UserCardWrapper>
                    <UserCardLink to="/Profile">
                        <UserPic src={photoList[0].url} />
                        <UserName>{usersList[0].name}</UserName>
                        <UserPosition>{usersList[0]?.company.name}</UserPosition>
                    </UserCardLink>

                    <UserCardButton>
                        <ActionButton iconType="./assets/icons/network.png">
                            <UserCardButtonsLink to="/publications">Your network</UserCardButtonsLink>
                        </ActionButton>
                        <UserCardIconButton><img src="./assets/icons/plus.png" alt=""/></UserCardIconButton>
                    </UserCardButton>

                    <UserCardButton>
                        <ActionButton iconType="./assets/icons/people.png">
                            <UserCardButtonsLink to="/publications">Your publications</UserCardButtonsLink>
                        </ActionButton>
                        <UserCardIconButton><img src="./assets/icons/user-plus.png" alt=""/></UserCardIconButton>
                    </UserCardButton>
                </UserCardWrapper>

                <UserCardLinksWrapper>
                    <Link to="/publications">
                        <LinksButton>
                                <img src="./assets/icons/publications.png" alt="" />
                                <div>Publications</div>
                        </LinksButton>
                    </Link>
                    <Link to="/ecosystem">
                            <LinksButton>
                                <img src="./assets/icons/ecosystem.png" alt="" />
                                <div>Ecosystem</div>
                            </LinksButton>
                    </Link>
                    <Link to="/entities">
                        <LinksButton>
                                <img src="./assets/icons/publications.png" alt="" />
                                <div>Entities</div>
                        </LinksButton>
                    </Link>
                </UserCardLinksWrapper>
            </ParentUserCard>

        );
    } else {
        return(<></>);
    }


}