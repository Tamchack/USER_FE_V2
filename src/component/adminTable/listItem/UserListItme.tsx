import React from 'react';
import { FC } from 'react';
import * as S from '../style';

type userType = {
    id: string;
    password: string;
    name: string;
}

interface Props {
    list : userType[]
}

const BookListItem:FC<Props> = ({ list }) => {
    const getStoreList = () => {
        return list.map(e => {
            return (
                <S.AdminBookListTr >
                    <S.UserListTd>
                        {e.id}
                    </S.UserListTd>
                    <S.UserListTd className="list__item--owner">
                        {e.password}
                    </S.UserListTd>
                    <S.UserListTd className="list__item--owner">
                        {e.name}
                    </S.UserListTd>
                    <S.UserListTd>
                        <S.AdminListChekbox type="checkbox" />
                    </S.UserListTd>
                </S.AdminBookListTr>
            );
        })
    }
    return (
        <>
            <S.AdminBookListTr>
                <S.UserListTd>
                    id
                </S.UserListTd>
                <S.UserListTd>
                    Password
                </S.UserListTd>
                <S.UserListTd>
                    이름
                </S.UserListTd>
                <S.UserListTd>
                    삭제
                </S.UserListTd>
            </S.AdminBookListTr>
            {getStoreList()}
        </>
    );
}

export default BookListItem;