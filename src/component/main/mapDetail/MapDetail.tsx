import { FC, useEffect } from 'react';
import * as S from '../style';
import MapCloseImage from '../../../image/map_close_arrow.svg';
import MapPointImage from '../../../image/map_point_icon.svg';
import RegionIconInfo from '../../../image/region_icon_info.svg';
import { getBookstores } from '../../../api/main';
import { BookStore } from '../../../api/model';

declare global {
  interface Window {
    kakao: any;
  }
}

interface Props {
  searchPosition: any;
  setSearchQuery: (query: string) => void;
}

const kakao = window.kakao;
const MapDetail: FC<Props> = ({ searchPosition, setSearchQuery }) => {
  useEffect(() => {
    if (searchPosition && searchPosition.lat && searchPosition.lng) {
      applyMap(searchPosition.lat, searchPosition.lng);
    }
  }, [searchPosition]);

  const applyMap = (lat: number, lng: number) => {
    const mapContainer = document.getElementById('map');
    const mapOption = {
      center: new kakao.maps.LatLng(lat, lng),
      level: 3,
      mapTypeId: kakao.maps.MapTypeId.ROADMAP,
    };

    if (mapContainer) mapContainer.innerHTML = '';
    var map = new kakao.maps.Map(mapContainer, mapOption);
    // map.setDraggable(false);
    // map.setZoomable(false);

    const bookStores = getBookstores(lat, lng);
    bookStores.map((bookStore) => {
      addMarker(map, bookStore);
    });
  };

  const icon = new kakao.maps.MarkerImage(
    MapPointImage,
    new kakao.maps.Size(40, 45),
  );

  const getRegionInfo = (storeName: string) => {
    return `<div style="display: grid;transform: translateY(-190%);"><div style="width:max-content;text-align:center;padding:1.5px 13px;border-radius: 10px;background-color: white;border: 1px solid #4A4A53">${storeName}</div><img src="${RegionIconInfo}" style="margin: 0 auto;margin-top: -1px;" /></div>`;
  };

  const addMarker = (map: any, bookStore: BookStore) => {
    let marker = new kakao.maps.Marker({
      position: new kakao.maps.LatLng(bookStore.lat, bookStore.lng),
      image: icon,
      map: map,
    });
    var overlay = new kakao.maps.CustomOverlay({
      content: getRegionInfo(bookStore.storeName),
      position: marker.getPosition(),
    });
    kakao.maps.event.addListener(marker, 'mouseover', () =>
      overlay.setMap(map),
    );
    kakao.maps.event.addListener(marker, 'mouseout', () =>
      overlay.setMap(null),
    );
  };

  const closeMapDetail = () => {
    setSearchQuery('');
  };

  return (
    <>
      <S.MapDetailContent id="map" />
      <S.MapDetailClose src={MapCloseImage} onClick={closeMapDetail} />
    </>
  );
};

export default MapDetail;
