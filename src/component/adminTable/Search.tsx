import React, { FC } from 'react';
import * as S from './style';

interface Props {
  title: string;
  type: string;
  setType: (value: string) => void;
  setCrruent: (value: number) => void;
}

const Search: FC<Props> = ({ children, title, setType, type, setCrruent }) => {
  return (
    <>
      <S.content>
        <S.ContentLeft>
          <button
            onClick={() => {
              setType('user');
              setCrruent(1);
            }}
            className={`${type === 'user' ? 'select' : ''}`}
          >
            <span>사용자</span>
            <span>{type === 'user' ? '>' : ''}</span>
          </button>
          <button
            onClick={() => {
              setType('admin');
              setCrruent(1);
            }}
            className={`${type === 'admin' ? 'select' : ''}`}
          >
            <span>서점관계자</span>
            <span>{type === 'admin' ? '>' : ''}</span>
          </button>
        </S.ContentLeft>
        <S.ContentRight>
          <S.UserInfoFont>{title}</S.UserInfoFont>
          <S.UserInfo>{children}</S.UserInfo>
        </S.ContentRight>
      </S.content>
    </>
  );
};

export default Search;
