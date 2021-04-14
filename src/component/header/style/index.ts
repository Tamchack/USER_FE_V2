import styled, { keyframes } from 'styled-components';

export const HeaderBody = styled.div`
  display: flex;
  height: 50px;
  min-width: 1080px;
  background-color: #7b91ff;
  align-items: center;
  line-height: 50px;
  padding: 0 15%;
`;

export const LogoImage = styled.img`
  height: 65%;
  cursor: pointer;
`;

export const SearchBox = styled.div<{ open: boolean }>`
  display: flex;
  width: 40%;
  height: 25px;
  background-color: white;
  margin-left: 10%;
  margin-right: auto;
  border: 1px solid black;
  border-radius: 10px 10px 10px ${({ open }) => (open ? '0px' : '10px')};
`;

export const SearchTypeBox = styled.div`
  width: 15%;
  height: 100%;
  line-height: 25px;
  background-color: white;
  font-size: 0.8em;
  border-radius: 10px 0 0 10px;
  cursor: pointer;
`;

export const SearchTypeArrow = styled.img<{ open: boolean }>`
  height: 35%;
  margin: 0 10%;
  transform: ${({ open }) => (open ? 'rotateZ(180deg)' : 'rotateZ(0deg)')};
  transition: 0.2s;
`;

const searchTypeMenuOpen = keyframes`
    0% {
        height: 0%;
        opacity: 0.0;
    }
    100% {
        height: 300%;
        opacity: 1.0;
    }
`;

export const SearchType = styled.ul<{ open: boolean }>`
  display: ${({ open }) => (open ? 'block' : 'none')};
  list-style: none;
  padding-top: 3%;
  padding-bottom: 10%;
  margin-left: -1px;
  background-color: white;
  border: 1px solid black;
  border-radius: 0 0 5px 5px;
  transition: 0.2s;
  animation: ${searchTypeMenuOpen} 0.2s cubic-bezier(0.1, 0.61, 0.58, 1);
`;

export const SearchElement = styled.li`
  font-size: 1em;
  &:hover {
    color: #212171;
    font-size: 1.1em;
  }
  text-align: center;
`;

export const SearchInput = styled.input`
  width: 80%;
  font-size: 0.8em;
  outline: none;
  border: none;
`;

export const SearchButtonIcon = styled.img`
  height: 65%;
  margin: auto 2%;
  cursor: pointer;
`;

export const HeaderButtonBox = styled.div`
  height: 25px;
  line-height: 25px;
`;

export const HeaderButton = styled.button`
  height: 100%;
  margin-left: 80px;
  &:first-child {
    margin-left: 10px;
  }
  font-size: 1em;
  background-color: unset;
  cursor: pointer;
  outline: none;
  border: none;
`;
