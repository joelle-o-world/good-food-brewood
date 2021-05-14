import React, {FunctionComponent} from 'react';
import Annotation from './Annotation'

import './ChocolateBarsLineup.sass'

import ChocolateBar1 from '../img/medium-res-chocolate-bars/bar1.medium.png';
import ChocolateBar2 from '../img/medium-res-chocolate-bars/bar2.medium.png';
import ChocolateBar3 from '../img/medium-res-chocolate-bars/bar3.medium.png';
import ChocolateBar4 from '../img/medium-res-chocolate-bars/bar4.medium.png';
import ChocolateBar5 from '../img/medium-res-chocolate-bars/bar5.medium.png';
import ChocolateBar6 from '../img/medium-res-chocolate-bars/bar6.medium.png';
import ChocolateBar7 from '../img/medium-res-chocolate-bars/bar7.medium.png';
import ChocolateBar8 from '../img/medium-res-chocolate-bars/bar8.medium.png';
import {SVGOverlay} from './SVGOverlay';

const chocolateBarsInfo = [
  {
    img: ChocolateBar1,
    annotations: [
      <Annotation y="10%">Milk Chocolate</Annotation>,
      <Annotation y="45%" x="42%">Dolce de Leche</Annotation>,
      <Annotation y="75%" x="35%">Dark Chocolate</Annotation>,
    ],
    title: "Red Campion",
  },
  {
    img: ChocolateBar2,
    title: "Lesser Stitchwort",
    annotations: [
      <Annotation y="20%" >Organic Raspberries</Annotation>,
      <Annotation x="65%" y="35%">White Chocolate</Annotation>,
      <Annotation x="40%">Caramel Crumb</Annotation>,
    ],
  },
  {
    img: ChocolateBar3,
    title: "Greater Stitchwort",
    annotations: [
      <Annotation y="20%" >Organic Raspberries</Annotation>,
      <Annotation y="45%" x="45%">Dolce de Leche Chocolate</Annotation>,
      <Annotation y="55%" x="60%">Black Onion Seeds</Annotation>,
      <Annotation x="40%" y="65%">Caramel Crumbs</Annotation>,
    ],
  },
  {
    img: ChocolateBar5,
    title: "Periwinkle",
    annotations: [
      <Annotation x="35%">Dark Chocolate & Sea Salt</Annotation>,
      <Annotation y="25%">Chilli Flakes</Annotation>
    ],
  },
  {
    img: ChocolateBar4,
    title: "White Rose",
    annotations: [
      <Annotation x="61%" y="53%">White Chocolate</Annotation>,
      <Annotation y="22%" x="48%">Caramel Crumbs</Annotation>,
      <Annotation x="47%" y="75%">Organic Raspberries</Annotation>,
    ],
  },
  
  {
    img: ChocolateBar6,
    title: "White Campion",
    annotations: [
      <Annotation x="60%" y="35%">Dolce de Latte Chocolate</Annotation>,
      <Annotation x="60%" y="21%">Organic Raspberries</Annotation>,
      <Annotation x="51%" y="74%">Sea Salt</Annotation>,
      <Annotation x="40%" y="52%">Caramel Crumbs</Annotation>,
    ],
  },
  {
    img: ChocolateBar7,
    title: "Wild Rose",
    annotations: [
      <Annotation x="37%" y="34%">Milk Chocolate</Annotation>,
      <Annotation x="53%" y="54%">Caramel Crumbs</Annotation>,
      <Annotation x="60%" y="21%">Black Onion Seeds</Annotation>,
    ],
  },
  {
    img: ChocolateBar8,
    title: "Red Campion",
    annotations: [
      <Annotation x="60%" y="30%">White Chocolate</Annotation>,
      <Annotation x="55%" y="60%">Dolce de Leche Chocolate</Annotation>,
      <Annotation x="49%" y="77%">Organic Raspberries</Annotation>,
      <Annotation x="49%" y="48%">Caramel Crumbs</Annotation>,
      <Annotation x="48%" y="20%">Black Onion Seeds</Annotation>,
    ],
  },
];

export const ChocolateBarsLineup: FunctionComponent = () => { 
  return <ul className="Lineup ChocolateBarsLineup">
    {chocolateBarsInfo.map(({img, annotations, title}, i:number) => (
      <li className="LineupItem" key={i}>
        { annotations 
          ? <SVGOverlay className="LineupAnnotations">{annotations} </SVGOverlay>
          : null
        }
        <img 
          src={img} 
          className="ChocolateBarImg"
        />
        { title ? <h3 className="LineupTitle">{title}</h3> : null }
      </li>
    ))}
  </ul>
}

export default ChocolateBarsLineup;

