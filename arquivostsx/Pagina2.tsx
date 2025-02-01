import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./Pagina2.css"

const Pagina2 = () => {
  const [searchParams] = useSearchParams();
  const numero = searchParams.get("numero");
  const nome = searchParams.get("nome");

  return (
    <div>
      <h1>Bem-vindo à Página 2!</h1>
      <p>Nome do jogador: {nome}</p>
      <p>Número de jogadores: {numero}</p>
    </div>
  );
};

export default Pagina2;
