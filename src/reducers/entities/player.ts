import playerActions from "actions/entities/player";
import {getEntityReducer} from "./_factory";
import Player from "domains/Player";

export default getEntityReducer(playerActions, Player);
