import React, { FC } from 'react';
import * as S from './style';


const AdminTable: FC = ({
    children,
}) => {
    return (
        <S.AdminBookInfo>
            {children}
        </S.AdminBookInfo>
    );
}

export default AdminTable;