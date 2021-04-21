import { FC, useState } from 'react';
import * as S from '../style';

const SignupOwner: FC = () => {
  const [checkName, setCheckName] = useState(false);
  const [checkId, setCheckId] = useState(false);
  const [checkPassword, setCheckPassword] = useState(false);
  const [checkConfirmPassword, setCheckConfirmPassword] = useState(false);

  const nameRegex = '^([가-힣a-zA-Z0-9 ]){3,32}$';
  const idRegex = '^([a-z0-9]){4,10}$';
  const passwordRegex = '^([a-zA-Z0-9]){7,20}$';

  const inputText = (
    text: string,
    regex: string,
    state: (check: boolean) => void,
    underTextId: string,
  ) => {
    let check = text.match(regex);
    let result;
    if (check) result = true;
    else result = false;
    state(result);
    let underText = document.getElementById(underTextId);
    if (underText) {
      if (!result) underText.style.opacity = '1';
      else underText.style.opacity = '0';
    }
  };

  const confirmPassword = (confirmPassword: string) => {
    let passwordInput = document.getElementById(
      'passwordInput',
    ) as HTMLInputElement;
    if (passwordInput) {
      let password = passwordInput.value;
      let underText = document.getElementById('confirmPasswordUnderText');
      if (underText) {
        if (password == confirmPassword) {
          underText.style.opacity = '0';
          setCheckConfirmPassword(true);
        } else {
          underText.style.opacity = '1';
          setCheckConfirmPassword(false);
        }
      }
    }
  };

  return (
    <S.SignupDetailContent>
      <S.SignupInput
        placeholder="닉네임을 입력해주세요"
        onKeyUp={(e) =>
          inputText(
            e.currentTarget.value,
            nameRegex,
            setCheckName,
            'nameUnderText',
          )
        }
      />
      <S.SignupInputUnderText id="nameUnderText">
        이름은 4글자 이상 32글자 이하여야 합니다
      </S.SignupInputUnderText>
      <S.SignupInput
        placeholder="아이디를 입력해주세요"
        onKeyUp={(e) =>
          inputText(e.currentTarget.value, idRegex, setCheckId, 'idUnderText')
        }
      />
      <S.SignupInputUnderText id="idUnderText">
        아이디는 소문자와 숫자를 사용하고, 4글자 이상 10글자 이하여야 합니다
      </S.SignupInputUnderText>
      <S.SignupInput
        id="passwordInput"
        type="password"
        placeholder="비밀번호를 입력해주세요 (대소문자,특수문자 필수)"
        onKeyUp={(e) => {
          inputText(
            e.currentTarget.value,
            passwordRegex,
            setCheckPassword,
            'passwordUnderText',
          );
          confirmPassword(
            (document.getElementById(
              'confirmPasswordInput',
            ) as HTMLInputElement).value,
          );
        }}
      />
      <S.SignupInputUnderText id="passwordUnderText">
        비밀번호는 대소문자와 숫자를 사용하고, 7글자 이상 20글자 이하여야 합니다
      </S.SignupInputUnderText>
      <S.SignupInput
        id="confirmPasswordInput"
        type="password"
        placeholder="비밀번호를 한번 더 입력해주세요"
        onKeyUp={(e) => confirmPassword(e.currentTarget.value)}
      />
      <S.SignupInputUnderText id="confirmPasswordUnderText">
        비밀번호가 일치하지 않습니다
      </S.SignupInputUnderText>
      <S.SignupButton
        check={checkName && checkId && checkPassword && checkConfirmPassword}
      >
        회원가입
      </S.SignupButton>
    </S.SignupDetailContent>
  );
};

export default SignupOwner;
