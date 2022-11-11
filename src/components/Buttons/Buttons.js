import './Buttons.css';

const Buttons = ({onGood, onBad, onNeutral}) => {
  return (
    <div className="buttons__wrapper">
      <button type="button" className="button__item" onClick={onGood}>
        Good
      </button>
      <button type="button" className="button__item" onClick={onNeutral}>
        Neutral
      </button>
      <button type="button" className="button__item" onClick={onBad}>
        Bad
      </button>
    </div>
  );
};

export default Buttons;
