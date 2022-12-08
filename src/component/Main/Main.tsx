import React, { useEffect } from "react";
import { BsFillSunFill } from "react-icons/bs";
import { typeInputEvent, userInfoType } from "../../common/type";
import DropMenu from "./DropMenu";
import History from "./History";
import "./Main.css";

function Main() {
  const apiUrl: string = "https://kr.api.riotgames.com";
  const apiKey: string = "RGAPI-a4e67f5f-8211-47cc-ab6f-7f5f3ad35a30";
  const gameCondition: string = "ids?type=normal&start=0&count=10";

  const [nickName, setNickName] = React.useState<string>("");
  const [userInfo, setUserInfo] = React.useState<userInfoType>({
    accountId: "",
    id: "",
    name: "",
    profileIconId: 0,
    puuid: "",
    summonerLevel: 0,
  });
  const [userIcon, setUserIcon] = React.useState<string>("");
  const [userTier, setUserTier] = React.useState<any>([]);
  const [gameList, setGameList] = React.useState<any>([]);
  const [champImg, setChampImg] = React.useState<any>([]);
  const [shift, setShift] = React.useState<{ [key: string]: string }>({
    body: "body-wrap-day",
    btn: "Day-shift-btn",
  });

  const isShift = () => {
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
    gameList.length > 9 && setGameList("");
    fetch(
      `${apiUrl}/lol/summoner/v4/summoners/by-name/${nickName}?api_key=${apiKey}`,
      {
        method: "GET",
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36",
          "Accept-Language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
          "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
          Origin: "https://developer.riotgames.com",
          Authorization: "",
        },
      }
    )
      .then((response) => response.json())
      .then((result) => {
        setUserInfo(result);
        console.log(result);

        fetch(
          `http://ddragon.leagueoflegends.com/cdn/12.22.1/img/profileicon/${result.profileIconId}.png`,
          {
            method: "GET",
            headers: {
              Accept: "*/*",
            },
          }
        ).then((result) => {
          setUserIcon(result.url);
        });

        fetch(
          `${apiUrl}/lol/league/v4/entries/by-summoner/${result.id}?api_key=${apiKey}`,
          {
            method: "GET",
            headers: {
              Accept: "*/*",
            },
          }
        )
          .then((response) => response.json())
          .then((result) => {
            setUserTier(result);
          });

        fetch(
          `https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/${result.puuid}/${gameCondition}&api_key=${apiKey}`,
          {
            method: "GET",
            headers: {
              Accept: "*/*",
            },
          }
        )
          .then((response) => response.json())
          .then((result) => {
            console.log("최근전적 code", result);
            result.forEach((item: any, i: number) => {
              fetch(
                `https://asia.api.riotgames.com/lol/match/v5/matches/${item}?api_key=${apiKey}`,
                {
                  method: "GET",
                  headers: {
                    Accept: "*/*",
                  },
                }
              )
                .then((response) => response.json())
                .then((result) => {
                  setGameList((gameList: any) => [...gameList, result]);
                });
            });
          });
      });
  };

  return (
    <div className={shift.body}>
      <div className="nav-wrap">
        <img className="nav-title" src="./logo_2.png" alt="로고" />
        <div className="nav-menu-box">
          <BsFillSunFill className={shift.btn} onClick={isShift} />
          <DropMenu />
        </div>
      </div>
      <div className="contents-wrap">
        <img src="logo_3.png" className="contents-logo" alt="로고" />
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
            <History gameList={gameList} userName={userInfo.name}></History>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Main;
