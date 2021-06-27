import { FC, useEffect } from 'react';
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
import { Entities } from '../Entities/Entities';
import { Workspace } from '../Workspace/Workspace';
import { Profile } from '../Profile/Profile';


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
  min-height: 0;
  margin: auto;
`;

const MainWrapper = styled.div`
  width: 100%;
  padding: 0.75rem 0.5rem 0;
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
          <MainWrapper>
          <Switch>
            <Route path="/entities" exact>
              <Entities />
            </Route>
            <Route path="/workspace" exact>
              <Workspace />
            </Route>
            <Route path="/profile" exact>
              <Profile />
            </Route>
            <Route path="/" exact>
              <MainContainer />
            </Route>
            <Route component={NotFound} />
          </Switch>
          </MainWrapper>
        </AppWraper>
      </Wrapper> 
    </Router>
  )

}

export default MainPage;