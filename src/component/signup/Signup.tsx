import { FC } from 'react';
import * as S from './style';
import SignupUser from '../../image/signup_user.svg';
import SignupStoreUser from '../../image/signup_storeuser.svg';

const Signup: FC = () => {
  return (
    <S.SignupPage>
      <S.SignupContent>
        <S.SignupContentHeader>
          <S.SingupContentTitle>회원가입</S.SingupContentTitle>
          <S.SignupContentTitleUnderbar />
        </S.SignupContentHeader>
        <S.SignupContentBox>
          <S.SignupUserType>
            <S.SignupUserTypeImage src={SignupUser} />
            고객
          </S.SignupUserType>
          <S.SignupUserType>
            <S.SignupUserTypeImage src={SignupStoreUser} />
            서점 관계자
          </S.SignupUserType>
        </S.SignupContentBox>
      </S.SignupContent>
    </S.SignupPage>
  );
};

export default Signup;
