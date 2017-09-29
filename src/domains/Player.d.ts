import {Commands} from "./Command";

export interface IPlayer {
  id?: number;
  currentStrokes?: Commands[];
}