import {useEffect} from 'react';
import * as S from './KakaoMap.styled';

const {kakao} = window;

export const KakaoMap = () => {
  useEffect(() => {
    console.log(kakao);
    console.log(kakao);

    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(37.5582876, 127.0001671),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);
    console.log(map);
  }, []);

  return <S.MapWrapper id="map"></S.MapWrapper>;
};
