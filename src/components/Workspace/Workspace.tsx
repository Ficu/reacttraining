import { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Colors } from '../../styledHelpers/Colors';
import { Work } from '../Work/Work';

const WorkspaceWrapper = styled.div`
    width:100%;
    height:100%;
    h2 {
        color: ${Colors.fontColor};
        margin-top: 30px;
    }
`;
const WorkspaceHeader = styled.div`
    background-color: white;
    width: 100%;
    box-shadow: 0 2px 6px rgb(91 94 106 / 30%);
`;

const WorkspaceHeaderImage = styled.div`
    img {
        width: 100%;
        object-fit: cover;
        height: 200px;
    }
`;
const WorkspaceHeaderDesc = styled.div`
    padding: 1.5rem;
    color: ${Colors.fontColor};
    h1 {
        font-size: 25px;
        padding: 10px;
    }
    p {
        width: 90%;
        margin: 0 auto;
    }
`;

const WorkspaceElements = styled.div`
    display:flex;
    grid-gap: 1.5rem;
    justify-content: space-between;
    padding: 0 10px;
    margin: 20px 0;
`;

const WorkspaceElement = styled.div`
    background-color: white;
    padding: 1.5rem;
    color: ${Colors.fontColor};
    box-shadow: 0 2px 6px rgb(91 94 106 / 30%);

    p{
        padding: 15px 10px;
        font-size: 13px;
    }

`;
export const Workspace: FC = () => {

    return(
        <WorkspaceWrapper>
            <WorkspaceHeader>
                <WorkspaceHeaderImage>
                    <img src="./assets/meeting.jpg" alt="" />
                </WorkspaceHeaderImage>
                <WorkspaceHeaderDesc>
                    <h1>Super Corp</h1>
                    <p>Y’know, me too. That’s another thing we have in common. I hate it when you’ve got someone in your face, you try to give someone a hint and they won’t leave, and then there’s that big awkward silence…</p>
                </WorkspaceHeaderDesc>
            </WorkspaceHeader>
            <h2>Start working on what corporate matters</h2>
            <WorkspaceElements>
                <Link to="/entities">
                    <WorkspaceElement>
                        <h2>Explore your entities</h2>
                        <p>Take a few minutes to look at the most important elements and specificities of your entities</p>
                    </WorkspaceElement>
                </Link>
                <Link to="/entities">
                    <WorkspaceElement>
                        <h2>Structure your ownership</h2>
                        <p>Get a clear view of the ownership by looking at the realations between individuals and entities</p>
                    </WorkspaceElement>
                </Link>
                <Link to="/entities">
                    <WorkspaceElement>
                        <h2>Define the calendar</h2>
                        <p>Prepare future events by creating detailed plans around the life of your entity</p>
                    </WorkspaceElement>
                </Link>
            </WorkspaceElements>

            <Work />
        </WorkspaceWrapper>
    );

}