import React, {FunctionComponent, useContext} from 'react';
import parsePercentage from '../util/parsePercentage';
import {SVGContext} from './SVGOverlay';

export const Annotation:FunctionComponent<{
  x?: string|number;
  y?: string|number;
}> = ({children, x, y}) => {


  const svg = useContext(SVGContext)

  const labelWidth = 120
  const labelHeight = 120

  const x2 = parsePercentage(x, svg.width, "50%");
  const y2 = parsePercentage(y, svg.height, "50%");
  const x1 = x2 < svg.width/2 ? .2 * svg.width : .8 * svg.width;
  let diff = y2 - svg.height/2

  const y1 = y2 - diff * 0.2

  return <g>
    <line x1={x1} x2={x2} y1={y1} y2={y2} stroke="black" />
    
    <foreignObject x={x1-labelWidth/2} y={y1 - 10} width={labelWidth+'px'} height={labelHeight}>
      <div className="AnnotationLabel">{children}</div>
    </foreignObject>
  </g>
}

export default Annotation;
