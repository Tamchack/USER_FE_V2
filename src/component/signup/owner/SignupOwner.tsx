import { FC, useState } from 'react';
import * as S from '../style';

const SignupOwner: FC = () => {
  const [checkStoreName, setCheckStoreName] = useState(false);
  const [checkAddressName, setCheckAddressName] = useState(false);
  const [checkId, setCheckId] = useState(false);
  const [checkPassword, setCheckPassword] = useState(false);

  return (
    <S.SignupDetailContent>
      <S.SignupInput placeholder="서점 이름을 입력해주세요" />
      <S.SignupInputtUnderText></S.SignupInputtUnderText>
      <S.SignupInput placeholder="서점 주소를 입력해주세요" />
      <S.SignupInputtUnderText></S.SignupInputtUnderText>
      <S.SignupInput placeholder="아이디를 입력해주세요" />
      <S.SignupInputtUnderText></S.SignupInputtUnderText>
      <S.SignupInput placeholder="비밀번호를 입력해주세요 (대소문자,특수문자 필수)" />
      <S.SignupInputtUnderText></S.SignupInputtUnderText>
      <S.SignupInput placeholder="비밀번호를 한번 더 입력해주세요" />
      <S.SignupInputtUnderText></S.SignupInputtUnderText>
      <S.SignupButton
        check={checkStoreName && checkAddressName && checkId && checkPassword}
      >
        회원가입
      </S.SignupButton>
    </S.SignupDetailContent>
  );
};

export default SignupOwner;
