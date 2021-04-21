import { check } from 'prettier';
import styled from 'styled-components';

export const LoginPage = styled.div`
  display: flex;
  height: calc(100vh - 110px);
`;

export const LoginContent = styled.div`
  width: 550px;
  margin: auto;
`;

export const LoginContentHeader = styled.div`
  width: max-content;
`;

export const LoginContentTitle = styled.div`
  margin: 0 10px;
  font-size: 2.5em;
  font-weight: bold;
`;

export const LoginContentTitleUnderbar = styled.div`
  width: 100%;
  height: 7px;
  border-radius: 10px;
  background-color: #7b91ff;
  margin-bottom: 40px;
`;

export const LoginInput = styled.input`
  width: 510px;
  height: 30px;
  border: 1.5px solid #00000080;
  &:focus {
    border: 2px solid #7b91ff;
  }
  border-radius: 5px;
  padding: 10px 20px;
  outline: none;
`;

export const LoginInputUnderText = styled.div`
  height: 20px;
  font-size: 0.75em;
  padding-left: 2px;
  color: red;
  opacity: 0;
  transition: 0.3s;
`;

export const LoginButton = styled.div<{ check: boolean }>`
  width: 100%;
  height: 30px;
  padding: 10px 0;
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

export const MoveToSignupBox = styled.div`
  display: flex;
  justify-content: center;
`;

export const MoveToSignup = styled.p`
  margin-top: 20px;
  text-decoration: underline;
  color: black;
  cursor: pointer;
`;
