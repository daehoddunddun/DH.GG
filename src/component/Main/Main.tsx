import React, { useEffect } from "react";
import { BsFillSunFill } from "react-icons/bs";
import { typeShift, typeInputEvent } from "../../common/type";
import DropMenu from "./DropMenu";
import History from "./History";
import "./Main.css";

function Main() {
  const [nickName, setNickName] = React.useState<string>("");
  const [userInfo, setUserInfo] = React.useState<any>({});
  const [userIcon, setUserIcon] = React.useState<string>("");
  const [shift, setShift] = React.useState<typeShift>({
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
    console.log(nickName);
  };

  const onSearch = () => {
    fetch(
      `https://kr.api.riotgames.com/tft/summoner/v1/summoners/by-name/${nickName}?api_key=RGAPI-f3d7dadd-474e-44bc-ad70-6a8abff2d2ee`,
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
        {userIcon ? (
          <>
            <div className="user-info-box">
              <img className="user-icon" src={userIcon} alt="아이콘" />
              <div className="user-info-list">
                <strong className="user-nickname">{userInfo.name}</strong>
                <p className="user-level">LV : {userInfo.summonerLevel}</p>
              </div>
            </div>
            <History></History>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Main;
