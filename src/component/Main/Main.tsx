import React, { useState } from "react";
import {
  apiKey,
  apiUrl,
  gameCondition,
  ImgApiUrl,
  matchApiUrl,
} from "../../common/apiKey";
import { getSearchHeader, getDefault } from "../../api/header";
import {
  typeInputEvent,
  UserInfo,
  UserInfoEarly,
  UserTier,
  shiftEarly,
  Shift,
  GameList,
} from "../../common/type";
import { BsFillSunFill } from "react-icons/bs";
import DropMenu from "./DropMenu";
import History from "./History";
import "./Main.css";

function Main(): React.ReactElement {
  // ! tag state
  const [shift, setShift] = React.useState<Shift>(shiftEarly);
  const [nickName, setNickName] = React.useState<string>("");
  const [hoverLcation, setHoverLocation] = React.useState();
  // 적용 대기 - const [loding, setLoding] = React.useState<any>(null);

  // ! userInfo state
  const [userIcon, setUserIcon] = React.useState<string>("");
  const [userInfo, setUserInfo] = React.useState<UserInfo>(UserInfoEarly);
  const [userTier, setUserTier] = React.useState<UserTier[]>([]);

  // ! gameList state
  const [gameList, setGameList] = React.useState<GameList[]>([]);

  const handleChangeShift = () => {
    shift.btn === "Day-shift-btn"
      ? setShift({
          ...shift,
          body: "body-wrap-night",
          btn: "night-shift-btn",
        })
      : setShift({
          ...shift,
          body: "body-wrap-day",
          btn: "Day-shift-btn",
        });
  };

  const inputNickName = (event: typeInputEvent) => {
    setNickName(event.currentTarget.value);
  };

  const onSearch = () => {
    gameList.length > 9 && setGameList([]);
    fetch(
      `${apiUrl}/lol/summoner/v4/summoners/by-name/${nickName}?api_key=${apiKey}`,
      getSearchHeader
    )
      .then((response) => response.json())
      .then((result) => {
        setUserInfo(result);

        fetch(
          `${ImgApiUrl}/cdn/12.22.1/img/profileicon/${result.profileIconId}.png`,
          getDefault
        ).then((result) => {
          setUserIcon(result.url);
        });

        fetch(
          `${apiUrl}/lol/league/v4/entries/by-summoner/${result.id}?api_key=${apiKey}`,
          getDefault
        )
          .then((response) => response.json())
          .then((result) => {
            setUserTier(result);
          });

        fetch(
          `${matchApiUrl}/lol/match/v5/matches/by-puuid/${result.puuid}/${gameCondition}&api_key=${apiKey}`,
          getDefault
        )
          .then((response) => response.json())
          .then((result) => {
            result.forEach((item: string) => {
              fetch(
                `${matchApiUrl}/lol/match/v5/matches/${item}?api_key=${apiKey}`,
                getDefault
              )
                .then((response) => response.json())
                .then((result) => {
                  setGameList((gameList: GameList[]) => [...gameList, result]);
                });
            });
          });
      });
  };

  return (
    <div className={shift.body}>
      <div className="nav-wrap">
        <img className="nav-title" src="./logo_2.png" alt="상단 로고" />
        <div className="nav-menu-box">
          <BsFillSunFill className={shift.btn} onClick={handleChangeShift} />
          <DropMenu />
        </div>
      </div>
      <div className="contents-wrap">
        <img src="logo_3.png" className="contents-logo" alt="메인 로고" />
        <div className="contents-search-box">
          <input
            type="text"
            onChange={inputNickName}
            placeholder="소환사명을 입력해주세요."
          />
          <button onClick={onSearch}>확인</button>
        </div>
        {userIcon && userTier ? (
          <>
            <div className="user-info-box">
              <img className="user-icon" src={userIcon} alt="아이콘" />
              <div className="user-info-list">
                <strong className="user-nickname">{userInfo.name}</strong>
                <p className="user-level">LV : {userInfo.summonerLevel}</p>
                {userTier.length > 0 ? (
                  <>
                    <div className="user-tier-box">
                      <p className="user-tier">{userTier[0].tier}</p>
                      <p className="user-rank">{userTier[0].rank}</p>
                    </div>
                    <p className="user-wins">Wins : {userTier[0].wins}Game</p>
                  </>
                ) : (
                  <p className="user-tier">No-Rank</p>
                )}
              </div>
            </div>
            <History
              gameList={gameList}
              userName={userInfo.name}
              hoverLcation={hoverLcation}
              setHoverLocation={setHoverLocation}
            ></History>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Main;
