import { FC } from 'react';
import * as S from '../style';
import SignupUser from '../../../image/signup_user.svg';
import SignupStoreUser from '../../../image/signup_storeuser.svg';
import { useHistory } from 'react-router';

const SignupSelectBox: FC = () => {
  const history = useHistory();
  const selectSignupType = (selectedStype: string) => {
    history.push('/signup/' + selectedStype);
  };

  return (
    <S.SignupContentBox>
      <S.SignupUserType
        onClick={() => {
          selectSignupType('customer');
        }}
      >
        <S.SignupUserTypeImage src={SignupUser} />
        고객
      </S.SignupUserType>
      <S.SignupUserType
        onClick={() => {
          selectSignupType('owner');
        }}
      >
        <S.SignupUserTypeImage src={SignupStoreUser} />
        서점 관계자
      </S.SignupUserType>
    </S.SignupContentBox>
  );
};

export default SignupSelectBox;
