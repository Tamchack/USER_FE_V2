import styled from 'styled-components';
import adminLogo from '../../../image/admin/admin_logo.svg';
import adminCharactor from '../../../image/admin/admin_charactor.svg';

export const AdminHeader = styled.div`
    width: 100%;
    height: 52px;
    background-color: #7B91FF;
    display: flex;
    align-items: center;
    padding-left: 180px;
    padding-right: 180px;
    justify-content: space-between;
    box-sizing: border-box;
`;

export const AdminLogo = styled.div`
    width: 68px;
    height: 28px;
    background-image: url(${adminLogo});
`;

export const AdminBox = styled.div`
    width: 100%;
`;

export const AdminHeaderButton = styled.button`
    margin-left: 93px;
    font-weight: 600;
`;

export const AdminHeaderButtonWrapper = styled.div``;

export const AdminFooter = styled.div`
    width: 100%;
    height: 52px;
    background-color: #212171;
    float: bottom;
`;

export const AdminBody = styled.div`
    min-height: calc(100vh - 104px);
    padding: 176px 180px 0px 180px;
    box-sizing: border-box;
    display: flex;
`;

export const AdminTitle = styled.h1`
    font-size: 32px;
`;

export const AdminCharacter = styled.div`
    background-size: 100%;
    width: 367px;
    height: 316px;
    margin-top: 65px;
    margin-left: 36px;
    background-image: url(${adminCharactor});
    background-repeat: no-repeat;
`;

export const AdminBookBody = styled.div`
    display: block;
    min-height: calc(100vh - 104px);
    padding: 30px 0px;
    width: 70%;
    margin: 0 auto;
    box-sizing: border-box;
`;

export const AdminBookTitle = styled.span `
  font-size: 21px;
  font-weight: bold;
  padding-left: 13px;

`;

export const AdminTitleUnderbar = styled.div `
  width: 130px;
  height: 5px;
  border-radius: 10px;
  background-color: #7B91FF;
`;

export const AdminBookInfo = styled.table`
    width: 80%;
    min-height: 80%;
    border-top: 2px solid black;
    border-collapse: collapse;
    margin: 0 auto;
    margin-top: 32px;
`;

export const AdminBookListTr = styled.tr`
    border-bottom: 1px solid #888888;
    height: 45px;
    &:first-child {
        height: 55px;
    }
    font-size: 13px;
`;

export const AdminBookListTd = styled.td`
    text-align: center;
    font-size: 13px;
    &:nth-child(1) {
        width: 20%;
    }

    &:nth-child(2) {
        width: 55%;
    }

    &:nth-child(3) {
        width: 15%;
    }
`;

export const AdminListChekbox = styled.input`
    width: 15px;
    height: 15px;
    border: 1 solid #888888;
    outline: none;
`;

export const AdminNavigation = styled.div`
    width: fit-content;
    margin: 7px auto;   
`;

export const AdminNavigationNumber = styled.button`
    width: 10px;
    height: 10px;
    font-size: 20px;
    margin-right: 50px;
    &:last-child {
        margin-right: 0;
    }
`;

export const content = styled.div`
    display: flex;
`;

export const UserInfo = styled.table`
    width: 90%;
    min-height: 80%;
    border-top: 2px solid black;
    border-collapse: collapse;
    margin-top: 10px;
`;

export const UserListTd = styled.td`
    text-align: center;
    font-size: 13px;
    &:nth-child(1) {
        width: 25%;
    }

    &:nth-child(2) {
        width: 25%;
        padding-left: 70px;
        text-align: left;
    }

    &:nth-child(3) {
        width: 25%;
    }

    &:nth-child(4) {
        width: 25%;
    }
`;

export const UserInfoFont = styled.span `
  font-size: 21px;
  font-weight: bold;
  margin-left: 0 auto;
`;

export const ContentLeft = styled.div`
    width: 15%;
    > button {
        cursor: pointer;
        width: 130px;
        height: 22px;
        margin: auto;
        border-radius: 3px;
        text-align: left;
        padding: 0 10px;
        margin-bottom: 20px;
        display: flex;
        background-color: #F6F7F8;
        justify-content: space-between;
        &:first-child {
            margin-top: 50px;
        }
    }
    > button.select {
        border: 1px solid black;
        background-color: white;
    }
`;

export const ContentRight = styled.div`
    width: 85%;
`;