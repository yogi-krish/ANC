import React from "react";
import Header from "../Header";
import "./GameCard.scss";
import TeamCard from "./TeamCard";

const GameCard = ({ gameName, gameData }: any) => {
    return (
        <div className="game-card">
            <Header title={gameName} />
            {Object.keys(gameData).map((team_name: any) => (
                <TeamCard key={team_name} gameName={gameName} teamName={team_name} team={gameData[team_name]} />
            ))}
        </div>
    );
};

export default GameCard;
