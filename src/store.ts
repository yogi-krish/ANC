import { EventEmitter } from "events";
import dispatcher from "./appDispatcher";
import actionTypes from "./actions/actionTypes";

let data:any = {};
const CHANGE_EVENT = "change";

class TournamentStore extends EventEmitter {

    getData() {
        return data;
    }

    emitChange() {
        this.emit(CHANGE_EVENT);
    }

    addChangeListener(callback: () => void) {
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback: ()=>void) {
        this.removeListener(CHANGE_EVENT, callback);
    }
}

const tournamentStore = new TournamentStore();

dispatcher.register((action:any) => {
    switch(action.type) {
        case actionTypes.GET_TOURNAMENT_DATA:
            data = action.payload;
            tournamentStore.emitChange();
            break;
        case actionTypes.ADD_PLAYER:
            data = action.payload;
            tournamentStore.emitChange();
            break;
        case actionTypes.EDIT_PLAYER:
            data = action.payload;
            tournamentStore.emitChange();
            break;
    }
})

export default tournamentStore;