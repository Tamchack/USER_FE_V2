import { FC, useEffect } from 'react';
import * as S from './style';
import { useParams } from 'react-router';
import SignupSelectBox from './select';

interface Param {
  type: string;
}

const Signup: FC = () => {
  let { type } = useParams<Param>();

  const getContent = () => {
    if (type) {
    } else {
      return <SignupSelectBox />;
    }
  };

  return (
    <S.SignupPage>
      <S.SignupContent>
        <S.SignupContentHeader>
          <S.SingupContentTitle>회원가입</S.SingupContentTitle>
          <S.SignupContentTitleUnderbar />
        </S.SignupContentHeader>
        {getContent()}
      </S.SignupContent>
    </S.SignupPage>
  );
};

export default Signup;
