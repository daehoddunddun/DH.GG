/* enum */
export enum UserInfoEarly {
  accountId = "",
  id = "",
  name = "",
  profileIconId = 0,
  puuid = "",
  summonerLevel = 0,
}

export enum shiftEarly {
  body = "body-wrap-day",
  btn = "Day-shift-btn",
}

/* type */
export type Shift = { body: string; btn: string };

export type UserInfo = {
  accountId: string;
  id: string;
  name: string;
  profileIconId: number;
  puuid: string;
  revisionDate?: number;
  summonerLevel: number;
};

export type UserTier = {
  freshBlood?: boolean;
  hotStreak?: boolean;
  inactive?: boolean;
  leagueId: string;
  leaguePoints: number;
  losses?: number;
  queueType?: string;
  rank: string;
  summonerId: string;
  summonerName: string;
  tier: string;
  veteran?: boolean;
  wins: number;
};

export type GameList = {
  metadata: any;
  info: any;
};

export type PropsGameList = { gameList: any; userName: string };

/* event */
export type typeInputEvent = React.FormEvent<HTMLInputElement>;

/* function */
