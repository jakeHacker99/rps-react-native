const joinGame = (opponentToken, gameId) => {
  const url = `http://192.168.1.202:8080/games/join/${gameId}`;
  fetch(url, {
    method: "GET",
    Accept: "application/json",
    headers: {
      token: opponentToken,
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
    })

    .catch((error) => console.error(error));
};

export default joinGame;
