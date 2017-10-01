import {Commands} from "./Command";

export interface IPlayer {
  id?: number;
  currentStrokes?: Commands[];
  commandsStream?: Commands[];
  getCurrentCommands?: () => Commands;
  getCurrentMove?: () => string;  
}