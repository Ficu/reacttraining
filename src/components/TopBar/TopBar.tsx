import { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import useDropdown from 'react-dropdown-hook';

import { Colors } from '../../styledHelpers/Colors';
import { ExpandedMenu } from './ExpandedMenu';
import { Search } from '../common/Search/Search';
import { TopBarIcons } from './TopBarIcons';

const Header = styled.header`
    font-size: 1.2rem;
    position: sticky;
    z-index: 2;
    top: 0;
    display: flex;
    align-items: center;
    flex-shrink: 0;
    justify-content: space-between;
    height: 3rem;
    padding: 0 0.5rem;;
    background-color: ${Colors.bgColorLight};
    box-shadow: 0 0 12px rgba(91,94,106,0.2);
`;
const LeftSide = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    `;

const LogoLink = styled.a`
    width: 2rem;
    height: 2rem;
    `;

const LogoImage = styled.img`
    width: 100%;
    height: 100%;
    `;

const Menu = styled.div`
    margin-left: 1rem;
    position: relative;
`;
    
const MenuTitle = styled.button`
    font-size: 0.85rem;
    position: relative;
    display: flex;
    overflow: hidden;
    align-items: center;
    justify-content: space-between;
    min-width: 14rem;
    height: 2rem;
    padding: 0.25rem 0.5rem;
    cursor: pointer;
    color: ${Colors.fontColorLight};
    border: 2px solid transparent;
    border-radius: 4px;
    outline: 0;
    background: transparent;
    
`;

export const TopBar: FC = () => {
    const [wrapperRef, dropdownOpen, toggleDropdown, closeDropdown] = useDropdown();
    return(
        <Header>
            <LeftSide>
                <LogoLink href="/" ><LogoImage src="./assets/logo.png" /></LogoLink>

                <Menu ref={wrapperRef}>
                    <MenuTitle onClick={toggleDropdown}>
                        <img src="./assets/icons/house.png" alt="" />
                        <div><span>Home</span></div>
                        <img src="./assets/icons/arrow-down.png" alt="" />
                    </MenuTitle>
                    
                    {dropdownOpen &&
                        <ExpandedMenu />
                    }
                </Menu>
                
            </LeftSide>
            <Search SearchWidth="50vw" SearchPlaceholder="Search Legalcluster" />
            <TopBarIcons />
        </Header>
    );

};

