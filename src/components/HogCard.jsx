import React, { useState } from "react";

function HogCard({ hog, onHideHog }) {
const [showDetails, setShowDetails] = useState(false);

function handleToggleDetails() {
setShowDetails((showDetails) => !showDetails);
}

function handleHideClick(e) {
e.stopPropagation();
onHideHog(hog.name);
}

return (
<div
aria-label="hog card"
className="ui card"
onClick={handleToggleDetails}
>
<div className="image">
<img src={hog.image} alt={`Photo of ${hog.name}`} />
</div>

<div className="content">
<h3>{hog.name}</h3>

{showDetails ? (
<div>
<p>Specialty: {hog.specialty}</p>
<p>{hog.weight}</p>
<p>{hog.greased ? "Greased" : "Non-greased"}</p>
<p>{hog["highest medal achieved"]}</p>
</div>
) : null}

<button className="ui button" onClick={handleHideClick}>
Hide Me
</button>
</div>
</div>
);
}

export default HogCard;