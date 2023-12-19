import React, { useEffect, useState } from "react";
import tournamentStore from "../../store";
import { fetchTournamentData } from "../../actions/actions";
import GameCard from "../GameCard";
import Spinner from "../Spinner";

const Main = () => {
    const [data, setData] = useState(tournamentStore.getData());
    const [showLoader, setShowLoader] = useState(false);

    useEffect(() => {
        tournamentStore.addChangeListener(_handleChange);
        if (Object.keys(data).length === 0) {
            setShowLoader(true);
            fetchTournamentData();
        }
        return () => tournamentStore.removeChangeListener(_handleChange);
    }, [data]);

    const _handleChange = () => {
        setShowLoader(false);
        setData(tournamentStore.getData());
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            {!showLoader && Object.keys(data).map((key) => <GameCard key={key} gameName={key} gameData={data[key]} />)}
            {showLoader && <Spinner />}
        </div>
    );
};

export default Main;
