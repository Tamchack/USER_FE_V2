import { FC, useState } from 'react';
import { useHistory } from 'react-router';
import { loginRequest } from '../../api/main';
import * as S from './style';

const Login: FC = () => {
  const [checkId, setCheckId] = useState(false);
  const [checkPassword, setCheckPassword] = useState(false);

  const idRegex = '^([a-zA-Z0-9]){4,10}$';
  const inputId = (id: string) => {
    let check = id.match(idRegex);
    let result;
    if (check) result = true;
    else result = false;
    setCheckId(result);
    let underText = document.getElementById('idUnderText');
    if (underText) {
      if (!result) underText.style.opacity = '1';
      else underText.style.opacity = '0';
    }
  };

  const passwordRegex = '^(?=.*[a-z])(?=.*[0-9])[a-zA-Z0-9~!@#*_]{8,20}$';
  const inputPassword = (password: string) => {
    let check = password.match(passwordRegex);
    let result;
    if (check) result = true;
    else result = false;
    setCheckPassword(result);
    let underText = document.getElementById('passwordUnderText');
    if (underText) {
      if (!result) underText.style.opacity = '1';
      else underText.style.opacity = '0';
    }
  };

  const login = () => {
    let id = (document.getElementById('id') as HTMLInputElement).value;
    let password = (document.getElementById('password') as HTMLInputElement)
      .value;
    if (id && password) {
      inputId(id);
      inputPassword(password);
      if (checkId && checkPassword) {
        if (loginRequest(id, password)) {
          alert('로그인을 성공');
        }
        return;
      }
    }
  };

  const history = useHistory();
  const moveToSignup = () => {
    history.push('/signup');
  };

  return (
    <S.LoginPage>
      <S.LoginContent>
        <S.LoginContentHeader>
          <S.LoginContentTitle>로그인</S.LoginContentTitle>
          <S.LoginContentTitleUnderbar />
        </S.LoginContentHeader>
        <S.LoginInput
          id="id"
          type="text"
          placeholder="아이디를 입력해주세요"
          onKeyUp={(e) => {
            inputId(e.currentTarget.value);
          }}
        />
        <S.LoginInputtUnderText id="idUnderText">
          아이디 형식이 올바르지 않습니다
        </S.LoginInputtUnderText>
        <S.LoginInput
          id="password"
          type="password"
          placeholder="비밀번호를 입력해주세요"
          onKeyUp={(e) => {
            inputPassword(e.currentTarget.value);
          }}
        />
        <S.LoginInputtUnderText id="passwordUnderText">
          비밀번호 형식이 올바르지 않습니다
        </S.LoginInputtUnderText>
        <S.LoginButton check={checkId && checkPassword} onClick={login}>
          로그인
        </S.LoginButton>
        <S.MoveToSignupBox>
          <S.MoveToSignup onClick={moveToSignup}>
            아직 회원이 아니라면
          </S.MoveToSignup>
        </S.MoveToSignupBox>
      </S.LoginContent>
    </S.LoginPage>
  );
};

export default Login;
