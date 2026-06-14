import React from "react";
import HogCard from "./HogCard";

function HogList({ hogs, onHideHog }) {
const hogCards = hogs.map((hog) => (
<div className="ui eight wide column" key={hog.name}>
<HogCard hog={hog} onHideHog={onHideHog} />
</div>
));

return <div className="ui grid container">{hogCards}</div>;
}

export default HogList;