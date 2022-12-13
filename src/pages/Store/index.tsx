import { BsFillHandbagFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";

import { Logo } from "../../styles/logo";
import * as S from "./styles";
import { ifood, playstation, tinder, xbox } from "../../assets";
import Card from "../../components/Card";

const products = [
  {
    id: "9af44b84-27d1-4e29-8f77-d41c8c963cc5",
    title: "Gift Card Tinder: 100 Reais - Código Digital",
    cost: 9.99,
    type: "tinder",
  },
  {
    id: "110bcd3d-9592-4e64-bac8-f244a830b05a",
    title: "Gift Card Xbox: 200 Reais - Código Digital",
    cost: 199.99,
    type: "xbox",
  },
  {
    id: "1s10bcd3d-9592-4e64-bac8-f244a830b05a",
    title: "Gift Card Ifood: 50 Reais - Código Digital",
    cost: 49.99,
    type: "ifood",
  },
  {
    id: "11s0bcd3d-9592-4e64-bac8-f244a830b05a",
    title: "Gift Card Playstation: 150 Reais - Código Digital",
    cost: 149.99,
    type: "playstation",
  },
];

type ImageCard = "tinder" | "xbox" | "ifood" | "playstation";

export const Store: React.FC = () => {
  function load_image(type: ImageCard): string {
    if (type === "tinder") {
      return tinder;
    } else if (type === "xbox") {
      return xbox;
    } else if (type === "ifood") {
      return ifood;
    } else {
      return playstation;
    }
  }

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
        {products &&
          products.map(({ id, cost, title, type }) => (
            <Card
              id={id}
              cost={cost}
              title={title}
              key={id}
              img={load_image(type as ImageCard)}
            />
          ))}
      </S.GridCards>
    </S.Container>
  );
};
