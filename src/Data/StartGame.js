const startGame = (token, setGameId, gameId) => {
  const url = "http://192.168.1.202:8080/games/start";

  fetch(url, {
    method: "GET",
    Accept: "application/json",

    headers: {
      token: token,
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      let gameId = JSON.parse(JSON.stringify(res.id));

      setGameId(gameId);
      console.log(res);
    })

    .catch((error) => console.error(error), []);
};
export default startGame;
