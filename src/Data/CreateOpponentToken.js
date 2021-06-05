const createOpponentToken = (setOpponentToken) => {
  const url = "http://192.168.1.202:8080/auth/token";

  fetch(url, {
    method: "GET",
    Accept: "application/json",

    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.text())
    .then((res) => {
      setOpponentToken(res);
      console.log("opp token: ", res);
    })

    .catch((error) => console.error(error));
};

export default createOpponentToken;
