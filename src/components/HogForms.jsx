import React, { useState } from "react";

function HogForm({ onAddHog }) {
const [name, setName] = useState("");
const [specialty, setSpecialty] = useState("");
const [weight, setWeight] = useState("");
const [greased, setGreased] = useState(false);
const [image, setImage] = useState("");
const [medal, setMedal] = useState("");

function handleSubmit(e) {
e.preventDefault();

const newHog = {
name,
specialty,
weight: Number(weight),
greased,
image,
"highest medal achieved": medal,
};

onAddHog(newHog);

setName("");
setSpecialty("");
setWeight("");
setGreased(false);
setImage("");
setMedal("");
}

return (
<form className="ui form" onSubmit={handleSubmit} style={{ margin: "20px" }}>
<div className="field">
<label htmlFor="name">Name:</label>
<input
id="name"
value={name}
onChange={(e) => setName(e.target.value)}
/>
</div>

<div className="field">
<label htmlFor="specialty">Specialty:</label>
<input
id="specialty"
value={specialty}
onChange={(e) => setSpecialty(e.target.value)}
/>
</div>

<div className="field">
<label htmlFor="weight">Weight:</label>
<input
id="weight"
type="number"
value={weight}
onChange={(e) => setWeight(e.target.value)}
/>
</div>

<div className="field">
<label htmlFor="image">Image URL</label>
<input
id="image"
value={image}
onChange={(e) => setImage(e.target.value)}
/>
</div>

<div className="field">
<label htmlFor="medal">Highest Medal</label>
<input
id="medal"
value={medal}
onChange={(e) => setMedal(e.target.value)}
/>
</div>

<div className="field">
<label htmlFor="greased-input">Greased?</label>
<input
id="greased-input"
type="checkbox"
checked={greased}
onChange={(e) => setGreased(e.target.checked)}
/>
</div>

<button className="ui button" type="submit">
Add Hog
</button>
</form>
);
}

export default HogForm;