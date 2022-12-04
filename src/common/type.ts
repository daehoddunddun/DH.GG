import { type } from "os";

/* Array */
export type numArr = number[]; //숫자형 배열
export type strArr = string[]; //문자열 배열
export type isArr = boolean[]; //boolean형 배열
export type tupleArr = (string | number)[]; //배열 안의 이중 타입 배열

/* Object */
export type typeShift = { body: string; btn: string };
// 객체 안에 {[key : type] : vlaue_type} 지정하는 방식

export type userInfoType = {
  accountId: string;
  id: string;
  name: string;
  profileIconId: number;
  puuid: string;
  revisionDate?: number;
  summonerLevel: number;
}; // 객체 안에 { key : value } 로 할당하는 타입 지정 방식

/* Event */
export type typeInputEvent = React.FormEvent<HTMLInputElement>;
