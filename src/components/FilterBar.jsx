import React from "react";

function FilterBar({
showGreasedOnly,
onGreasedChange,
sortBy,
onSortChange,
}) {
return (
<div className="ui form" style={{ margin: "20px" }}>
<div className="field">
<label htmlFor="greased">Greased Pigs Only?</label>
<input
id="greased"
type="checkbox"
checked={showGreasedOnly}
onChange={(e) => onGreasedChange(e.target.checked)}
/>
</div>

<div className="field">
<label htmlFor="sort">Sort by:</label>
<select
id="sort"
value={sortBy}
onChange={(e) => onSortChange(e.target.value)}
>
<option value="">None</option>
<option value="name">Name</option>
<option value="weight">Weight</option>
</select>
</div>
</div>
);
}

export default FilterBar;