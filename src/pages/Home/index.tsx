import { FormEvent, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import validator from "validator";

import { Logo } from "../../styles/logo";
import * as S from "./styles";
import api from "../../services/api";
import { UserContext } from "../../context/user/user";

export function Home(): JSX.Element {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const alert = useAlert();
  const { changeUserData } = useContext(UserContext);
  const navigate = useNavigate();

  const login = async (e: FormEvent) => {
    e.preventDefault();

    // Validate email
    if (!email.trim()) {
      return alert.error("Campo email vazio");
    }

    if (!validator.isEmail(email)) {
      return alert.error("Email inválido");
    }

    // Validate Password
    if (!password.trim()) {
      return alert.error("Campo senha vazio");
    }

    try {
      const { data } = await api.post("/user/login", {
        email,
        password,
      });

      const { user, token } = data;

      localStorage.setItem("token", JSON.stringify(`Bearer ${token}`));

      changeUserData(user);

      alert.success("Usuário logado");

      navigate("/loja");
    } catch (error) {      
      alert.error("Usuário ou senha incorretos")
    }
  };

  return (
    <S.Container>
      <S.HomeBannerImg></S.HomeBannerImg>
      <S.LoginBanner>
        <S.LoginForm onSubmit={(e) => login(e)}>
          <Logo>GIFTS.GG</Logo>
          <S.SubTitle>Faça login e comece a usar!</S.SubTitle>
          <S.InputGroup>
            <p>Endereço de e-mail</p>
            <S.Input>
              <AiOutlineMail size={25} />
              <input
                type="text"
                placeholder="Ex: guilherme@gmail.com"
                onChange={(e) => {
                  setEmail(e.currentTarget.value);
                }}
              />
            </S.Input>
          </S.InputGroup>
          <S.InputGroup>
            <p>Sua senha</p>
            <S.Input>
              <AiOutlineLock size={25} />
              <input
                type="password"
                placeholder="Ex: guilherme123"
                onChange={(e) => {
                  setPassword(e.currentTarget.value);
                }}
              />
            </S.Input>
            <S.Submit type="submit">Entrar na plataforma</S.Submit>
          </S.InputGroup>
          <S.ForgetPassword>Não possui conta? Crie uma agora!</S.ForgetPassword>
        </S.LoginForm>
      </S.LoginBanner>
    </S.Container>
  );
}
