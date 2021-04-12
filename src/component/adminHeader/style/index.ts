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
    height: 100vh;
`;

export const AdminHeaderButton = styled.button`
    margin-left: 93px;
    font-weight: 600;
`;

export const AdminHeaderButtonWrapper = styled.div``;

export const AdminFooter = styled.div`
    width: 100%;
    height: 132px;
    background-color: #212171;
    float: bottom;
`;

export const AdminBody = styled.div`
    min-height: calc(100vh - 52px);
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
`;