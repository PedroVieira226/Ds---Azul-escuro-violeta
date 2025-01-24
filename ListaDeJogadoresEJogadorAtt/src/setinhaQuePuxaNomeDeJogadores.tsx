import React, { useState } from "react";

type Player = {
    id: number;
    nome: string;
};//tipo temporario ate a implementação da classe player original

function ListaJogadores(){
    const players: Player[] = [
        {id: 1, nome: "player1"},
        {id: 2, nome: "player2"},
        {id: 3, nome: "player3"},
        {id: 4, nome: "player4"},
    ];
    const [visivel, setVisivel] = useState(false);

    const alternar = () => {
        setVisivel(!visivel);
    }
        
    return (
        <div style={{ position: "relative" }}>
        
          <button
            onClick={alternar}
            style={{
              position: "fixed",
              top: "50%",
              left: visivel ? "320px" : "10px", //ajusta a posição dependendo se foi clicado
              transform: "translateY(-50%)",
              fontSize: "30px",
              backgroundColor: "#007BFF",
              color: "white",
              border: "none",
              borderRadius: "50%",
              padding: "10px",
              cursor: "pointer",
              zIndex: 10,
              transition: "right 0.3s ease", 
            }}
          >
            {visivel ? "←" : "→"}
          </button>
    
          
          <div
            style={{
              position: "fixed",
              top: "0",
              left: visivel ? "0" : "-300px", //desliza o painel
              width: "300px",
              height: "100%",
              backgroundColor: "#f1f1f1",
              boxShadow: "-2px 0 5px rgba(0, 0, 0, 0.1)",
              padding: "20px",
              overflowY: "auto",
              transition: "right 0.3s ease", 
              zIndex: 5,
            }}
          >
            <h1>Lista de Jogadores</h1>
            <ul>
              {players.map((player) => (
                <li key={player.id}>
                    {"->"}
                    {player.nome}</li>//setinha temporaria ate implementar a logica de turno
              ))}
            </ul>
          </div>
        </div>
      );
    };


export default ListaJogadores;