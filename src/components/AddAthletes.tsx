import React from 'react';
import { Istate as Props } from '../App';

interface Iprops {
  athlete: Props['athlete'];
  setAthlete: React.Dispatch<React.SetStateAction<Props['athlete']>>;
}

const AddAthletes: React.FC<Iprops> = ({ athlete, setAthlete }) => {
  const [athleteInfo, setAthleInfo] = React.useState({
    name: '',
    imgUrl: '',
    age: '',
    note: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    e.preventDefault();
    setAthleInfo({
      ...athleteInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (): void => {
    if (!athleteInfo.name || !athleteInfo.imgUrl || !athleteInfo.age) {
      return;
    }

    setAthlete([
      ...athlete,
      {
        name: athleteInfo.name,
        url: athleteInfo.imgUrl,
        age: parseInt(athleteInfo.age),
        note: athleteInfo.note,
      },
    ]);

    setAthleInfo({
      name: '',
      imgUrl: '',
      age: '',
      note: '',
    });
  };

  return (
    <div className="AddToList">
      <input
        type="text"
        placeholder="name"
        className="AddToList-input"
        value={athleteInfo.name}
        onChange={handleChange}
        name="name"
      />
      <input
        type="text"
        placeholder="Image url"
        className="AddToList-input"
        value={athleteInfo.imgUrl}
        onChange={handleChange}
        name="imgUrl"
      />
      <input
        type="text"
        placeholder="age"
        className="AddToList-input"
        value={athleteInfo.age}
        onChange={handleChange}
        name="age"
      />

      <textarea
        placeholder="note"
        className="AddToList-input"
        value={athleteInfo.note}
        onChange={handleChange}
        name="note"
      />
      <button className="AddToList-btn" onClick={handleClick}>
        Add to List
      </button>
    </div>
  );
};

export default AddAthletes;
