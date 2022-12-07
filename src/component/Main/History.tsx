import React from "react";

function History(props: any) {
  return (
    <div>
      {props.gameList.length > 0 &&
        props.gameList.map((item: any) => {
          let list = item.info.participants.find(
            (value: any) => value.summonerName === props.userName
          );
          return (
            <div className="history-item-box">
              <p className="-history-id">
                Game-ID : {item.info.gameEndTimestamp}
              </p>
              <div className="history-contents">
                <div className="history-user-box">
                  <img
                    src={`./champion/${list.championName}.png`}
                    className="history-user-img"
                    alt="champion"
                  />
                </div>
                <div className="history-user-kda">
                  {list.kills} / {list.deaths} / {list.assists}
                </div>
                <div className="history-user-other">
                  {item.info.participants.map((list: any) => {
                    return (
                      <div className="user-other-list">
                        <img
                          src={`./champion/${list.championName}.png`}
                          className="user-other-img"
                          alt="champion"
                        />
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
