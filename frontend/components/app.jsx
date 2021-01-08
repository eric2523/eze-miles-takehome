import React from "react";
import TableIndex from "./table-index";
import HistoryButtons from "./history-buttons";

const App = () => {
  return (
    <div>
      <TableIndex />
      <HistoryButtons />
      <div className="socials">
        <a
          href="https://github.com/eric2523"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="https://img.icons8.com/clouds/100/000000/github.png" />
        </a>
        <a
          href="https://www.linkedin.com/feed/"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
        <img src="https://img.icons8.com/clouds/100/000000/linkedin.png" />
      </div>
    </div>
  );
};

export default App;
