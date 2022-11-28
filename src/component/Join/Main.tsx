import React, { useEffect, useState } from "react";
import "./Main.css";
import { BsFillSunFill } from "react-icons/bs";

function Main() {
  type objType = {
    body: string;
    btn: string;
  };

  const [nickName, setNickName] = useState<string>("");
  const [userInfo, setUserInfo] = useState<any>({});
  const [shift, setShift] = useState<objType>({
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
      `https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${nickName}?api_key=RGAPI-28c83a06-aa7b-45f8-84ba-5e6b4fbe6729`,
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
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("에러 발생!");
      })
      .catch((error) => {
        console.log(error);
      })
      .then((result) => {
        setUserInfo(result);
      });
  };

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
        {userInfo ? (
          <div className="userInfo-wrap">
            <div className="nickName-box">
              <strong>{userInfo.name}</strong>
            </div>
            <div className="level-box">
              <p>{userInfo.summonerLevel}</p>
            </div>
          </div>
        ) : (
          <p className="null-box">유저 정보가 없습니다</p>
        )}
      </div>
    </div>
  );
}

export default Main;
