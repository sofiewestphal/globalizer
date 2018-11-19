import React from 'react';
import cultureImage from '../../assets/images/culture.jpg';
import foodDrinksImage from '../../assets/images/food-drinks.jpg';
import musicImage from '../../assets/images/music.jpg';
import ExplorerElement from './ExplorerElement';
import './index.scss';

const possibilities = {
  culture: { title: 'Culture', src: cultureImage },
  foodDrinks: { title: 'Food & Drinks', src: foodDrinksImage },
  music: { title: 'Music', src: musicImage },
};

const Explorer = () => (
  <div className="row explorerContainer">
    <div className="col-xs-12 col-md-10 col-md-offset-1">
      <h1>Explore...</h1>
      <div className="row">
        <ExplorerElement
          category={possibilities.culture}
        />

        <ExplorerElement
          category={possibilities.foodDrinks}
        />

        <ExplorerElement
          category={possibilities.music}
        />
      </div>
    </div>
  </div>
);

export default Explorer;
