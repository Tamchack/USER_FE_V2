import React, { FC, useState } from 'react';
import * as S from './style';
import SearchIcon from '../../image/search_button.svg'
import MapIcon from '../../image/map_icon.svg'
import MapPointIcon from '../../image/map_point_icon.svg'
import MapImage from '../../image/map_image.svg'
import PageArrow from '../../image/page_move_arrow.svg'
import TestImage from '../../image/test_image.svg'

const Main: FC = () => {

  const [hoverIcon, setHoverIcon] = useState(false);

  const REGION_LIST = [
    '강원도', '경기도', '경상남도', '경상북도', '광주광역시',
    '대구광역시', '대전광역시', '부산광역시', '서울특별시',
    '세종특별시', '울산광역시', '인천광역시', '전라남도',
    '전라북도', '제주특별자치도', '충청남도', '충청북도'
  ];

  const getRegionList = () => {
    return REGION_LIST.map(element => {
       return (<S.MainMapRegionElement>{element}</S.MainMapRegionElement>);
    });
  }

  
  let NumberString = [
    'order-first',
    'order-second',
    'order-third',
    'order-forth',
    'order-fifth'
  ]

  const bestSellers = [
    {
      title: "자존감 수업 1",
      author: "윤홍균",
      image: ""
    },
    {
      title: "자존감 수업 2",
      author: "윤홍균",
      image: ""
    },
    {
      title: "자존감 수업 3",
      author: "윤홍균",
      image: ""
    },
    {
      title: "자존감 수업 4",
      author: "윤홍균",
      image: ""
    },
    {
      title: "자존감 수업 5",
      author: "윤홍균",
      image: ""
    }
  ];

  let processing = false;
  const overPageElement = (e: React.MouseEvent<HTMLImageElement>) => {
    if (processing) return;
    processing = true;
    const target = e.currentTarget;
    const list = document.getElementById('seller-list')?.children;
    if(!list) return;
    
    if (target.id === 'order-forth' || target.id === 'order-fifth') {
      NumberString.unshift(NumberString[NumberString.length - 1]);
      NumberString.pop();
    } else if (target.id === 'order-first' || target.id === 'order-second') {
      NumberString.push(NumberString[0]);
      NumberString.shift();
    }
    
    for(let i = 0;i < list.length;i++){
      list[i].id = NumberString[i];
    }

    setTimeout(() => {
      processing = false;
    }, 500);
  }

  // setInterval(() => {
  //   if (processing) return;
  //   processing = true;
  //   const list = document.getElementById('seller-list')?.children;
  //   if(!list) return;

  //   NumberString.unshift(NumberString[NumberString.length - 1]);
  //   NumberString.pop();
    
  //   for(let i = 0;i < list.length;i++){
  //     list[i].id = NumberString[i];
  //   }
  //   setTimeout(() => {
  //     processing = false;
  //   }, 500);
  // }, 5000);

  const getBestSellerList = () => {
    return bestSellers.map((element, index) => {
      return(
        <S.BestSellerElement id={NumberString[index]} onClick={overPageElement}>
          <S.BestSellerImage src={TestImage}></S.BestSellerImage>
          <S.BestSellerElementName>{element.title} - {element.author}</S.BestSellerElementName>
        </S.BestSellerElement>
      );
    });
  }

  return (
    <S.MainBody>
      <S.MainHeader>
        <S.MainTitle>근처 서점 찾기</S.MainTitle>
        <S.MainTitleUnderbar></S.MainTitleUnderbar>
      </S.MainHeader>
      <S.MainContent>
        <S.MainMapSearchBox>
          <S.MainMapSearch placeholder="주소를 입력하세요"></S.MainMapSearch>
          <S.MainMapSearchIcon src={SearchIcon}></S.MainMapSearchIcon>
        </S.MainMapSearchBox>
        <S.MainMapBox>
          <S.MainMapRegionBox>
            <S.MainMapRegionHeader>
              <S.MainMapTitleBox>
                <S.MainMapRegionTitleText>우리 동네 서점 찾기</S.MainMapRegionTitleText>
                <S.MainMapRegionTitleUnderbar></S.MainMapRegionTitleUnderbar>
              </S.MainMapTitleBox>
              <S.MainMapRegionIconBox onMouseEnter={() => setHoverIcon(true)} onMouseLeave={() => setHoverIcon(false)}>
                <S.MainMapRegionIcon src={MapIcon}></S.MainMapRegionIcon>
                <S.MainMapRegionPointIcon src={MapPointIcon} hover={hoverIcon}></S.MainMapRegionPointIcon>
              </S.MainMapRegionIconBox>
            </S.MainMapRegionHeader>
            <S.MainMapRegionContent>{getRegionList()}</S.MainMapRegionContent>
          </S.MainMapRegionBox>
          <S.MainMap>
            <S.MainMapImage src={MapImage}></S.MainMapImage>
          </S.MainMap>
        </S.MainMapBox>
        <S.MainPageMoveArrowBox>
          <S.MainPageMoveArrow src={PageArrow} onClick={() => {window.scrollTo({left:0, top: document.body.scrollHeight, behavior: 'smooth'})}}></S.MainPageMoveArrow>
        </S.MainPageMoveArrowBox>
        <S.BestSellerBox>
          <S.BestSellerTitle>베스트 셀러</S.BestSellerTitle>
          <S.BestSellerTitleUnderBar></S.BestSellerTitleUnderBar>
          <S.BestSellerList id="seller-list">{getBestSellerList()}</S.BestSellerList>
        </S.BestSellerBox>
      </S.MainContent>
    </S.MainBody>
  );
};

export default Main;
