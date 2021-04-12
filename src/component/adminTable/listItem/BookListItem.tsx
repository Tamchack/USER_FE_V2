import React, { FC } from 'react';
import * as S from '../style';

const BookList = [
    {storeName : "대성이의 서점", storeOwner : "오준상"},
    {storeName : "도서부 아니고 배구부", storeOwner : "이대성"},
    {storeName : "서영이는 바보", storeOwner : "임서영"},
    {storeName : "개굴개굴 개구리", storeOwner : "개구리"},
    {storeName : "대성이의 파란후리스", storeOwner : "유진아"},
    {storeName : "똥글말랑 서점", storeOwner : "어피치"},
    {storeName : "사쿠란보 노래맛집", storeOwner : "정우영"},
    {storeName : "판다서점", storeOwner : "오상준"},
]

const BookListItem:FC = () => {
    const getStoreList = () => {
        return BookList.map(e => {
            return (
                <S.AdminBookListTr >
                    <S.AdminBookListTd>
                        {e.storeName}
                    </S.AdminBookListTd>
                    <S.AdminBookListTd className="list__item--owner">
                        {e.storeOwner}
                    </S.AdminBookListTd>
                    <S.AdminBookListTd>
                        <S.AdminListChekbox type="checkbox" />
                    </S.AdminBookListTd>
                </S.AdminBookListTr>
            );
        })
    }
    return (
        <>
            <S.AdminBookListTr>
                <S.AdminBookListTd>
                    서점명
                </S.AdminBookListTd>
                <S.AdminBookListTd>
                    서점 주인
                </S.AdminBookListTd>
                <S.AdminBookListTd>
                    삭제
                </S.AdminBookListTd>
            </S.AdminBookListTr>
            {getStoreList()}
        </>
    );
}

export default BookListItem;