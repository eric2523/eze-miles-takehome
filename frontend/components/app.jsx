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
          href="https://github.com/eric2523/eze-miles-takehome"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="https://img.icons8.com/clouds/100/000000/github.png" />
        </a>
        <a
          href="https://www.linkedin.com/in/eric-xian-2998061a6/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="https://img.icons8.com/clouds/100/000000/linkedin.png" />
        </a>
      </div>
    </div>
  );
};

export default App;
