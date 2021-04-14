import React, { FC, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as S from './style';
import Logo from '../../image/logo.svg';
import Arrorw from '../../image/search_type_arrow.svg';
import SearchButton from '../../image/search_button.svg';

const Header: FC = () => {
  const history = useHistory();
  const moveToMain = () => {
    history.push('/');
  };

  const SEARCH_TYPES = ['전체', '책 이름', '서점 정보'];

  const [serachType, setSearchType] = useState(SEARCH_TYPES[0]);
  const [open, setOpen] = useState(false);

  const changeType = (element: string) => {
    setOpen(false);
    setSearchType(element);
  };

  const getSearchTypes = () =>
    SEARCH_TYPES.map((element) => {
      return (
        <S.SearchElement onClick={() => changeType(element)}>
          {element}
        </S.SearchElement>
      );
    });

  const typeboxClickHandler = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setOpen(!open);
  };

  const searchKeyword = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.code.endsWith('Enter')) {
      // var searchWord: string = (event.target as HTMLInputElement).value;
    }
  };

  useEffect(() => {
    window.addEventListener('click', () => setOpen(false));
  }, []);

  const redirectPage = (url: string) => {
    history.push(url);
  };

  return (
    <S.HeaderBody>
      <S.LogoImage src={Logo} onClick={moveToMain}></S.LogoImage>
      <S.SearchBox open={open}>
        <S.SearchTypeBox onClick={typeboxClickHandler}>
          <S.SearchTypeArrow src={Arrorw} open={open}></S.SearchTypeArrow>
          {serachType}
          <S.SearchType open={open}>{getSearchTypes()}</S.SearchType>
        </S.SearchTypeBox>
        <S.SearchInput
          placeholder="찾으실 검색어를 입력해주세요"
          onKeyPress={searchKeyword}
        ></S.SearchInput>
        <S.SearchButtonIcon src={SearchButton}></S.SearchButtonIcon>
      </S.SearchBox>
      <S.HeaderButtonBox>
        <S.HeaderButton onClick={() => redirectPage('/book')}>
          책 등록
        </S.HeaderButton>
        <S.HeaderButton onClick={() => redirectPage('/mypage')}>
          마이페이지
        </S.HeaderButton>
        <S.HeaderButton onClick={() => redirectPage('/login')}>
          로그인
        </S.HeaderButton>
      </S.HeaderButtonBox>
    </S.HeaderBody>
  );
};

export default Header;
