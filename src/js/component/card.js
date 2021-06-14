import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export const Card = (props) => {
    useEffect(() => {
        fetch("https://www.swapi.tech/api/people/" + `${props}`)
        .then(resp => resp.json())
        .then(data => )
    }, [props])

    const { store, actions } = useContext(Context);

    const cardList = store.characters

    return (
        <div>
            <div className="d-inline">

            </div>
        </div>
    );
};
