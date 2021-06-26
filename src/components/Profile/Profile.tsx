import { FC } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { IState } from "../../reducers";
import { ISinglePhotoReducer } from "../../reducers/photoReducers";
import { IUsersReducer } from "../../reducers/usersReducers";

import { Colors } from "../../styledHelpers/Colors";





const ProfileWrapper = styled.div`
    background-color: white;
    width:100%;
    padding: 0.75rem 0;
`;
const ProfileHeader = styled.div`
    display: flex;
    justify-content: flex-end;
`;
const HeaderButton = styled.button`
    margin-right: 0.4rem;
    padding: 0.3rem;
    background-color: white;
    border: 1px solid ${Colors.border};
    &:hover {
        background-color: ${Colors.bgColorLightHover};
        cursor: pointer;
    }
`;

const ProfileMainInfo = styled.div`
    padding-left:1.5rem;
    display:flex;
    align-items: center;
    position: relative;
`;
const ProfilePicInfo = styled.div``;
const ProfilePic = styled.div``;
const UserPic = styled.img`
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
`;
const ProfileLink = styled.div`
    padding-top:0.5rem;
`;

const ProfileInfo = styled.div`
    margin-left: 1rem;
    color: ${Colors.fontColor};
    p{
        padding: 0.3rem 0;
    }
`;
const ProfileInfo2 = styled.div`
    align-self: flex-end;
    margin-left: 1rem;
    color: ${Colors.fontColor};
    p{
        padding: 0.3rem 0;
    }
`;

const EditButton = styled.button`
    position: absolute;
    right: 1rem;
    top: 1rem;
    padding: 0.3rem;
    background-color: white;
    border: 1px solid ${Colors.border};
    &:hover {
        background-color: ${Colors.bgColorLightHover};
        cursor: pointer;
    }
`;

const ProfileDetails = styled.div`
    border-top: 1px solid ${Colors.border};
    margin-top: 2rem;
    padding-top: 2em;
    padding-left: 1rem;
    h3 {
        color: ${Colors.fontColor};
        padding: 10px 5px;
    }
    div {
        p {
            padding: 10px 5px;
            color: ${Colors.fontColor};
        }
        h4 {
            color: ${Colors.fontColorLight};
            font-size: 13px;
        }
    }
`;

const ProfileDetailsItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0.5rem;
    gap: 0.5rem;
    p { 
    margin: 0;
    padding: 2px 0.25rem;
    color: #7d91a1;
    border-radius: 4px;
    background-color: #e2f2ff;
    }
`;

const ProfileTable = styled.table`
    color: ${Colors.fontColor};
    margin-left:20px;
    tr {
        th {
        width: 10rem;
        border-bottom: 1px solid ${Colors.border};
        padding: 3px;
    }
        td {
            padding: 3px 10px;
        }
    }
    
`;

export const Profile: FC = () => { 

    const { usersList } = useSelector<IState, IUsersReducer>(state => ({
        ...state.users
    }));

    const { photoList } = useSelector<IState, ISinglePhotoReducer>(state => ({
        ...state.photo
    }));

    return (
        <ProfileWrapper>
            <ProfileHeader>
                <HeaderButton>Message</HeaderButton>
                <HeaderButton>Create a Request</HeaderButton>
                <HeaderButton>Add to a Cluster</HeaderButton>
            </ProfileHeader>
            <ProfileMainInfo>
                <ProfilePicInfo>
                    <ProfilePic>
                        <UserPic src={photoList[0]?.url} />
                    </ProfilePic>
                    <ProfileLink>
                        <Link to="/profile">See Profile</Link>
                    </ProfileLink>
                </ProfilePicInfo>

                <ProfileInfo>
                    <p>{usersList[0]?.name}</p>
                    <p>{usersList[0]?.company.name}</p>
                    <p>{usersList[0]?.address.city}</p>
                    <p>Partner</p>
                </ProfileInfo>
                <ProfileInfo2>
                    <p>{usersList[0]?.email}</p>
                    <p>{usersList[0]?.phone}</p>
                </ProfileInfo2>
                
                <EditButton>Edit</EditButton>
            </ProfileMainInfo>
            <ProfileDetails>
                <div>
                    <h4>Expertise</h4>
                <ProfileDetailsItem>
                    <p>Merges and acquisition</p>
                </ProfileDetailsItem>
                </div>

                <div>
                    <h4>Specialities</h4>
                <ProfileDetailsItem>
                    <p>Cross border operation</p>
                    <p>Transactions over 500M€/$</p>
                </ProfileDetailsItem>
                </div>

                <div>
                    <h4>Admissions to practice law</h4>
                <ProfileDetailsItem>
                    <p>Paris bar association</p>
                    <p>Tunisian bar association</p>
                </ProfileDetailsItem>
                </div>

                <div>
                    <h4>Counties</h4>
                <ProfileDetailsItem>
                    <p>Tunisia</p>
                </ProfileDetailsItem>
                </div>
            </ProfileDetails>

            <ProfileDetails>
                <h3>Panel informations</h3>
                <div>
                    <h4>Hourly fee</h4>
                    <p>610$/hour (Negociated)</p>
                </div>

                <div>
                    <h4>Terms & conditions</h4>
                    <p>Monthly 10k€ retainer - see with Jeanny Smith</p>
                </div>

            </ProfileDetails>

            <ProfileDetails>
                <h3>Proposals</h3>
                <ProfileTable>
                    <tbody>
                        <tr>
                            <th>Expertise</th>
                            <th>Entity</th>
                            <th>Location</th>
                            <th>Expertise</th>
                            <th>Date</th>
                            <th>Firm</th>
                        </tr>
                        <tr>
                            <td>Operation time</td>
                            <td>Renault Corporation</td>
                            <td>France</td>
                            <td>#Tax</td>
                            <td>2018-01-20</td>
                            <td>Racine</td>
                        </tr>
                        <tr>
                            <td>Op. Promtech</td>
                            <td>Renault HQ</td>
                            <td>USA</td>
                            <td>#M&amp;A</td>
                            <td>2019-02-18</td>
                            <td>Clifford chance</td>
                        </tr>
                        <tr>
                            <td>Op. Latandre</td>
                            <td>Renault Breslau</td>
                            <td>Germany</td>
                            <td>#Social</td>
                            <td>2019-02-18</td>
                            <td>SVZ</td>
                        </tr>
                    </tbody>
                </ProfileTable>
            </ProfileDetails>

            <ProfileDetails>
                <h3>Proposals</h3>
                <ProfileTable>
                    <tbody>
                        <tr>
                            <th>Expertise</th>
                            <th>Entity</th>
                            <th>Location</th>
                            <th>Expertise</th>
                            <th>Date</th>
                        </tr>
                        <tr>
                            <td>Operation time</td>
                            <td>Renault Corporation</td>
                            <td>France</td>
                            <td>#Tax</td>
                            <td>2018-01-20</td>
                        </tr>
                        <tr>
                            <td>Op. Promtech</td>
                            <td>Renault HQ</td>
                            <td>USA</td>
                            <td>#M&amp;A</td>
                            <td>2019-02-18</td>
                        </tr>
                        <tr>
                            <td>Op. Latandre</td>
                            <td>Renault Breslau</td>
                            <td>Germany</td>
                            <td>#Social</td>
                            <td>2019-02-18</td>
                        </tr>
                    </tbody>
                </ProfileTable>
            </ProfileDetails>
        </ProfileWrapper>
    );

}