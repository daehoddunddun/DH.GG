import React from "react";
import ItemModal from "../Modal/ItemModal";
import { PropsGameList, GameList } from "../../common/type";

function History(props: PropsGameList): React.ReactElement {
  const test = (event: any) => {
    props.setHoverLocation({ x: event.pageX, y: event.pageY });
    console.log(props.hoverLcation);
  };

  return (
    <div>
      {props.gameList.length > 0 &&
        props.gameList.map((item: GameList) => {
          let list = item.info.participants.find(
            (value: any) => value.summonerName === props.userName
          );
          return (
            <div
              className="history-item-box"
              id={list.win ? "wins-team" : "lose-team"}
              key={item.info.gameEndTimestamp}
            >
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
                <div className="history-user-info">
                  <p className="history-user-kda">
                    {list.kills} / <span>{list.deaths}</span> / {list.assists}
                  </p>
                  <p className="history-count-kda">
                    {((list.kills + list.assists) / list.deaths).toFixed(2)}
                    :1
                  </p>
                  <div className="history-uesr-item">
                    <img
                      src={`./item/${list.item0}.png`}
                      alt="item"
                      onMouseOver={test}
                    />
                    <img
                      src={`./item/${list.item1}.png`}
                      alt="item"
                      onMouseOver={test}
                    />
                    <img
                      src={`./item/${list.item2}.png`}
                      alt="item"
                      onMouseOver={test}
                    />
                    <img
                      src={`./item/${list.item3}.png`}
                      alt="item"
                      onMouseOver={test}
                    />
                    <img
                      src={`./item/${list.item4}.png`}
                      alt="item"
                      onMouseOver={test}
                    />
                    <img
                      src={`./item/${list.item5}.png`}
                      alt="item"
                      onMouseOver={test}
                    />
                  </div>
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
