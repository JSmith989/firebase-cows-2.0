import cowData from '../../helpers/data/cowData';
import card from '../cards/cowCard';

const cowsView = () => {
  cowData.getCows().then((response) => {
    response.forEach((item) => {
      $('#app').append(card.cowMaker(item));
    });
  });
};

export default { cowsView };
