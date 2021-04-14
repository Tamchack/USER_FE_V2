import styled from 'styled-components';

export const SignupPage = styled.div`
  display: flex;
  height: calc(100vh - 110px);
`;

export const SignupContent = styled.div`
  width: 750px;
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
