import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Para navegação no React Router
import "./Home.css"; // Importa os estilos externos

const Home = () => {
  const [numero, setNumero] = useState<number>(2);
  const [nome, setNome] = useState<string>("");
  const navigate = useNavigate(); 


  const diminuirQuantJogador = () => {
    if (numero > 2) setNumero(numero - 1);
  };

 
  const aumentarQuantJogador = () => {
    if (numero < 4) setNumero(numero + 1);
  };

 
  const mudarPagina = () => {
    navigate(`/paginafinal?numero=${encodeURIComponent(numero)}&nome=${encodeURIComponent(nome)}`);
  };

  return (
    <div className="home-container">
      <h1 className="titulo">UNO</h1>

      <div className="container">
        {/* Input do nome do jogador */}
        <input
          id="nomeJogador"
          className="nomeJogador"
          type="text"
          placeholder="Digite seu nome..."
          value={nome}
          onChange={(e) => setNome(e.target.value)} 
        />

        {/* Seletor do número de jogadores */}
        <div className="quantJogadores">
          <h1 className="textoNumeroJ">Escolha o número de jogadores:</h1>
          <div>
            <button onClick={diminuirQuantJogador} className="button1">&lt;</button>
            <button className="button2">{numero}</button>
            <button onClick={aumentarQuantJogador} className="button1">&gt;</button>
          </div>
        </div>

        {/* Botão para iniciar o jogo */}
        <div>
          <button className="play" onClick={mudarPagina}>Play</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
