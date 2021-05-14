import React, {FunctionComponent, useContext} from 'react';
import parsePercentage from '../util/parsePercentage';
import {SVGContext} from './SVGOverlay';

export const Annotation:FunctionComponent<{
  x?: string|number;
  y?: string|number;
  pointToX?: number|string;
  pointToY?: number|string;
}> = props => {

  const {children} = props;

  const {width, height} = useContext(SVGContext)

  const labelWidth = 120
  const labelHeight = 30

  const x = parsePercentage(props.x || 0, width) || labelWidth/2;
  const y = parsePercentage(props.y || 0, height) || 0;
  const pointToX = parsePercentage(props.pointToX || '50%', width);
  const pointToY = parsePercentage(props.pointToY || '50%', height);


  return <g>
    <line x1={x} x2={pointToX} y1={y} y2={pointToY} stroke="black" />
    
    <foreignObject x={x-60} y={y-10} width="120px" height="120px">
      <div className="AnnotationLabel">{children}</div>
    </foreignObject>
  </g>
}

export default Annotation;
