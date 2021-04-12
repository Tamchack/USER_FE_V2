import React, { FC } from 'react';
import * as S from './style';
import AdminTable from '../adminTable/AdminTable';
import BookListItem from '../adminTable/listItem/BookListItem';

const AdminBook: FC = () => {

    return (
        <S.AdminBookBody>
            <S.AdminBookTitle>서점정보관리</S.AdminBookTitle>
            <S.AdminTitleUnderbar/>
            <AdminTable>
                <BookListItem/>
            </AdminTable>
            <S.AdminNavigation>
                <S.AdminNavigationNumber>1</S.AdminNavigationNumber>
                <S.AdminNavigationNumber>2</S.AdminNavigationNumber>
                <S.AdminNavigationNumber>3</S.AdminNavigationNumber>
                <S.AdminNavigationNumber>4</S.AdminNavigationNumber>
                <S.AdminNavigationNumber>5</S.AdminNavigationNumber>
            </S.AdminNavigation> 
        </S.AdminBookBody>
    );
}

export default AdminBook;