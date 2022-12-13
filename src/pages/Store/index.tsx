import { useEffect, useState } from "react";
import { BsFillHandbagFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";

import { Logo } from "../../styles/logo";
import * as S from "./styles";
import { ifood, playstation, tinder, xbox } from "../../assets";
import Card from "../../components/Card";
import api from "../../services/api";
import { Product } from "../../context/user/types";

type ImageCard = "tinder" | "xbox" | "ifood" | "playstation";

export const Store: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function loadProducts(): Promise<void> {
      try {
        const { data } = await api.get("/products");

        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    }

    loadProducts();
  }, []);

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
        {products.length > 0 &&
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
