import successImg from '../../images/success.svg';
import failImg from '../../images/fail.svg';
import './InfoTooltip.scss';

import Popup from '../Popup/Popup';

const InfoTooltip = ({ state, onClose }) => {
  const { opened, status, text } = state;
  const tipImg = status === 'success' ? successImg : failImg;

  return (
    <Popup isOpen={opened} onClose={onClose}>
      <img className='tooltip__image' src={tipImg} alt={text} />
      <h2 className='tooltip__title'>{text}</h2>
    </Popup>
  );
};

export default InfoTooltip;
