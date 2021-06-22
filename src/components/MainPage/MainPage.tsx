import React, { FC, useEffect } from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,  
  Switch,
  Route,
  Link
  } from 'react-router-dom';
//redux import
import { useDispatch } from 'react-redux';
import { getComments } from '../../actions/commentActions';
import { getPhotos } from '../../actions/photoActions';
import { getPosts } from '../../actions/postsActions';
import { getUsers } from '../../actions/usersActions';

//components import
import { MainContainer } from '../MainContainer/MainContainer';
import { TopBar } from '../TopBar/TopBar';
import { LeftMenu } from '../LeftMenu/LeftMenu';
import { Colors } from '../../styledHelpers/Colors';
import { NotFound } from './NotFound';


const Wrapper = styled.div`
    font-family: 'Roboto', sans-serif;
    background-color: ${Colors.bgColor};
    height:100%;
    text-decoration:none;
    a {
      text-decoration:none;
      color: ${Colors.fontColor};
    }
    padding-bottom:50px;
`;

const AppWraper = styled.div`
  display: flex;
  flex: 1 1;
  width: 100%;
  max-width: 100rem;
  //height: 100%;
  min-height: 0;
  margin: auto;
`;

type GetComments = ReturnType<typeof getComments>
type GetPhotos = ReturnType<typeof getPhotos>
type GetPosts = ReturnType<typeof getPosts>
type GetUsers = ReturnType<typeof getUsers>

const MainPage: FC = () => {

  const dispatch = useDispatch();
    useEffect(() => {
        dispatch<GetComments>(getComments());
        dispatch<GetPhotos>(getPhotos());
        dispatch<GetPosts>(getPosts());
        dispatch<GetUsers>(getUsers());
    }, []);
    
  return(
    <Router>
      <Wrapper>
        <TopBar />
        <AppWraper>
          <LeftMenu />
          <Switch>
            <Route path="/entities">
              <div></div>
            </Route>
            <Route exact path="/">
              <MainContainer />
            </Route>
            <Route component={NotFound} />
          </Switch>
        </AppWraper>
      </Wrapper> 
    </Router>
  )

}

export default MainPage;