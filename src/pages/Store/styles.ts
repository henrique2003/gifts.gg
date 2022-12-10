import styled from "styled-components";

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

export const Logo = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-family: "Inter", sans-serif;
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

  svg {
    color: ${({ theme }) => theme.COLORS.WHITE};
    margin-top: -3px;
    margin-right: -1px;
  }
`;
