import React, { useState } from "react";

type Player = {
  id: number;
  nome: string;
  cartas: number; // Número de cartas do jogador (valor aleatório hardcoded)
};

function JogadorAtt() {
  const players: Player[] = [
    { id: 1, nome: "player1", cartas: Math.floor(Math.random() * 10) + 1 },
    { id: 2, nome: "player2", cartas: Math.floor(Math.random() * 10) + 1 },
    { id: 3, nome: "player3", cartas: Math.floor(Math.random() * 10) + 1 },
    { id: 4, nome: "player4", cartas: Math.floor(Math.random() * 10) + 1 },
  ];
  const [turnoAtual, setTurnoAtual] = useState(0); // O índice do jogador atual

  
  const getJogadorAtual = () => players[turnoAtual];
  const getJogadorAnterior = () =>
    players[(turnoAtual - 1 + players.length) % players.length];//evita resultados negativos e garante que quando o turno for igual a players.len, o indice volta pra 0, player 1
  const getJogadorProximo = () =>
    players[(turnoAtual + 1) % players.length];

  
  const avancarTurno = () => {
    setTurnoAtual((turnoAtual + 1) % players.length);
  };

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "80%",
          padding: "10px",
          position: "absolute",
          top: "10px",
        }}
      >
        {/*jogador anterior */}
        <div
          style={{
            textAlign: "center",
            width: "25%",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            fontSize: "14px",
          }}
        >
          <h2>{getJogadorAnterior().nome}</h2>
          <p>{getJogadorAnterior().cartas} Cartas</p>
        </div>

        {/*player 1*/}
        <div
          style={{
            textAlign: "center",
            width: "25%",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            fontSize: "14px",
            backgroundColor: getJogadorAtual().nome === "player1" ? "green" : "white",
            color: getJogadorAtual().nome === "player1" ? "white" : "black",
          }}
        >
          <h2>{getJogadorAtual().nome}</h2>
          <p>{getJogadorAtual().cartas} Cartas</p>
          {getJogadorAtual().nome === "player1" && <div style={{ color: "white", fontWeight: "bold" }}>SEU TURNO!</div>}
        </div>

        {/*proximo jogador*/}
        <div
          style={{
            textAlign: "center",
            width: "25%",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            fontSize: "14px",
          }}
        >
          <h2>{getJogadorProximo().nome}</h2>
          <p>{getJogadorProximo().cartas} Cartas</p>
        </div>
      </div>

      <button
        onClick={avancarTurno}
        style={{
          position: "fixed",
          bottom: "20px",
          backgroundColor: "#007BFF",
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Avançar Turno
      </button>
    </div>
  );
}

export default JogadorAtt;
