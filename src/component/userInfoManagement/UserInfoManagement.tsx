import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import * as S from './style';
import Search from '../adminTable/Search';
import UserListItem from '../adminTable/listItem/UserListItme';
import { useState } from 'react';
import { useEffect } from 'react';

const UserInfoManagement: FC = () => {
  const [click, setClick] = useState();
  const [page, setPage] = useState<number>(1);
  const [startPage, setStartPage] = useState<number>(1);
  const [current, setCurrent] = useState<number>(1);
  const [totalEle, setTotalEle] = useState<number>(21);
  const [totalPage, setTotalPage] = useState<number>(0);

  useEffect(() => {
    // Todo : 서버 요청
    setTotalPage(Math.ceil(totalEle / 4)); // 6
  }, []);

  const [type, setType] = useState<string>('user');
  const [user, setUser] = useState([
    { id: 'test1', password: 'test1', name: '오준상' },
    { id: 'test2', password: 'test2', name: '오준상' },
    { id: 'test3', password: 'test3', name: '오준상' },
    { id: 'test4', password: 'test4', name: '오준상' },
    { id: 'test5', password: 'test5', name: '오준상' },
    { id: 'test6', password: 'test6', name: '오준상' },
    { id: 'test7', password: 'test7', name: '오준상' },
    { id: 'test8', password: 'test8', name: '오준상' },
  ]);

  const [admin, setAdmin] = useState([
    { id: 'tester1', password: 'tester1', name: '임용성' },
    { id: 'tester2', password: 'tester2', name: '임용성' },
    { id: 'tester3', password: 'tester3', name: '임용성' },
    { id: 'tester4', password: 'tester4', name: '임용성' },
    { id: 'tester5', password: 'tester5', name: '임용성' },
    { id: 'tester6', password: 'tester6', name: '임용성' },
    { id: 'tester7', password: 'tester7', name: '임용성' },
    { id: 'tester8', password: 'tester8', name: '임용성' },
  ]);

  const dummy = [
    [
      { id: 'tester1', password: 'tester1', name: '임용성' },
      { id: 'tester2', password: 'tester2', name: '임용성' },
      { id: 'tester3', password: 'tester3', name: '임용성' },
      { id: 'tester4', password: 'tester4', name: '임용성' },
      { id: 'tester5', password: 'tester5', name: '임용성' },
      { id: 'tester6', password: 'tester6', name: '임용성' },
      { id: 'tester7', password: 'tester7', name: '임용성' },
      { id: 'tester8', password: 'tester8', name: '임용성' },
    ],
    [
      { id: 'tester1', password: 'tester1', name: '임용성' },
      { id: 'tester2', password: 'tester2', name: '임용성' },
      { id: 'tester3', password: 'tester3', name: '임용성' },
      { id: 'tester4', password: 'tester4', name: '임용성' },
      { id: 'tester5', password: 'tester5', name: '임용성' },
      { id: 'tester6', password: 'tester6', name: '임용성' },
      { id: 'tester7', password: 'tester7', name: '임용성' },
      { id: 'tester812313', password: 'tester8', name: '임용성' },
    ],
  ];

  const history = useHistory();

  const getPagenation = () => {
    const pages = [];

    for (let i = startPage; i < startPage + 5; i++) {
      console.log(startPage, totalPage);
      if (i > totalPage) break;
      pages.push(
        <S.AdminNavigationNumber
          onClick={() => {
            setCurrent(i);
          }}
          className={current === i ? 'select' : ''}
        >
          {i}
        </S.AdminNavigationNumber>,
      );
    }

    return pages;
  };

  return (
    <S.AdminBookBody>
      <S.AdminBookTitle>회원정보관리</S.AdminBookTitle>
      <S.AdminTitleUnderbar />
      <Search
        title={type === 'user' ? '사용자 회원 목록' : '서점관계자 회원 목록'}
        type={type}
        setType={setType}
        setCrruent={setCurrent}
      >
        <UserListItem list={type === 'admin' ? dummy[current - 1] : user} />
      </Search>
      <S.AdminNavigation>
        <button
          onClick={(e) => {
            setStartPage(startPage - 5);
          }}
        >
          {'<'}
        </button>
        {getPagenation()}
        {totalPage > startPage + 4 && (
          <button
            onClick={(e) => {
              setStartPage(startPage + 5);
            }}
          >
            {'>'}
          </button>
        )}
      </S.AdminNavigation>
    </S.AdminBookBody>
  );
};

export default UserInfoManagement;
