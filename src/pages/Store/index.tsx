import { useEffect, useState, useContext } from "react";
import { BsFillHandbagFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { useAlert } from "react-alert";
import { useNavigate } from "react-router-dom";

import { Logo } from "../../styles/logo";
import * as S from "./styles";
import { ifood, playstation, tinder, xbox } from "../../assets";
import Card from "../../components/Card";
import api from "../../services/api";
import { Product } from "../../context/user/types";
import { UserContext } from "../../context/user/user";

type ImageCard = "tinder" | "xbox" | "ifood" | "playstation";

export const Store: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const { changeUserData } = useContext(UserContext);
  const navigate = useNavigate();
  const alert = useAlert();

  useEffect(() => {
    async function authUser(): Promise<void> {
      const token = localStorage.getItem("token");
      
      if (!token) {
        return navigate("/");
      }

      try {
        // Set Token
        api.defaults.headers.common["authorization"] = JSON.parse(token);

        // Load User
        const { data } = await api.get("/user");

        changeUserData(data.user);
      } catch (error) {        
        return navigate("/");
      }
    }

    async function loadProducts(): Promise<void> {
      try {
        const { data } = await api.get("/products");

        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    }

    authUser();
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

  function logout(): void {
    changeUserData({
      id: 0,
      email: "",
      Transaction: [],
    });
    localStorage.removeItem("token");
    navigate("/");
    alert.success("Usuário deslogado");
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
            <S.BtnCart id="logout" onClick={() => logout()}>
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
      <S.Spacing>
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
      </S.Spacing>
    </S.Container>
  );
};
