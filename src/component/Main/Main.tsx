import React, { useEffect, useState } from "react";
import "./Main.css";
import History from "./History";
import { BsFillSunFill } from "react-icons/bs";

function Main() {
  const [nickName, setNickName] = useState<string>("");
  const [userInfo, setUserInfo] = useState<any>({});
  const [userIcon, setUserIcon] = useState<string>("");
  const [shift, setShift] = useState<any>({
    body: "box-wrap-day",
    btn: "Day-shift",
  });

  const isMode = () => {
    shift.btn === "Day-shift"
      ? setShift({
          ...shift,
          body: "box-wrap-night",
          btn: "night-shift",
        })
      : setShift({
          ...shift,
          body: "box-wrap-day",
          btn: "Day-shift",
        });
  };

  const inputNickName = (e: React.FormEvent<HTMLInputElement>) => {
    setNickName(e.currentTarget.value);
  };

  const onSearch = () => {
    fetch(
      `https://kr.api.riotgames.com/tft/summoner/v1/summoners/by-name/${nickName}?api_key=RGAPI-7f369172-3948-4754-a98e-21cf6e1e7c25`,
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
          console.log(result);
          setUserIcon(result.url);
        });
      });
  };

  console.log(userInfo);

  return (
    <div className={shift.body}>
      <div className="nav-wrap">
        <h1 className="nav-item-title">Restful Api 연동</h1>
        <div className="nav-menu-wrap">
          <BsFillSunFill className={shift.btn} onClick={isMode} />
          <div className="dropdown">
            <button
              className="btn btn-primary dropdown-toggle"
              type="button"
              data-toggle="dropdown"
            >
              Menu
            </button>
            <ul className="dropdown-menu">
              <li>
                <a href="#!">DropMenu1</a>
              </li>
              <li>
                <a href="#!">DropMenu2</a>
              </li>
              <li>
                <a href="#!">DropMenu3</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="body-wrap">
        <img src="react.png" className="body-logo" alt="로고" />
        <div className="search-box">
          <input
            type="text"
            onChange={inputNickName}
            placeholder="닉네임을 입력해주세요"
          />
          <button onClick={onSearch}>확인</button>
        </div>
        {userIcon ? (
          <>
            <div className="user-wrap">
              <img className="user-Icon" src={userIcon} alt="아이콘" />
              <div className="user-info-wrap">
                <div className="nickName-box">
                  <strong>{userInfo.name}</strong>
                </div>
                <div className="level-box">
                  <p>LV : {userInfo.summonerLevel}</p>
                </div>
              </div>
            </div>
            <History></History>
          </>
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
}

export default Main;
