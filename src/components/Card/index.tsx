import React from "react";

import * as S from "./styles";

interface Props {
  id: string;
  img: string;
  title: string;
  cost: number;
}

const Card: React.FC<Props> = ({ img, title, cost }) => {
  return (
    <S.Card>
      <img src={img} alt="ifood" />
      <h2>{title}</h2>
      <p>R${cost.toString().replace(".", ",")}</p>
      <small>À vista no PIX</small>
      <button type="button">comprar</button>
    </S.Card>
  );
};

export default Card;
