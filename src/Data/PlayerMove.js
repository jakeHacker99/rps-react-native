const changePlayermove = (playerMove, token, setPlayerMove) => {
  const url = `http://192.168.1.202:8080/games/move/${playerMove}`;

  fetch(url, {
    method: "GET",
    Accept: "application/json",

    headers: {
      token: token,
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      res.text();
      setPlayerMove(playerMove);
      console.log("playermove: ", playerMove);
      console.log(res);
    })

    .catch((error) => console.error(error));
};

export default changePlayermove;
