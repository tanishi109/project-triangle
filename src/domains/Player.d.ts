import {Commands} from "./Command";

export interface IPlayer {
  id?: number;
  currentStrokes?: Commands[];
  getCurrentCommands?: () => Commands;
  commandsLog?: Commands[];
}