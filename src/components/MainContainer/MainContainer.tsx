import React, { FC } from 'react';
import styled from 'styled-components';
import { Work } from '../Work/Work';

import { Publications } from './Publications/Publications';
import { WorkspacesSlider } from './WorkspacesSlider/WorkspacesSlider';

const MainContainerWrapper = styled.div`
    width: 80%;
`;



export const MainContainer: FC = () => {
    return(
        <MainContainerWrapper>
            <Publications />
            <WorkspacesSlider/>
            <Work/>
        </MainContainerWrapper>
    );

};