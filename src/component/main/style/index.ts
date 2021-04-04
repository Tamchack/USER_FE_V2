import styled, {keyframes} from 'styled-components';

export const MainBody = styled.div`
  width: 80%;
  display: block;
  margin: 0 auto;
  margin-top: 5%;
`;

export const MainHeader = styled.div `
  width: 100%;
`;

export const MainTitle = styled.span `
  font-size: 1.5em;
  font-weight: bold;
  padding-left: 0.5%;
`;

export const MainTitleUnderbar = styled.div `
  width: 10em;
  height: 10px;
  border-radius: 10px;
  background-color: #7B91FF;
`;

export const MainContent = styled.div `
  width: 85%;
  margin: 4% auto;
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
  margin-top: 2%;
  box-shadow: 3px 3px 10px 0px #00000042;
`;

export const MainMapRegionBox = styled.div `
  width: 55%;
  padding: 5% 3% 3% 5%;
`;

export const MainMapRegionHeader = styled.div `
  display: flex;
  height: 15%;
  align-items: flex-end;
`;

export const MainMapTitleBox = styled.div `
  position: relative;
`;

export const MainMapRegionTitleText = styled.div `
  font-size: 2em;
  font-weight: bold;
  letter-spacing: 6px;
  text-align: center;
  margin: 0 15px;
`;

export const MainMapRegionTitleUnderbar = styled.div `
  height: 7px;
  border-radius: 10px;
  background-color: #7B91FF;
`;

export const MainMapRegionIconBox = styled.div `
  position: relative;
  display: flex;
  justify-content: center;
  width: 15%;
  height: 110%;
  margin-left: 3%;
`;

export const MainMapRegionIcon = styled.img `
  position: absolute;
  height: 60%;
  top: 40%;
`;

const MapPointIconAnimation = keyframes `
  0% {
    top: 15%;
  }
  50% {
    top: -25%;
  }
  100% {
    top: 15%;
  }
`;

export const MainMapRegionPointIcon = styled.img<{hover: boolean}> `
  position: absolute;
  height: 60%;
  top: 15%;
  animation: ${MapPointIconAnimation} ${({hover}) => hover ? "0.2s cubic-bezier(0.1, 0.61, 0.58, 1)" : "nonde"};
`;

export const MainMapRegionContent = styled.div `
  margin-top: 5%;
  height: 70%;
`;

export const MainMapRegionElement = styled.button `
  font-size: 17px;
  /* max-width: 24%; */
  float: left;
  padding: 0.5% 1.5%;
  margin: 10px 10px;
  background-color: #7B91FF;
  border: 2px solid #49498A;
  border-radius: 20px;
  letter-spacing: 2px;
  cursor: pointer;
  outline: none;
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
  margin-top: 3%;
`;

export const MainPageMoveArrow = styled.img `
  width: 10%;
  margin: auto;
  cursor: pointer;
`;

export const BestSellerBox = styled.div `
  height: 65vh;
  margin-top: 12.5%;
  margin-bottom: 12.5%;
`;

export const BestSellerTitle = styled.div `
  font-size: 1.5em;
  font-weight: bold;
  padding-left: 5px;
`;

export const BestSellerTitleUnderBar = styled.div `
  width: 8em;
  height: 7px;
  background-color: #7b91ff;
  border-radius: 10px;
`;

export const BestSellerList = styled.div `
  position: relative;
  display: flex;
  width: 80%;
  height: 85%;
  margin: 30px auto 0px auto;
  perspective: 30cm;
`;

export const BestSellerElement = styled.div `
  position: absolute;
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  width: 35%;
  height: 95%;
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
  width: 80%;
  margin-top: 10px;
`;

export const BestSellerElementName = styled.p `
  font-weight: bold;
`;