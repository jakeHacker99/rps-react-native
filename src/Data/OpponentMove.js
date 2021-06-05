const changeOpponentMove = (opponentMove, opponentToken) => {
  const url = `http://192.168.1.202:8080/games/move/${opponentMove}`;

  fetch(url, {
    method: "GET",
    Accept: "application/json",

    headers: {
      token: opponentToken,
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      res.text();
      console.log("opponentMove: ", opponentMove);
      console.log(res);
    })

    .catch((error) => console.error(error));
};

export default changeOpponentMove;
