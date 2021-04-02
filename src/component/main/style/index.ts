import styled, {keyframes} from 'styled-components';

export const MainBody = styled.div`
  width: 80%;
  display: block;
  margin: 0 auto;
  margin-top: 70px;
`;

export const MainHeader = styled.div `
  width: 100%;
`;

export const MainTitle = styled.span `
  font-size: 25px;
  font-weight: bold;
  padding-left: 5px;
`;

export const MainTitleUnderbar = styled.div `
  width: 160px;
  height: 7px;
  border-radius: 10px;
  background-color: #7B91FF;
`;

export const MainContent = styled.div `
  width: 85%;
  margin: 80px auto;
  margin-bottom: 40px;
`;

export const MainMapSearchBox = styled.div `
  height: 35px;
  line-height: 35px;
`;

export const MainMapSearch = styled.input `
  width: 40%;
  height: 33px;
  border: 1.5px solid #3C3B47;
  border-radius: 20px;
  padding-left: 15px;
  padding-right: 30px;
  outline: none;
`;

export const MainMapSearchIcon = styled.img `
  height: 49%;
  vertical-align: middle;
  margin-left: -30px;
  cursor: pointer;
`;

export const MainMapBox = styled.div `
  display: flex;
  height: 50vh;
  margin-top: 25px;
  box-shadow: 3px 3px 10px 0px #00000042;
`;

export const MainMapRegionBox = styled.div `
  width: 45%;
  padding: 50px 50px 50px 100px;
`;

export const MainMapRegionHeader = styled.div `
  display: flex;
  height: 50px;
`;

export const MainMapRegionTitleText = styled.span `
  font-size: 40px;
  font-weight: bold;
  letter-spacing: 6px;
  padding-left: 13px;
`;

export const MainMapRegionTitleUnderbar = styled.div `
  width: 410px;
  height: 7px;
  border-radius: 10px;
  background-color: #7B91FF;
  margin-top: 0px;
`;

export const MainMapRegionIcon = styled.img `
  position: relative;
  height: 30px;
  margin-left: 20px;
  top: 50%;
`;

const MapPointIconAnimation = keyframes `
  0% {
    top: 15%;
  }
  50% {
    top: -10%;
  }
  100% {
    top: 15%;
  }
`;

export const MainMapRegionPointIcon = styled.img<{hover: boolean}> `
  position: relative;
  height: 35px;
  margin-left: -43px;
  top: 15%;
  animation: ${MapPointIconAnimation} ${({hover}) => hover ? "0.2s cubic-bezier(0.1, 0.61, 0.58, 1)" : "nonde"};
`;

export const MainMapRegionContent = styled.div `
  margin-top: 50px;
`;

export const MainMapRegionElement = styled.div `
  height: 12px;
  font-size: 17px;
  line-height: 12px;
  max-width: 24%;
  float: left;
  padding: 10px;
  margin: 10px 10px;
  text-align: center;
  background-color: #7B91FF;
  border: 2px solid #49498A;
  border-radius: 20px;
  letter-spacing: 3px;
  cursor: pointer;
`;

export const MainMap = styled.div `
  display: flex;
  justify-content: center;
  width: 40%;
  height: 100%;
`;

export const MainMapImage = styled.img `
  height: 85%;
  margin-top: 7.5%;
`;

export const MainPageMoveArrowBox = styled.div `
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

export const MainPageMoveArrow = styled.img `
  width: 150px;
  margin: auto;
  cursor: pointer;
`;

export const BestSellerBox = styled.div `
  height: 600px;
  margin-top: 150px;
  margin-bottom: 150px;
`;

export const BestSellerTitle = styled.div `
  font-size: 25px;
  font-weight: bold;
  padding-left: 5px;
`;

export const BestSellerTitleUnderBar = styled.div `
  width: 135px;
  height: 7px;
  background-color: #7b91ff;
  border-radius: 10px;
`;

export const BestSellerList = styled.div `
  position: relative;
  display: flex;
  width: 80%;
  height: 500px;
  margin: 30px auto 0px auto;
  perspective: 30cm;
`;

export const BestSellerElement = styled.div `
  position: absolute;
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  width: 350px;
  height: 500px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 3px 10px 0px #00000042;
  transition: 0.5s;
  cursor: pointer;
  &#order-first {
    left: 0%;
    z-index: 0;
    transform: rotate3d(0, 1, 0, 20deg) translateZ(-300px);
  }
  &#order-second {
    left: 15%;
    z-index: 1;
    transform: rotate3d(0, 1, 0, 15deg) translateZ(-150px);
  }
  &#order-third {
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
  }
  &#order-forth{
    right: 15%;
    z-index: 1;
    transform: rotate3d(0, 1, 0, -15deg) translateZ(-150px);
  }
  &#order-fifth {
    right: 0%;
    z-index: 0;
    transform: rotate3d(0, 1, 0, -20deg) translateZ(-300px);
  }
`;

export const BestSellerImage = styled.img `
  width: 290px;
  margin-top: 10px;
`;

export const BestSellerElementName = styled.p `
  font-weight: bold;
`;