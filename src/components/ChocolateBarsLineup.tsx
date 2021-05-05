import React, {FunctionComponent} from 'react';

import './ChocolateBarsLineup.sass'

import ChocolateBar1 from '../img/medium-res-chocolate-bars/bar1.medium.png';
import ChocolateBar2 from '../img/medium-res-chocolate-bars/bar2.medium.png';
import ChocolateBar3 from '../img/medium-res-chocolate-bars/bar3.medium.png';
import ChocolateBar4 from '../img/medium-res-chocolate-bars/bar4.medium.png';
import ChocolateBar5 from '../img/medium-res-chocolate-bars/bar5.medium.png';
import ChocolateBar6 from '../img/medium-res-chocolate-bars/bar6.medium.png';
import ChocolateBar7 from '../img/medium-res-chocolate-bars/bar7.medium.png';
import ChocolateBar8 from '../img/medium-res-chocolate-bars/bar8.medium.png';

const chocolateBarsInfo = [
  {img: ChocolateBar1},
  {img: ChocolateBar2},
  {img: ChocolateBar3},
  {img: ChocolateBar4},
  {img: ChocolateBar5},
  {img: ChocolateBar6},
  {img: ChocolateBar7},
  {img: ChocolateBar8},
];

export const ChocolateBarsLineup: FunctionComponent = () => { 
  return <ul className="ChocolateBarsLineup">
    {chocolateBarsInfo.map((barInfo, i:number) => (
      <li className="LineupItem" key={i}>
        <img 
          src={barInfo.img} 
          className="ChocolateBarImg"
        />
      </li>
    ))}
  </ul>
}

export default ChocolateBarsLineup;
