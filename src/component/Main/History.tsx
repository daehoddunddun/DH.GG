import React from "react";

function History() {
  const test = () => {
    fetch(
      `https://asia.api.riotgames.com/lol/match/v5/matches/KR_6237262157?api_key=RGAPI-7f369172-3948-4754-a98e-21cf6e1e7c25`,
      {
        method: "GET",
        headers: {
          Accept: "*/*",
        },
      }
    ).then((result) => {
      console.log(result);
    });
  };

  return (
    <div>
      <h1 onClick={test}>눌러줘</h1>
    </div>
  );
}

export default History;
