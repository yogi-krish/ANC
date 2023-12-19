import React from "react";
import "./TeamCard.scss";
import PlayerCard from "../PlayerCard";

const TeamCard = ({ gameName, teamName, team }: any) => {
    const addPlayer = { id: "", name: "", age: "" };
    return (
        <div className="team-card">
            <div className="team-card_name">{`${teamName}(${team.length})`}</div>
            <PlayerCard gameName={gameName} teamName={teamName} player={addPlayer} mode="Add" />
            {team.map((player: any) => (
                <PlayerCard key={player.id} gameName={gameName} teamName={teamName} player={player} />
            ))}
        </div>
    );
};

export default TeamCard;
