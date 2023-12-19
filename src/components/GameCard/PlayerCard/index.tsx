import React, { useState } from "react";
import "./PlayerCard.scss";
import tournamentStore from "../../../store";
import { addPlayer, editPlayer } from "../../../actions/actions";

const PlayerCard = ({ gameName, teamName, player, mode = "Save" }: any) => {
    const [playerDetails, setPlayerDetails] = useState({ ...player });
    const [active, setActive] = useState(false);
    const gameData = tournamentStore.getData();

    const _handleChange = (e: any) => {
        const newDetails = { ...playerDetails };
        newDetails[e.target.id] = e.target.value;
        setPlayerDetails(newDetails);
        _handleFocus();
    };

    const _handleFocus = () => {
        setActive(true);
    };

    const _removeFocus = () => {
        setActive(false);
    };

    const _handleButtonClick = () => {
        const newPayload = { ...gameData };
        const selectedGame = newPayload[gameName];
        const selectedTeam = selectedGame[teamName];
        let newPlayersList: any = [];
        if (mode === "Save") {
            newPlayersList = selectedTeam.map((player: any) =>
                player.id === playerDetails.id ? playerDetails : player
            );
        } else {
            const newObj: any = { ...playerDetails, id: selectedTeam.length };
            if (newObj.name.length === 0 || newObj.age.length === 0) {
                const attribute = newObj.name.length === 0 ? "name" : "age";
                alert(`Please Specify ${attribute}`);
                return;
            }
            newPlayersList = [newObj, ...selectedTeam];
            setPlayerDetails({ id: "", name: "", age: "" });
        }
        selectedGame[teamName] = newPlayersList;
        mode === "Save" ? editPlayer(newPayload) : addPlayer(newPayload);
    };

    return (
        <div className="player">
            <input
                className="player_name input"
                id="name"
                type="text"
                value={playerDetails.name}
                onChange={_handleChange}
                onFocus={_handleFocus}
                onMouseLeave={_removeFocus}
            />
            <input
                className="player_age input"
                id="age"
                type="number"
                value={playerDetails.age}
                onChange={_handleChange}
                onFocus={_handleFocus}
                onMouseLeave={_removeFocus}
            />
            <button className={`${active ? "player_button active" : "player_button"}`} onClick={_handleButtonClick}>
                {mode}
            </button>
        </div>
    );
};

export default PlayerCard;
