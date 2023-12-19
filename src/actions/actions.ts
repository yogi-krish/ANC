import dispatcher from "../appDispatcher";
import actionTypes from "./actionTypes";

export const fetchTournamentData = () => {
    fetch("https://mocki.io/v1/b4544a37-0765-405f-baf6-6675845d5a0e")
        .then((res) => res.json())
        .then((data) => {
            const obj:any = {};
            data.forEach((item:any) => {
                const gameObj:any = {};
                item.teams.forEach((team:any) => {
                    team.players.forEach((player:any, index:number) => {
                        player.id = index
                    })
                    gameObj[team.team_name] = team.players
                });
                obj[item.game] = gameObj;
            });
            dispatcher.dispatch({ type: actionTypes.GET_TOURNAMENT_DATA, payload: obj })});
};

export const addPlayer = (data:any) => {
    dispatcher.dispatch({type: actionTypes.ADD_PLAYER, payload: data});
}

export const editPlayer = (data:any) => {
    dispatcher.dispatch({type: actionTypes.EDIT_PLAYER, payload: data});
}
