import { httpApi } from "./http.api";
export interface Houses {
  id: string;
  name: string;

  logo: string;

  flag?: string;
}
export interface HousePoint {
  id: string;
  season: string;
  year: string;

  point: number;
  description: string;
  pointDate: Date;
}
export const getHouses = (): Promise<Houses> =>
  httpApi.get<Houses>(`house/house`).then(({ data }) => data);
export const getPoint = (): Promise<HousePoint> =>
  httpApi.get<HousePoint>(`house/point`).then(({ data }) => data);
export const addHousePoint = (): Promise<HousePoint> =>
  httpApi.put<HousePoint>(`house/addHousePoint`).then(({ data }) => data);
// export const sendHousePoint = (): Promise<HousePoint> =>
//   httpApi.put<HousePoint>(`house/addHousePoint`).then(({ data }) => data);
// export const getStatistics = (): Promise<any> => httpApi.get<any>(`feedback/statdecide`).then(({ data }) => data);
