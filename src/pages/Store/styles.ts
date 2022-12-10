import styled from "styled-components";

import banner from "../../assets/banner-store.png";

export const Container = styled.div`
  width: 100%;
`;

export const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 30px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
`;

export const ActionsContainer = styled.div`
  display: flex;

  label {
    font-size: 15px;
    font-weight: bold;
    color: ${({ theme }) => theme.COLORS.BLACK};
    margin-top: 8px;
    margin-left: 10px;
    cursor: pointer;
  }
`;

export const BtnCart = styled.button`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: none;
  outline: none;
  background-color: ${({ theme }) => theme.COLORS.BLUE};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-left: 15px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transition: all 0.3s ease;
    background: ${({ theme }) => theme.COLORS.DARK_BLUE};
  }

  svg {
    color: ${({ theme }) => theme.COLORS.WHITE};
    margin-top: -3px;
  }
`;

export const Banner = styled.div`
  background: url(${banner});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 350px;

  section {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: ${({ theme }) => theme.COLORS.BLACK_OPACITY};
    width: 100%;
    height: 100%;
  }

  h2 {
    font-size: 60px;
    font-weight: bold;
    color: ${({ theme }) => theme.COLORS.WHITE};
    cursor: pointer;
    padding: 0 30px;
  }
`;

export const GridCards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 50px;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  padding: 60px 30px;
`;
