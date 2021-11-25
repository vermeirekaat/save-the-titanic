import React from "react";
import styles from "./Avatar.module.css";
import pirate from "../img/pirate.jpeg";

const Avatar = () => {

    return (
        <div className={styles.container}>
            <img className={styles.avatar} src={pirate} alt="Avatar"/>

            <p className={styles.caption}>Ahoy maatje, welkom op het Schip van Morse! <br></br>Help je mee om de schat op te halen op het eiland?</p>
        </div>
    )
};

export default Avatar;