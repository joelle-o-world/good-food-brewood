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
      <Annotation y="25%" x="75%" pointToY="10%">Milk Chocolate</Annotation>,
      <Annotation y="50%" pointToY="45%" pointToX="42%">Dolce de Leche</Annotation>,
      <Annotation y="75%"  pointToY="75%" pointToX="35%">Dark Chocolate</Annotation>,
    ],
    title: "Red Campion",
  },
  {
    img: ChocolateBar2,
    title: "Greater Stitchwort",
    annotations: [
      <Annotation y="25%" pointToY="20%" >Organic Raspberries</Annotation>,
      <Annotation y="50%" x="85%" pointToX="65%" pointToY="35%">White Chocolate</Annotation>,
      <Annotation y="75%" x="21%" pointToX="40%">Caramel Crumb</Annotation>,
    ],
  },
  {
    img: ChocolateBar3,
    title: "Greater Stitchwort",
    annotations: [
      <Annotation y="25%" pointToY="20%" >Organic Raspberries</Annotation>,
      <Annotation y="50%" pointToY="45%">Dolce de Leche Chocolate</Annotation>,
      <Annotation x="85%" y="65%" pointToY="55%" pointToX="60%">Black Onion Seeds</Annotation>,
      <Annotation x="21%" y="80%" pointToX="40%" pointToY="65%">Caramel Crumbs</Annotation>,
    ],
  },
  {
    img: ChocolateBar5,
    title: "Periwinkle",
    annotations: [
      <Annotation y="45%" pointToX="35%">Dark Chocolate & Sea Salt</Annotation>,
      <Annotation x="80%" y="35%" pointToY="25%">Chilli Flakes</Annotation>
    ],
  },
  {
    img: ChocolateBar4,
    title: "Wild Rose",
    annotations: [
      <Annotation>White Chocolate</Annotation>,
      <Annotation>Caramel Crumbs</Annotation>,
      <Annotation>Organic Raspberries</Annotation>,
    ],
  },
  
  {
    img: ChocolateBar6,
    title: "Red Campion",
    annotations: [
      <Annotation>Dolce de Latte Chocolate</Annotation>,
      <Annotation>Organic Raspberries</Annotation>,
      <Annotation>Black Onion Seeds</Annotation>,
      <Annotation>Maldon Sea Salt</Annotation>,
    ],
  },
  {
    img: ChocolateBar7,
    title: "Wild Rose",
    annotations: [
      <Annotation>Milk Chocolate</Annotation>,
      <Annotation>Caramel Crumbs</Annotation>,
      <Annotation>Black Onion Seeds</Annotation>,
    ],
  },
  {
    img: ChocolateBar8,
    title: "Red Campion",
    annotations: [
      <Annotation>White Chocolate</Annotation>,
      <Annotation>Dolce de Leche Chocolate</Annotation>,
      <Annotation>Organic Raspberries</Annotation>,
      <Annotation>Caramel Crumbs</Annotation>,
      <Annotation>Black Onion Seeds</Annotation>,
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

