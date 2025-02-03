import React, { useState } from "react";

type Player = {
    id: number;
    nome: string;
};

function ListaJogadores() {
    const players: Player[] = [
        { id: 1, nome: "player1" },
        { id: 2, nome: "player2" },
        { id: 3, nome: "player3" },
        { id: 4, nome: "player4" },
    ];

    const [visivel, setVisivel] = useState(false);
    const [turnoAtual, setTurnoAtual] = useState(0);

    const alternar = () => {
        setVisivel(!visivel);
    };

    const avancarTurno = () => {
        setTurnoAtual((turnoAtual + 1) % players.length);
    };

    const getJogadorAtual = () => players[turnoAtual];

    return (
        <div style={{ position: "relative" }}>
            <button
                onClick={alternar}
                style={{
                    position: "fixed",
                    top: "10px",
                    left: "10px",
                    fontSize: "30px",
                    backgroundColor: "#007BFF",
                    color: "white",
                    border: "none",
                    borderRadius: "50%",
                    padding: "10px",
                    cursor: "pointer",
                    zIndex: 10,
                    transition: "left 0.3s ease",
                }}
            >
                ☰
            </button>

            {visivel && (
                <div
                    style={{
                        position: "fixed",
                        top: "0",
                        left: "0",
                        width: "250px",
                        height: "200px",
                        backgroundColor: "#f1f1f1",
                        boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)",
                        padding: "20px",
                        overflowY: "auto",
                        zIndex: 5,
                    }}
                >
                    <h1 style={{ textAlign: "center" }}>Lista de Jogadores</h1>
                    <ul style={{ listStyle: "none", padding: 0 }}>
                        {players.map((player, index) => (
                            <li key={player.id} style={{ display: "flex", alignItems: "center" }}>
                                {index === turnoAtual && (
                                    <span
                                        style={{
                                            width: "15px",
                                            height: "15px",
                                            backgroundColor: "green",
                                            borderRadius: "50%",
                                            marginRight: "10px",
                                        }}
                                    />
                                )}
                                {player.nome}
                            </li>
                        ))}
                    </ul>
                    <button
                        onClick={avancarTurno}
                        style={{
                            position: "absolute",
                            bottom: "10px",
                            left: "50%",
                            transform: "translateX(-50%)",
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
            )}
        </div>
    );
}

export default ListaJogadores;
