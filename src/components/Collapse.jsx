import React from 'react';

const Collapse = () => {
  return (
    <main className="collapse_container">
      <ul>
        <li className="collapse">
          Fiabilité
          <div className="arrow_up"></div>
        </li>
        <li className="collapse">
          Respect
          <div className="arrow_up"></div>
        </li>
        <li className="collapse">
          Service
          <div className="arrow_up"></div>
        </li>
        <li className="collapse">
          Sécurité
          <div className="arrow_up"></div>
        </li>
      </ul>
    </main>
  );
};

export default Collapse;
