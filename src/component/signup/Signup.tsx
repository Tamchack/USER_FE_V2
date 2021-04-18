import { FC, useEffect } from 'react';
import * as S from './style';
import { useHistory, useParams } from 'react-router';
import SignupSelectBox from './select';
import SignupOwner from './owner';

interface Param {
  type: string;
}

const Signup: FC = () => {
  const history = useHistory();
  let { type } = useParams<Param>();

  const getContent = () => {
    if (type) {
      if (type === 'owner') return <SignupOwner />;
      else history.push('/signup');
    } else {
      return <SignupSelectBox />;
    }
  };

  return (
    <S.SignupPage>
      <S.SignupContent isDetail={type != undefined}>
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
