import { BsFillHandbagFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";

import { Logo } from "../../styles/logo";
import * as S from "./styles";

export const Store: React.FC = () => {
  return (
    <S.Container>
      <S.Navbar>
        <S.Row>
          <Logo>GIFTS.GG</Logo>
          <S.ActionsContainer>
            <S.BtnCart>
              <BsFillHandbagFill size={17} />
            </S.BtnCart>
            <S.BtnCart id="logout">
              <FaUserAlt size={17} />
            </S.BtnCart>
            <label htmlFor="logout">Log out</label>
          </S.ActionsContainer>
        </S.Row>
      </S.Navbar>
      <S.Banner>
        <section>
          <h2>GIFTS CARD</h2>
        </section>
      </S.Banner>
    </S.Container>
  );
};
