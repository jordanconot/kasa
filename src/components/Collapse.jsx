import React, { useState } from 'react';

const Collapse = ({ collapseData }) => {
  const [isOpenFiabilite, setOpenFiabilite] = useState(false);
  const [isOpenRespect, setOpenRespect] = useState(false);
  const [isOpenService, setOpenService] = useState(false);
  const [isOpenSecurite, setOpenSecurite] = useState(false);
  const [isOpenSections, setOpenSections] = useState({});

  const toggleCollapse = (index) => {
    setOpenSections((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const renderContentLi = (item, index) => {
    if(item.title === 'Équipements') {
      const equipments = item.content.split(',')

      return (
        <ul className='list_equipments'>
          {equipments.map((equipment, equipmentIndex) => (
            <li className='item_list_equipments' key={equipmentIndex}>{equipment}</li>
          ))}
        </ul>
      );
    } else {
      return <p className="collapse_content_text">{item.content}</p>
    }
  }

  if (collapseData && collapseData.length) {

    return (
      <section className="collapse_container">
          {collapseData.map((item, index) => (
        <ul key={index} className='collapse_container_ul'>
            <div  className="collapse_dropdown">
              <div className="collapse" onClick={() => toggleCollapse(index)}>
                {item.title}
                <div
                  className={`arrow ${isOpenSections[index] ? 'rotate' : ''}`}
                ></div>
              </div>
              {isOpenSections[index] && (
                <div
                  className={`collapse_content ${
                    isOpenSections[index] ? 'open' : ''}`}
                >
                  {renderContentLi(item, index)}
                </div>
              )}
            </div>
        </ul>
          ))}
      </section>
    );
  }

  return (
    <section className="collapse_container">
        <div className="collapse_dropdown">
      <ul className='collapse_container_ul gap'>
          <li
            className="collapse"
            onClick={() => setOpenFiabilite(!isOpenFiabilite)}
          >
            Fiabilité
            <div className={`arrow ${isOpenFiabilite ? 'rotate' : ''}`}></div>
          </li>
          {isOpenFiabilite && (
            <div
              className={`collapse_content ${isOpenFiabilite ? 'open' : ''}`}
            >
              <p className="collapse_content_text">
                Les annonces postées sur Kasa garantissent une fiabilité totale.
                Les photos sont conformes aux logements, et toutes les
                infromations sont régulièrement vérifiées par nos équipes
              </p>
            </div>
          )}
          </ul>
        </div>

        <div className="collapse_dropdown">
        <ul className='collapse_container_ul gap'>
          <li
            className="collapse"
            onClick={() => setOpenRespect(!isOpenRespect)}
          >
            Respect
            <div className={`arrow ${isOpenRespect ? 'rotate' : ''}`}></div>
          </li>
          {isOpenRespect && (
            <div className={`collapse_content ${isOpenRespect ? 'open' : ''}`}>
              <p className="collapse_content_text">
                La bienveillance fait partie des valeurs fondatrices de Kasa.
                Tout comportement discriminatoire ou de perturbation du
                voisinage entraînera une exclusion de notre plateforme.
              </p>
            </div>
          )}
          </ul>
        </div>
        <div className="collapse_dropdown">
        <ul className='collapse_container_ul gap'>
          <li
            className="collapse"
            onClick={() => setOpenService(!isOpenService)}
          >
            Service
            <div className={`arrow ${isOpenService ? 'rotate' : ''}`}></div>
          </li>
          {isOpenService && (
            <div className={`collapse_content ${isOpenService ? 'open' : ''}`}>
              <p className="collapse_content_text">
                La bienveillance fait partie des valeurs fondatrices de Kasa.
                Tout comportement discriminatoire ou de perturbation du
                voisinage entraînera une exclusion de notre plateforme.
              </p>
            </div>
          )}
          </ul>
        </div>

        <div className="collapse_dropdown">
        <ul className='collapse_container_ul gap'>
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
                La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes
                que pour les voyageurs, chaque logement correspond aux critères
                de sécurité établies par nos services. En laissant une note
                aussi bien à l'hôte qu'au locataire, cela permet à nos équipes
                de vérifier que les standards sont bien respectés. Nous
                organisons également des ateliers sur la sécurité domestique
                pour nos hôtes.
              </p>
            </div>
          )}
          </ul>
        </div>
    </section>
  );
};

export default Collapse;
