import styled from "styled-components";
import bannerHomeImg from "../assets/bannaer-login.png";

export const Container = styled.div`
  width: 100%;
  display: flex;
`;

export const HomeBannerImg = styled.div`
  flex: 1;
  background: url(${bannerHomeImg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const LoginBanner = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 900px) {
    margin-top: 200px;
    padding: 0 30px;
  }
`;

export const LoginForm = styled.form`
  max-width: 400px;
  width: 100%;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 30px;
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-family: "Inter", sans-serif;
`;

export const SubTitle = styled.h2`
  font-size: 19px;
  font-weight: lighter;
  color: ${({ theme }) => theme.COLORS.BLACK};
  margin-bottom: 40px;
  font-family: "Inter", sans-serif;
`;

export const InputGroup = styled.div`
  margin-top: 20px;
  text-align: left;

  p {
    font-size: 17px;
    font-weight: bold;
    margin: 0;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.COLORS.BLACK};
  }
`;

export const Input = styled.div`
  display: flex;
  background: ${({ theme }) => theme.COLORS.BLUE};
  border-radius: 3px;
  max-width: 400px;
  padding: 15px 0;

  svg {
    color: ${({ theme }) => theme.COLORS.WHITE};
    margin-right: 10px;
    margin-left: 30px;
  }

  input {
    border: none;
    background: transparent;
    outline: none;
    width: 100%;
    margin-top: 2px;
    margin-right: 15px;
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`;

export const Submit = styled.button`
  color: ${({ theme }) => theme.COLORS.WHITE};
  background: ${({ theme }) => theme.COLORS.PINK};
  border: none;
  outline: none;
  width: 100%;
  padding: 13px 0;
  text-align: center;
  border-radius: 3px;
  font-size: 18px;
  cursor: pointer;
  margin-top: 25px;
  transition: all 0.3s ease;

  &:hover {
    transition: all 0.3s ease;
    background: ${({ theme }) => theme.COLORS.DARK_PINK};
  }
`;

export const ForgetPassword = styled.p`
  font-size: 17px;
  font-weight: lighter;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BLACK};
  color: ${({ theme }) => theme.COLORS.BLACK};
  max-width: 270px;
  width: 100%;
  margin: 0 auto;
  margin-top: 20px;
  cursor: pointer;
`;
