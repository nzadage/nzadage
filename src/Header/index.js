import React from "react";
import LeftCard from "../LeftCard/index.js";
import RightCard from "../RightCard/index.js";

const Header = () => {
    return (
        <div className="row">
            <LeftCard />
            <RightCard />
        </div>
    );
}

export default Header;