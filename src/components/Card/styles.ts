import styled from "styled-components";

export const Card = styled.div`
  width: 100%;

  img {
    width: 100%;
    height: 150px;
    border-radius: 5px;
  }

  h2 {
    font-size: 18px;
    font-weight: normal;
    color: ${({ theme }) => theme.COLORS.BLACK};
    margin-top: 25px;
  }

  p {
    font-size: 19px;
    color: ${({ theme }) => theme.COLORS.PINK};
    font-weight: bold;
    letter-spacing: 1px;
    margin-top: 30px;
    margin-bottom: 0;
  }

  small {
    color: ${({ theme }) => theme.COLORS.GREY};
    font-size: 12px;
    margin-top: 5px;
    letter-spacing: 0.5px;
  }

  button {
    margin-top: 20px;
    background: ${({ theme }) => theme.COLORS.BLUE};
    border: none;
    border-radius: 5px;
    text-align: center;
    width: 100%;
    height: 45px;
    font-size: 14px;
    text-transform: uppercase;
    cursor: pointer;
    color: ${({ theme }) => theme.COLORS.WHITE};
    letter-spacing: 0.5px;
    transition: all 0.3s ease;

    &:hover {
      transition: all 0.3s ease;
      background: ${({ theme }) => theme.COLORS.DARK_BLUE};
    }
  }
`;
