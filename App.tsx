const queryParams = new URLSearchParams(window.location.search); //retorna os valores da url (após a interrogação)
const numero = queryParams.get("numero"); //retorna o valor da variável numero de jogadores
const nome = queryParams.get("nome"); //retorna o nome do jogador

const App = () => {

  return (
    <div>
      <h1>Bem vindo {nome}!</h1>
      <h1>Número de jogadores: {numero}</h1>
    </div>
  );
};

export default App;
