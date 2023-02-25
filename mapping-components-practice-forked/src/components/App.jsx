import React from "react";
import Emojipedia from "../emojipedia";
import Entry from "./Entry";
function createEntry(entry) {
  return (
    <Entry
      key={entry.id}
      emoji={entry.emoji}
      name={entry.name}
      description={entry.meaning}
    />
  );
}
function App() {
  return (
    <div>
      <h1>
        <span>Emojipedia</span>
      </h1>
      <dl className="dictionary">{Emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;
