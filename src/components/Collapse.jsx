import React from 'react';

const Collapse = () => {
  return (
    <div className="collapse_container">
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
    </div>
  );
};

export default Collapse;
