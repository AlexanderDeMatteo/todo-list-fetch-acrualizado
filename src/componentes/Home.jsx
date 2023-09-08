import React, { useState } from "react";

import { Lista } from "./Lista.jsx";



const Home = () => {


    return (
        <div className="fondo">
            <div className="fondo-de-cartas">
                <h1 className="titulo">Todo List</h1>
                <div className="notas">
                    <Lista />
                </div>
            </div>
        </div>
    );
};

export default Home;
