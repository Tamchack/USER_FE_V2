import { FC, useState } from 'react';
import Main from '../../component/main';

const MainContainer: FC = () => {
  interface Position {
    x: number;
    y: number;
  }
  const [searchPosition, setSearchPosition] = useState<Position>();

  return (
    <Main
      searchPosition={searchPosition}
      setSearchPosition={setSearchPosition}
    />
  );
  // 여기서 state관련 함수를 만들어서 component로 내려준다.
  // 서버통신도 container에서 진행하는 경우가 많음.
};

export default MainContainer;
