import React, { useState } from "react";

type Player = {
  id: number;
  nome: string;
  cartas: number;
};

function JogadorAtt() {
  const players: Player[] = [
    { id: 1, nome: "player1", cartas: Math.floor(Math.random() * 10) + 1 },
    { id: 2, nome: "player2", cartas: Math.floor(Math.random() * 10) + 1 },
    { id: 3, nome: "player3", cartas: Math.floor(Math.random() * 10) + 1 },
    { id: 4, nome: "player4", cartas: Math.floor(Math.random() * 10) + 1 },
  ];
  const [turnoAtual, setTurnoAtual] = useState(0);

  const getJogadorAtual = () => players[turnoAtual];
  const getJogadorAnterior = () => players[(turnoAtual - 1 + players.length) % players.length];
  const getJogadorProximo = () => players[(turnoAtual + 1) % players.length];

  const avancarTurno = () => {
    setTurnoAtual((turnoAtual + 1) % players.length);
  };

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <div style={{ display: "flex", justifyContent: "space-between", width: "80%", padding: "10px", position: "absolute", top: "10px" }}>
        {/* Jogador Anterior */}
        <div style={{ textAlign: "center", width: "20%", padding: "8px", border: "1px solid #ccc", borderRadius: "8px", fontSize: "14px", backgroundColor: "white" }}>
          <h3>Jogador Anterior</h3>
          <h2>{getJogadorAnterior().nome}</h2>
          <p>{getJogadorAnterior().cartas}</p>
          <div style={{ width: "40px", height: "50px", backgroundColor: "gray", margin: "0 auto", borderRadius: "5px" }}></div>
        </div>

        {/* Jogador Atual */}
        <div style={{ textAlign: "center", width: "40%", padding: "15px", border: "2px solid #000", borderRadius: "8px", fontSize: "18px", backgroundColor: getJogadorAtual().nome === "player1" ? "green" : "white", color: getJogadorAtual().nome === "player1" ? "white" : "black" }}>
          <h3>Jogador Atual</h3>
          <h2>{getJogadorAtual().nome}</h2>
          <p>{getJogadorAtual().cartas}</p>
          <div style={{ width: "50px", height: "60px", backgroundColor: "gray", margin: "0 auto", borderRadius: "5px" }}></div>
          {getJogadorAtual().nome === "player1" && <div style={{ color: "white", fontWeight: "bold" }}>SEU TURNO!</div>}
        </div>

        {/* Próximo Jogador */}
        <div style={{ textAlign: "center", width: "20%", padding: "8px", border: "1px solid #ccc", borderRadius: "8px", fontSize: "14px", backgroundColor: "white" }}>
          <h3>Próximo Jogador</h3>
          <h2>{getJogadorProximo().nome}</h2>
          <p>{getJogadorProximo().cartas}</p>
          <div style={{ width: "40px", height: "50px", backgroundColor: "gray", margin: "0 auto", borderRadius: "5px" }}></div>
        </div>
      </div>

      <button
        onClick={avancarTurno}
        style={{ position: "fixed", bottom: "20px", backgroundColor: "#007BFF", color: "white", border: "none", padding: "10px 20px", borderRadius: "5px", cursor: "pointer" }}
      >
        Avançar Turno
      </button>
    </div>
  );
}

export default JogadorAtt;