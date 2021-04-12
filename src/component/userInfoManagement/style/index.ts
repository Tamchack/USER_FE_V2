import styled from 'styled-components';
import adminLogo from '../../../image/admin/admin_logo.svg';
import adminCharactor from '../../../image/admin/admin_charactor.svg';


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
  width: 150px;
  height: 5px;
  border-radius: 10px;
  background-color: #7B91FF;
`;

export const AdminBookInfo = styled.table`
    width: 90%;
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
    > .list__item--owner {
        padding-left: 80px !important;
    }
`;

export const AdminBookListTd = styled.td`
    text-align: center;
    font-size: 13px;
    &:nth-child(1) {
        width: 20%;
    }

    &:nth-child(2) {
        width: 65%;
        padding-left: 70px;
        text-align: left;
    }

    &:nth-child(3) {
        width: 15%;
    }
`;
export const AdminNavigation = styled.div`
    width: fit-content;
    margin: 0 auto;
    margin-top: 20px;   
`;

export const AdminNavigationNumber = styled.button`
    font-size: 20px;
    margin: 0 25px;
    &:last-child {
        margin-right: 0;
    }
    &.select {
        color: red;
    }
`;