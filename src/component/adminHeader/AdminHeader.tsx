import React, { FC } from 'react';
import { useHistory, Link } from 'react-router-dom';
import * as S from './style';

const AdminHeader: FC = () => {
    const history = useHistory();
    return (
            <S.AdminHeader>
                <S.AdminLogo/>
                <S.AdminHeaderButtonWrapper>
                    <Link to="/admin/book">
                        <S.AdminHeaderButton>
                            서점관리
                        </S.AdminHeaderButton>
                    </Link>
                    <Link to="/admin/user">
                        <S.AdminHeaderButton>
                            회원정보관리
                        </S.AdminHeaderButton>
                    </Link>
                    <S.AdminHeaderButton>
                        베스트셀러
                    </S.AdminHeaderButton>
                </S.AdminHeaderButtonWrapper>
            </S.AdminHeader>
    );
}

export default AdminHeader;
