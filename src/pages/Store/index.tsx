import { BsFillHandbagFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";

import { Logo } from "../../styles/logo";
import * as S from "./styles";
import { ifood, playstation, tinder, xbox } from "../../assets";

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
      <S.GridCards>
        <S.Card>
          <img src={tinder} alt="tinder" />
          <h2>Gift Card Tinder: 10 Reais - Código Digital</h2>
          <p>R$9,99</p>
          <small>À vista no PIX</small>
          <button type="button">comprar</button>
        </S.Card>
        <S.Card>
          <img src={xbox} alt="xbox" />
          <h2>Gift Card Xbox: 200 Reais - Código Digital</h2>
          <p>R$199,99</p>
          <small>À vista no PIX</small>
          <button type="button">comprar</button>
        </S.Card>
        <S.Card>
          <img src={ifood} alt="ifood" />
          <h2>Gift Card Ifood: 50 Reais - Código Digital</h2>
          <p>R$49,99</p>
          <small>À vista no PIX</small>
          <button type="button">comprar</button>
        </S.Card>
        <S.Card>
          <img src={playstation} alt="playstation" />
          <h2>Gift Card Playstation: 150 Reais - Código Digital</h2>
          <p>R$149,99</p>
          <small>À vista no PIX</small>
          <button type="button">comprar</button>
        </S.Card>
      </S.GridCards>
    </S.Container>
  );
};
