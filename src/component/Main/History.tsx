import React from "react";

function History(gameList: any) {
  return (
    <div>
      {gameList.gameList.length > 0 &&
        gameList.gameList.map((item: any) => {
          return (
            <div className="history-item-box">
              <p className="-history-id">
                Game-ID : {item.info.gameEndTimestamp}
              </p>
              <div className="history-contents">
                <div
                  className="history-user-box"
                  onClick={() => {
                    console.log("게임리스트", gameList.gameList);
                  }}
                >
                  ss
                </div>
                <div className="history-user-kda">ss</div>
                <div className="history-user-other">
                  {item.info.participants.map((list: any) => {
                    return (
                      <div className="user-other-list">
                        <p className="user-other-img"></p>
                        <p className="user-other-item">{list.summonerName}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default History;
