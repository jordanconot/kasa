import React, { useState } from 'react';

const Collapse = ({ collapseData }) => {
  const [isOpenFiabilite, setOpenFiabilite] = useState(false);
  const [isOpenRespect, setOpenRespect] = useState(false);
  const [isOpenService, setOpenService] = useState(false);
  const [isOpenSecurite, setOpenSecurite] = useState(false);

  return (
    <main className='collapse_container'>
      <ul>
        <li className="collapse" onClick={() => setOpenFiabilite(!isOpenFiabilite)}>
          Fiabilité
          <div className={`arrow ${isOpenFiabilite ? 'rotate' : ''}`}></div>
          </li>
        {isOpenFiabilite && (
          <div className={`collapse_content ${isOpenFiabilite ? 'open' : ''}`}>
            <p className="collapse_content_text">
              Les annonces postées sur Kasa garantissent une fiabilité totale.
              Les photos sont conformes aux logements, et toutes les
              infromations sont régulièrement vérifiées par nos équipes
            </p>
          </div>
        )}
        

        <li className="collapse" onClick={() => setOpenRespect(!isOpenRespect)}>
          Respect
          <div className={`arrow ${isOpenRespect ? 'rotate' : ''}`}></div>
        </li>
        {isOpenRespect && (
          <div className={`collapse_content ${isOpenRespect ? 'open' : ''}`}>
            <p className="collapse_content_text">
              La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
              comportement discriminatoire ou de perturbation du voisinage
              entraînera une exclusion de notre plateforme.
            </p>
          </div>
        )}

        <li className="collapse" onClick={() => setOpenService(!isOpenService)}>
          Service
          <div className={`arrow ${isOpenService ? 'rotate' : ''}`}></div>
        </li>
        {isOpenService && (
          <div className={`collapse_content ${isOpenService ? 'open' : ''}`}>
            <p className="collapse_content_text">
              La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
              comportement discriminatoire ou de perturbation du voisinage
              entraînera une exclusion de notre plateforme.
            </p>
          </div>
        )}

        <li
          className="collapse"
          onClick={() => setOpenSecurite(!isOpenSecurite)}
        >
          Sécurité
          <div className={`arrow ${isOpenSecurite ? 'rotate' : ''}`}></div>
        </li>
        {isOpenSecurite && (
          <div className={`collapse_content ${isOpenSecurite ? 'open' : ''}`}>
            <p className="collapse_content_text">
              La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
              pour les voyageurs, chaque logement correspond aux critères de
              sécurité établies par nos services. En laissant une note aussi
              bien à l'hôte qu'au locataire, cela permet à nos équipes de
              vérifier que les standards sont bien respectés. Nous organisons
              également des ateliers sur la sécurité domestique pour nos hôtes.
            </p>
          </div>
        )}
      </ul>
    </main>
  );
};

export default Collapse;
