import React, { FC, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import '../../../styles/slick-carousel/slick/slick.css';
import '../../../styles/slick-carousel/slick/slick-theme.css';

import Slider from 'react-slick';
import { Colors } from '../../../styledHelpers/Colors';
import { Link } from 'react-router-dom';
import { WorkspacesData } from '../../../data/WorkspacesData';
import { IWorkspace } from '../../../entities/IWorkspaces';

const WorkspaceSliderWrapper = styled.div`
    margin:3rem 0;
    
`; 

const SliderTitle = styled.div`
    font-weight:bold;
    font-size: 1.5em;
    margin: 0.7rem 0;
`;

const SliderContainer = styled.div`
    display:flex;
    justify-content: space-around;
`;

const Workspace = styled.div`
    background-color: white;
    padding: 1rem;
    border-radius: 5px;
    margin: 0px 10px;
    display: flex;
    flex-direction: column;

    &:hover {
        background-color: #e5e8f3;
    }
`;

const WorkspaceImage = styled.img`
    height: 150px;
    object-fit: cover;
`;

const WorkspaceTitle = styled.div`
    margin-top:0.5rem;
    color: ${Colors.fontColor};
`;

const UpdateTime = styled.div`
    font-size: 0.8rem;
    margin-top: 0.8rem;
    margin-bottom: -0.3rem;
    color: ${Colors.fontColorLight};
`;

export const WorkspacesSlider: FC = () => {
    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };

    return(
        
        <WorkspaceSliderWrapper>
            <Slider {...settings}>

                <Link to="/workspace">
                    <Workspace>
                        <WorkspaceImage src="./assets/meeting.jpg" />
                        <WorkspaceTitle>
                            <h3>Supplier Contract</h3>
                        </WorkspaceTitle>
                        <UpdateTime>
                            <p>Last update 4 days ago </p>
                        </UpdateTime>
                    </Workspace>
                </Link>

                <Link to="/workspace">
                    <Workspace>
                        <WorkspaceImage src="./assets/meeting.jpg" />
                        <WorkspaceTitle>
                            <h3>Corporate</h3>
                        </WorkspaceTitle>
                        <UpdateTime>
                            <p>Last update 6 days ago </p>
                        </UpdateTime>
                    </Workspace>
                </Link>

                <Link to="/workspace">
                    <Workspace>
                        <WorkspaceImage src="./assets/meeting.jpg" />
                        <WorkspaceTitle>
                            <h3>Group name</h3>
                        </WorkspaceTitle>
                        <UpdateTime>
                            <p>Last update 8 days ago </p>
                        </UpdateTime>
                    </Workspace>
                </Link>

                <Link to="/workspace">
                    <Workspace>
                        <WorkspaceImage src="./assets/meeting.jpg" />
                        <WorkspaceTitle>
                            <h3>Client Contract</h3>
                        </WorkspaceTitle>
                        <UpdateTime>
                            <p>Last update 2 days ago </p>
                        </UpdateTime>
                    </Workspace>
                </Link>
            </Slider>

        </WorkspaceSliderWrapper>
    );
};