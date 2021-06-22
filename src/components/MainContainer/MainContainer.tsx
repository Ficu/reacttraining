import React, { FC } from 'react';
import styled from 'styled-components';

import { Publications } from './Publications/Publications';

const MainContainerWrapper = styled.div`    
    overflow-y: auto;
    width: 100%;
    padding: 0.75rem 0.5rem 0;
    
`;



export const MainContainer: FC = () => {
    return(
        <MainContainerWrapper>
            <Publications/>
            {/* <WorkspacesSlider/>
            <Work/> */}
        </MainContainerWrapper>
    );

};