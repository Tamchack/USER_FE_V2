import styled, { keyframes } from 'styled-components';

export const HeaderBody = styled.div `
    display: flex;
    height: 60px;
    min-width: 1080px;
    background-color: #7B91FF;
    align-items: center;
    line-height: 60px;
    padding: 0 250px;
`;

export const LogoImage = styled.img `
    height: 40px;
    cursor: pointer;
`;

export const SearchBox = styled.div<{ open: boolean }> `
    display: flex;
    height: 30px;
    background-color: white;
    margin-left: 10%;
    margin-right: auto;
    border: 1px solid black;
    border-radius: 10px 10px 10px ${({open}) => open ? '0px' : '10px'};
`;

export const SearchTypeBox = styled.div `
    width: 90px;
    height: 100%;
    line-height: 30px;
    background-color: white;
    font-size: 12.5px;
    border-radius: 10px 0 0 10px;
    cursor: pointer;
`;

export const SearchTypeArrow = styled.img<{ open: boolean }> `
    width: 10px;
    margin: 0 10px;
    transform: ${({open}) => open ? 'rotateZ(180deg)' : 'rotateZ(0deg)'};
    transition: 0.2s;
`

const searchTypeMenuOpen = keyframes `
    0% {
        height: 0%;
        opacity: 0.0;
    }
    100% {
        height: 300%;
        opacity: 1.0;
    }
`

export const SearchType = styled.ul<{ open: boolean }>`
    display: ${({ open }) => open ? "block" : "none"};
    width: 90px;
    list-style: none;
    padding-top: 5px;
    margin-left: -1px;
    background-color: white;
    border: 1px solid black;
    border-radius: 0 0 5px 5px;
    transition: 0.2s;
    animation: ${searchTypeMenuOpen} 0.2s cubic-bezier(0.1, 0.61, 0.58, 1);
`

export const SearchElement = styled.li `
    font-size: 13px;
    &:hover {
        color: #212171;
        font-size: 14px;
    }
    text-align: center;
`;

export const SearchInput = styled.input `
    width: 400px;
    height: 30px;
    outline: none;
    border: none;
`;

export const SearchButtonIcon = styled.img `
    height: 15px;
    margin: auto 10px;
    cursor: pointer;
`;

export const HeaderButtonBox = styled.div `
    height: 60px;
`;

export const HeaderButton = styled.button `
    height: 40px;
    margin-left: 90px;
    &:first-child {
        margin-left: 10px;
    }
    font-size: 17px;
    background-color: unset;
    cursor: pointer;
    outline: none;
    border: none;
`;