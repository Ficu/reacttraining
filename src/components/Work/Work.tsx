import { ChangeEvent, FC, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { ISingleComment } from '../../entities/ISingleComment';
import { IState } from '../../reducers';
import { ICommentReducer } from '../../reducers/commentsReducers';
import { IPostReducer } from '../../reducers/postsReducers';
import { IUsersReducer } from '../../reducers/usersReducers';
import { Colors } from '../../styledHelpers/Colors';

import ReactPaginate from 'react-paginate'; 
import { SearchBar } from '../common/Search/Search';


const WorkWrapper = styled.div``;
const WorkWrapperTitle = styled.div`
    font-weight:bold;
    font-size: 1.5em;
    margin: 0.7rem 0;
`;

const WorkContainer = styled.div`
    .pagination {
        display: flex;
        justify-content: space-around;
        background-color: white;
        padding: 15px;
        margin: 0.9rem 0.5rem;
        li {
            color: ${Colors.fontColor};
            padding: 10px;
            
            &:hover {
                cursor: pointer;
                background-color: #f1f1f1;
            }
            &.active {
                background-color: #f1f1f1;
            }
        }
    }
`;
const SingleWork = styled.div`
    background-color: white;
    padding: 0.7rem;
    border-radius: 5px;
    margin: 0.9rem 0.5rem;

    &:hover {
        background-color: #e5e8f3;
    }
`;
const WorkTitle = styled.div`
    margin-top:0.5rem;
    color: ${Colors.fontColor};
`;
const WorkDesc = styled.div`
    font-size: 0.75rem;
    padding: 0.4rem;
    color: ${Colors.fontColorLight};
    `;
const WorkInfo = styled.div`
    display: flex;
    font-size: 0.75rem;
    color: ${Colors.fontColorLight};
    padding-top: 0.1rem;
`;
const WorkUser = styled.div`
    padding-right: 0.3rem;
`;
const WorkTime = styled.div``;

const SearchInput = styled.input`
    width: 30%!important;
    float: right;
`;



export const Work: FC = () => {

    const { commentList } = useSelector<IState, ICommentReducer>(state => ({
        ...state.comment
    }));

    const { usersList } = useSelector<IState, IUsersReducer>(state => ({
        ...state.users
    }));

    const { postList } = useSelector<IState, IPostReducer>(state => ({
        ...state.posts
    }));

    const getUserName = (postId: number) => {
        let post: number = postList[postList.findIndex(x => x.id == postId)]?.userId;

        let userId: string = usersList[usersList.findIndex(x => x.id == post)]?.name;
        
        return userId;
    }

    const [currentPage, setCurrentPage] = useState(0);
    const [perPage, setPerPage] = useState(10);
    const [inputText, setInputText] = useState<string>('');

    const handlePageClick = (e:any) => {
        const selectedPage = e.selected;
        setCurrentPage(selectedPage + 1);
    };

    const pageCount = Math.ceil(commentList.length / perPage);

    const offset = currentPage * perPage;

    const currentPageData = commentList
    .slice(offset, offset + 10)
    .map((x: ISingleComment) => 
    <div>
    {x.name.toLocaleLowerCase().includes(inputText.toLocaleLowerCase()) &&
                    
                <SingleWork>
                    <WorkTitle>
                        <h3>{x.name}</h3>
                    </WorkTitle>
                    <WorkDesc>
                        <p>{x.body}</p>
                    </WorkDesc>
                    <WorkInfo>
                        <WorkUser>
                        {getUserName(x.postId)}
                        </WorkUser>
                        <WorkTime>
                        Updated 11 days ago by {getUserName(x.postId)}
                        </WorkTime>
                    </WorkInfo>
                </SingleWork> 
                }
        </div>
                );
    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setInputText(text);
    }
    return(
        <WorkWrapper>
            <WorkWrapperTitle>
                <h2>Resume your work</h2>
                
            </WorkWrapperTitle>
            <SearchBar>
                <SearchInput type="text" value={inputText} onChange={inputHandler} placeholder="Filter.." />
            </SearchBar>
            <WorkContainer>
            {currentPageData}

                <ReactPaginate
                    previousLabel={"Poprzednia strona"}
                    nextLabel={"Następna strona"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    activeClassName={"active"}/>

            </WorkContainer>

        </WorkWrapper>
    );
};