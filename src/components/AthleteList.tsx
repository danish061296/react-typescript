import React from 'react';
import { Istate as Props } from '../App';

const AthleteList: React.FC<Props> = ({ athlete }) => {
  // render the list
  const renderAthleteList: JSX.Element[] = athlete.map((person, personIdx) => {
    return (
      <li key={personIdx} className="List">
        <div className="List-header">
          <img className="List-img" src={person.url} alt="athlete" />
          <h2>{person.name}</h2>
        </div>
        <p>{person.age} Years Old</p>
        <p className="List-note">{person.note}</p>
      </li>
    );
  });

  return (
    <div>
      <ul>{renderAthleteList}</ul>
    </div>
  );
};

export default AthleteList;
