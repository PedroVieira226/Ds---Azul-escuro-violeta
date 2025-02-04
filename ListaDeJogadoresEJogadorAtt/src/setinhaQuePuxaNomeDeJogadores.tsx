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

    return (
        <div>
            <button
                onClick={alternar}
                style={{
                    position: "fixed",
                    bottom: "20px",
                    left: "20px",
                    fontSize: "30px",
                    backgroundColor: "#007BFF",
                    color: "white",
                    border: "none",
                    borderRadius: "50%",
                    padding: "10px",
                    cursor: "pointer",
                    zIndex: 10,
                }}
            >
                ☰
            </button>

            {visivel && (
                <div
                    style={{
                        position: "fixed",
                        bottom: "70px",
                        left: "20px",
                        width: "250px",
                        backgroundColor: "#f1f1f1",
                        boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)",
                        padding: "20px",
                        overflowY: "auto",
                        zIndex: 5,
                        borderRadius: "10px",
                    }}
                >
                    <h1 style={{ textAlign: "center", fontSize: "16px" }}>Lista de Jogadores</h1>
                    <ul style={{ listStyle: "none", padding: 0 }}>
                        {players.map((player, index) => (
                            <li key={player.id} style={{ display: "flex", alignItems: "center", marginBottom: "5px" }}>
                                {index === turnoAtual && (
                                    <span
                                        style={{
                                            width: "10px",
                                            height: "10px",
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
                            width: "100%",
                            backgroundColor: "#007BFF",
                            color: "white",
                            border: "none",
                            padding: "10px",
                            borderRadius: "5px",
                            cursor: "pointer",
                            marginTop: "10px",
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