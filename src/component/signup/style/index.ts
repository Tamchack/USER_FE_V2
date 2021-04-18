import styled from 'styled-components';

export const SignupPage = styled.div`
  display: flex;
  height: calc(100vh - 110px);
`;

export const SignupContent = styled.div<{ isDetail: boolean }>`
  width: ${({ isDetail }) => (isDetail ? '550px' : '750px')};
  margin: auto;
`;

export const SignupContentHeader = styled.div`
  width: max-content;
`;

export const SingupContentTitle = styled.div`
  margin: 0 10px;
  font-size: 2.5em;
  font-weight: bold;
`;

export const SignupContentTitleUnderbar = styled.div`
  width: 100%;
  height: 7px;
  border-radius: 10px;
  background-color: #7b91ff;
  margin-bottom: 40px;
`;

export const SignupContentBox = styled.div`
  display: flex;
  position: relative;
  height: 400px;
`;

export const SignupUserType = styled.div`
  display: inline-grid;
  position: absolute;
  width: 300px;
  height: 100%;
  text-align: center;
  font-size: 1.5em;
  font-weight: bold;
  color: white;
  background-color: #49498a;
  &:hover {
    color: black;
    background-color: #7b91ff;
    transform: scale(1.05);
  }
  transition: 0.2s;
  box-shadow: 3px 3px 10px 0px #00000042;
  border-radius: 15px;
  cursor: pointer;
  left: 0;
  &:last-child {
    left: unset;
    right: 0;
  }
`;

export const SignupUserTypeImage = styled.img`
  width: 60%;
  margin: 0 auto;
  margin-top: 30%;
`;

export const SignupDetailContent = styled.div`
  width: 550px;
  margin: auto;
`;

export const SignupInput = styled.input`
  width: 510px;
  height: 30px;
  border-radius: 5px;
  padding: 10px 20px;
  border: 1.5px solid #00000080;
  &:focus {
    margin-bottom: -0.5px;
    border: 2px solid #7b91ff;
  }
  outline: none;
`;

export const SignupInputtUnderText = styled.div`
  height: 20px;
  font-size: 0.75em;
  padding-left: 2px;
  color: red;
  opacity: 0;
  transition: 0.3s;
`;

export const SignupButton = styled.div<{ check: boolean }>`
  width: 100%;
  height: 30px;
  padding: 10px 0;
  margin-top: 15px;
  border-radius: 5px;
  text-align: center;
  outline: none;
  border: 1.5px solid ${({ check }) => (check ? '#7B91FF' : 'black')};
  background-color: ${({ check }) => (check ? '#7B91FF' : '#3c3b47')};
  &:hover {
    background-color: ${({ check }) => (check ? '#5d78ff' : '#3c3b47')};
  }
  cursor: ${({ check }) => (check ? 'pointer' : 'not-allowed')};
  font-size: 1.3em;
  transition: 0.3s;
`;
