import React, { useState } from "react";
import Link from "next/link";

import CardAllStyle from "../CardExperience/CardAllStyle"

import CardExperience from "../CardExperience/CardExperience"

const CardAll = props => {


    return (
        <CardAllStyle >
            <CardExperience />
            <div className="icon">
                <img className="icon1" src="/static/svg/iconHomeGalery0.svg" />
                <img className="icon2" src="/static/svg/iconHomeGalery1.svg" />
                <img className="icon3" src="/static/svg/iconHomeGalery2.svg" />
                <img className="icon4" src="/static/svg/iconHomeGalery3.svg" />
                <img className="icon5" src="/static/svg/iconHomeGalery4.svg" />
            </div>
        </CardAllStyle>
    );
};

export default CardAll;
