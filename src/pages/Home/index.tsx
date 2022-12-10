import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";

import * as S from "./styles";

function Home(): JSX.Element {
  return (
    <S.Container>
      <S.HomeBannerImg></S.HomeBannerImg>
      <S.LoginBanner>
        <S.LoginForm>
          <S.Title>GIFTS.GG</S.Title>
          <S.SubTitle>Faça login e comece a usar!</S.SubTitle>
          <S.InputGroup>
            <p>Endereço de e-mail</p>
            <S.Input>
              <AiOutlineMail size={25} />
              <input type="text" placeholder="Ex: guilherme@gmail.com" />
            </S.Input>
          </S.InputGroup>
          <S.InputGroup>
            <p>Sua senha</p>
            <S.Input>
              <AiOutlineLock size={25} />
              <input type="password" placeholder="Ex: guilherme123" />
            </S.Input>
            <S.Submit type="submit">Entrar na plataforma</S.Submit>
          </S.InputGroup>
          <S.ForgetPassword>Não possui conta? Crie uma agora!</S.ForgetPassword>
        </S.LoginForm>
      </S.LoginBanner>
    </S.Container>
  );
}

export default Home;
