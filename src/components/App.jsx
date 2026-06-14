import React, { useState } from "react";
import hogs from "../porkers_data";
import Nav from "./Nav";
import HogList from "./HogList";
import FilterBar from "./FilterBar";
import HogForm from "./HogForm";

function App() {
  // allHogs: master list of hog objects (initialized from provided data)
  const [allHogs, setAllHogs] = useState(hogs);

  // UI state: whether to show only greased hogs
  const [showGreasedOnly, setShowGreasedOnly] = useState(false);

  // UI state: sorting option ("" | "name" | "weight")
  const [sortBy, setSortBy] = useState("");

  // hiddenHogs: array of hog names that have been hidden (not deleted)
  const [hiddenHogs, setHiddenHogs] = useState([]);

  // Handler: add a hog name to the hidden list so it no longer displays
  function handleHideHog(name) {
    setHiddenHogs([...hiddenHogs, name]);
  }

  // Handler: add a new hog object to the master list
  function handleAddHog(newHog) {
    setAllHogs([...allHogs, newHog]);
  }

  // Start with all hogs, then apply hiding, filtering, and sorting
  let displayedHogs = allHogs.filter((hog) => !hiddenHogs.includes(hog.name));

  // Apply greased filter if toggled on
  if (showGreasedOnly) {
    displayedHogs = displayedHogs.filter((hog) => hog.greased);
  }

  // Sort by name (alphabetical) when requested
  if (sortBy === "name") {
    displayedHogs = [...displayedHogs].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }

  // Sort by numeric weight when requested
  if (sortBy === "weight") {
    displayedHogs = [...displayedHogs].sort((a, b) => a.weight - b.weight);
  }

  return (
{/* Top navigation */}
  {/* Controls: greased filter and sort selection */}
  <FilterBar
    showGreasedOnly={showGreasedOnly}
    onGreasedChange={setShowGreasedOnly}
    sortBy={sortBy}
    onSortChange={setSortBy}
  />

  {/* Form to add a new hog */}
  <HogForm onAddHog={handleAddHog} />

  {/* List of hog cards (already filtered/sorted/hidden) */}
  <HogList hogs={displayedHogs} onHideHog={handleHideHog} />
</div>
  );
}

export default App;