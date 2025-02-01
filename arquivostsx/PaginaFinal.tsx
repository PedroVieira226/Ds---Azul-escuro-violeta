import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PaginaFinal.css";
import goldMedal from './assets/gold-medal.png';
import silverMedal from './assets/silver-medal.png';
import bronzeMedal from './assets/bronze-medal.png';

interface Jogador {
  nome: string;
  cartasRestantes: number;
}

const PaginaFinal = () => {
  const navigate = useNavigate();

  const [jogadores] = useState<Jogador[]>([
    { nome: "Jogador 1", cartasRestantes: 5 },
    { nome: "Jogador 2", cartasRestantes: 2 },
    { nome: "Jogador 3", cartasRestantes: 7 },
    { nome: "Jogador 4", cartasRestantes: 8 },
    { nome: "Jogador 5", cartasRestantes: 9 },
    { nome: "Jogador 6", cartasRestantes: 10 },
  ]);

  const reiniciarJogo = () => {
    navigate("/");
  };

  return (
    <div className="pagina-final">
      <h1 className="titulo">Resultados</h1>

      <div className="container">
        <ul className="lista-resultados">
          {jogadores.map((jogador, index) => {
            let corPosicao = "";
            if (index === 0) corPosicao = "dourado";
            else if (index === 1) corPosicao = "prata";
            else if (index === 2) corPosicao = "bronze";

            return (
              <li key={index} className="item-lista">
                <span className={`posicao ${corPosicao}`}>
                  {index + 1}º {/* Colocação numérica */}
                  {index === 0 && <img src={goldMedal} alt="Medalha de ouro" className="medalha" />}
                  {index === 1 && <img src={silverMedal} alt="Medalha de prata" className="medalha" />}
                  {index === 2 && <img src={bronzeMedal} alt="Medalha de bronze" className="medalha" />}
                </span>
                <span className="nome-jogador">{jogador.nome}</span>
                <span className="cartas-restantes">
                  {jogador.cartasRestantes} carta{jogador.cartasRestantes !== 1 && 's'} restante{jogador.cartasRestantes !== 1 && 's'}
                </span>
              </li>
            );
          })}
        </ul>

        <button onClick={reiniciarJogo} className="botao-reiniciar">
          Jogar Novamente
        </button>
      </div>
    </div>
  );
};

export default PaginaFinal;