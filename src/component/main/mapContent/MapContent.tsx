import { FC, useState } from 'react';
import * as S from '../style';
import MapIcon from '../../../image/map_icon.svg';
import MapPointIcon from '../../../image/map_point_icon.svg';
import Map from '../map';

interface Props {
  setSearchQuery: (query: string) => void;
}

const MapContent: FC<Props> = ({ setSearchQuery }) => {
  const [hoverIcon, setHoverIcon] = useState(false);

  const REGION_LIST = [
    '강원도',
    '경기도',
    '경상남도',
    '경상북도',
    '광주광역시',
    '대구광역시',
    '대전광역시',
    '부산광역시',
    '서울특별시',
    '세종특별시',
    '울산광역시',
    '인천광역시',
    '전라남도',
    '전라북도',
    '제주특별자치도',
    '충청남도',
    '충청북도',
  ];

  const getRegionList = () => {
    return REGION_LIST.map((element) => {
      return (
        <S.MainMapRegionElement
          onClick={() => {
            setSearchQuery(element);
          }}
        >
          {element}
        </S.MainMapRegionElement>
      );
    });
  };

  return (
    <>
      <S.MainMapRegionBox>
        <S.MainMapRegionHeader>
          <S.MainMapTitleBox>
            <S.MainMapRegionTitleText>
              우리 동네 서점 찾기
            </S.MainMapRegionTitleText>
            <S.MainMapRegionTitleUnderbar></S.MainMapRegionTitleUnderbar>
          </S.MainMapTitleBox>
          <S.MainMapRegionIconBox
            onMouseEnter={() => setHoverIcon(true)}
            onMouseLeave={() => setHoverIcon(false)}
          >
            <S.MainMapRegionIcon src={MapIcon}></S.MainMapRegionIcon>
            <S.MainMapRegionPointIcon
              src={MapPointIcon}
              hover={hoverIcon}
            ></S.MainMapRegionPointIcon>
          </S.MainMapRegionIconBox>
        </S.MainMapRegionHeader>
        <S.MainMapRegionContent>{getRegionList()}</S.MainMapRegionContent>
      </S.MainMapRegionBox>
      <S.MainMap>
        <S.MainMapImage>
          <Map setSearchQuery={setSearchQuery} />
        </S.MainMapImage>
      </S.MainMap>
    </>
  );
};

export default MapContent;
