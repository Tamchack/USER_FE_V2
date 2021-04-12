import React, { FC } from 'react';
import { useHistory, Link } from 'react-router-dom';
import * as S from './style';

const Admin: FC = () => {
    const history = useHistory();
    return (
        <S.AdminBox>
            <S.AdminBody>
                <S.AdminTitle>
                    서점관리 시스템 탐책 어드민 페이지 입니다
                </S.AdminTitle>
                <S.AdminCharacter/>
            </S.AdminBody>
        </S.AdminBox>
    );
}

export default Admin;
