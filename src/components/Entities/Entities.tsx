import React, { ChangeEvent, FC, useState } from 'react';
import styled from 'styled-components';
import { Colors } from '../../styledHelpers/Colors';
import { useSelector } from 'react-redux';
import { IState } from '../../reducers';
import { IUsersReducer } from '../../reducers/usersReducers';
import { ISinglePhotoReducer } from '../../reducers/photoReducers';
import { ISinglePhoto } from '../../entities/ISinglePhoto';
import { ISingleUser } from '../../entities/ISingleUser';
import { Search, SearchBar } from '../common/Search/Search';



const EntitiesWrapper = styled.div``;

const EntitiesHeader = styled.div`
    display: flex;
    justify-content: space-between;
`;

const EntTitle = styled.div`
    h2 {
        color: ${Colors.fontColor};
        padding: 10px;
    }
`;
const EntSwitch = styled.div``;
const EntContainer = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: ${(props: {displayType: number}) => props.displayType == 0 ? '1fr 1fr 1fr 1fr' : '1fr'};
    grid-gap: 0.6rem;
    margin-top: 15px;
`;

const Entity = styled.div`
    display: flex;
    background-color: white;
    border-radius: 4px;
    padding: 0.5rem;
`;

const EntityImage = styled.img`
    width: 4rem;
    height: 4rem;
    border-radius: 10px;
`;

const EntityContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0.4rem;
`;

const EntityName = styled.h4`
    color: ${Colors.fontColor};
`;
const EntityAddress = styled.p`
    font-size: 0.7rem;
    color: ${Colors.fontColorLight};
`;


export const Entities: FC = () => {


    const { usersList } = useSelector<IState, IUsersReducer>(state => ({
        ...state.users
    }));

    const { photoList } = useSelector<IState, ISinglePhotoReducer>(state => ({
        ...state.photo
    }));

    const [displayType, setDisplayType] = useState<number>(0);
    const [inputText, setInputText] = useState<string>('');

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setInputText(text);
    }
    if(usersList.length > 0 && photoList.length > 0) {
    return(
        <EntitiesWrapper>
            <EntitiesHeader>
                <EntTitle>
                    <h2>Entities</h2>
                </EntTitle>
                <SearchBar >
                <input type="text" value={inputText} onChange={inputHandler} placeholder="Filter.." />
                </SearchBar>
                <EntSwitch>
                    <button onClick={() => setDisplayType(0)}> {displayType == 0 ? 'Mosaic' : 'Mosaic'}</button> 
                    <button onClick={() => setDisplayType(1)}> {displayType == 1 ? 'List' : 'List'}</button>
                </EntSwitch>
            </EntitiesHeader>
            <EntContainer displayType={displayType} >

                { usersList.map((x: ISingleUser) => 
                    <Entity>
                    <EntityImage src={photoList[photoList.findIndex(xe => xe.id === x.id)].url}></EntityImage>
                    <EntityContainer>
                        <EntityName>{x.company.name}</EntityName>
                        <EntityAddress>{x.address.street + " " + x.address.suite + ", " + x.address.city}</EntityAddress>
                    </EntityContainer>
                </Entity>
                    )}

                    
                { usersList.map((x: ISingleUser) => 
                
                    <Entity>
                    <EntityImage src={photoList[photoList.findIndex(xe => xe.id === x.id)].url}></EntityImage>
                    <EntityContainer>
                        <EntityName>{x.company.name}</EntityName>
                        <EntityAddress>{x.address.street + " " + x.address.suite + ", " + x.address.city}</EntityAddress>
                    </EntityContainer>
                </Entity>
                    )}
                { usersList.map((x: ISingleUser) => 
                    <Entity>
                    <EntityImage src={photoList[photoList.findIndex(xe => xe.id === x.id)].url}></EntityImage>
                    <EntityContainer>
                        <EntityName>{x.company.name}</EntityName>
                        <EntityAddress>{x.address.street + " " + x.address.suite + ", " + x.address.city}</EntityAddress>
                    </EntityContainer>
                </Entity>
                    )}
                
            </EntContainer>
        </EntitiesWrapper>
    );
    } else {
        return(<div>Nie załadowano</div>);
    }
}