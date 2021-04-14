import React, { FC, useEffect, useState } from 'react';
import * as S from './style';
import SearchIcon from '../../image/search_button.svg';
import PageArrow from '../../image/page_move_arrow.svg';
import TestImage from '../../image/test_image.svg';
import MapContent from './mapContent';
import MapDetail from './mapDetail/MapDetail';

interface Props {
  searchPosition: any;
  setSearchPosition: (position: any) => void;
}

const Main: FC<Props> = ({ searchPosition, setSearchPosition }) => {
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    let inputElement = document.getElementById(
      'searchInput',
    ) as HTMLInputElement;
    inputElement.value = searchQuery;
  }, [searchQuery]);

  const NumberString = [
    'order-first',
    'order-second',
    'order-third',
    'order-forth',
    'order-fifth',
  ];

  const bestSellers = [
    {
      title: '자존감 수업 1',
      author: '윤홍균',
      image: '',
    },
    {
      title: '자존감 수업 2',
      author: '윤홍균',
      image: '',
    },
    {
      title: '자존감 수업 3',
      author: '윤홍균',
      image: '',
    },
    {
      title: '자존감 수업 4',
      author: '윤홍균',
      image: '',
    },
    {
      title: '자존감 수업 5',
      author: '윤홍균',
      image: '',
    },
  ];

  let processing = false;
  const overPageElement = async (e: any) => {
    if (processing) return;
    processing = true;
    let target = e.currentTarget;
    if (target === undefined) {
      target = e;
    }

    const list = document.getElementById('seller-list')?.children;
    if (!list) return;

    if (target.id === 'order-forth' || target.id === 'order-fifth') {
      let clonedElement = list[0].cloneNode(true) as Element;
      list[0].id = 'hide-first';
      clonedElement.id = 'append-last';
      clonedElement.addEventListener('click', () => {
        overPageElement(clonedElement);
      });
      document.getElementById('seller-list')?.append(clonedElement);
      setTimeout(() => {
        list[0].remove();
      }, 500);
      setTimeout(() => {
        for (let i = 1; i < list.length; i++) {
          list[i].id = NumberString[i - 1];
        }
      }, 25);
    } else if (target.id === 'order-first' || target.id === 'order-second') {
      let clonedElement = list[4].cloneNode(true) as Element;
      list[4].id = 'hide-last';
      clonedElement.id = 'append-first';
      clonedElement.addEventListener('click', () => {
        overPageElement(clonedElement);
      });
      document
        .getElementById('seller-list')
        ?.insertAdjacentElement('afterbegin', clonedElement);
      setTimeout(() => {
        list[5].remove();
      }, 500);
      setTimeout(() => {
        for (let i = 0; i < list.length - 1; i++) {
          list[i].id = NumberString[i];
        }
      }, 25);
    }

    setTimeout(() => {
      processing = false;
    }, 500);
  };

  const getBestSellerList = () => {
    return bestSellers.map((element, index) => {
      return (
        <S.BestSellerElement id={NumberString[index]} onClick={overPageElement}>
          <S.BestSellerImage src={TestImage}></S.BestSellerImage>
          <S.BestSellerElementName>
            {element.title} - {element.author}
          </S.BestSellerElementName>
        </S.BestSellerElement>
      );
    });
  };

  const searchPlaceByInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      searchPlace(e.currentTarget.value);
    }
  };

  const searchPlaceByClick = () => {
    let inputElement = document.getElementById(
      'searchInput',
    ) as HTMLInputElement;
    searchPlace(inputElement.value);
  };

  const places = new window.kakao.maps.services.Places();

  const callback = (result: any[], status: any) => {
    if (status === window.kakao.maps.services.Status.OK) {
      let lat = result[0].y;
      let lng = result[0].x;
      setSearchPosition({ lat: lat, lng: lng });
    } else {
      setSearchPosition(null);
    }
  };

  const searchPlace = (query: string) => {
    places.keywordSearch(query, callback);
  };

  useEffect(() => {
    searchPlace(searchQuery);
  }, [searchQuery]);

  return (
    <S.MainBody>
      <S.MainHeader>
        <S.MainTitle>근처 서점 찾기</S.MainTitle>
        <S.MainTitleUnderbar></S.MainTitleUnderbar>
      </S.MainHeader>
      <S.MainContent>
        <S.MainMapSearchBox>
          <S.MainMapSearch
            id="searchInput"
            placeholder="주소를 입력하세요"
            onKeyPress={searchPlaceByInput}
          ></S.MainMapSearch>
          <S.MainMapSearchIcon
            src={SearchIcon}
            onClick={searchPlaceByClick}
          ></S.MainMapSearchIcon>
        </S.MainMapSearchBox>
        <S.MainMapBox>
          {searchPosition ? (
            <MapDetail
              searchPosition={searchPosition}
              setSearchQuery={setSearchQuery}
            />
          ) : (
            <MapContent setSearchQuery={setSearchQuery} />
          )}
        </S.MainMapBox>
        <S.MainPageMoveArrowBox>
          <S.MainPageMoveArrow
            src={PageArrow}
            onClick={() => {
              window.scrollTo({
                left: 0,
                top: document.body.scrollHeight,
                behavior: 'smooth',
              });
            }}
          ></S.MainPageMoveArrow>
        </S.MainPageMoveArrowBox>
        <S.BestSellerBox>
          <S.BestSellerTitle>베스트 셀러</S.BestSellerTitle>
          <S.BestSellerTitleUnderBar></S.BestSellerTitleUnderBar>
          <S.BestSellerList id="seller-list">
            {getBestSellerList()}
          </S.BestSellerList>
        </S.BestSellerBox>
      </S.MainContent>
    </S.MainBody>
  );
};

export default Main;
