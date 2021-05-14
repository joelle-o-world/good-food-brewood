import React, {FunctionComponent, useRef, createContext} from 'react';
import classNames from 'classnames'

import useElementPosition from '../hooks/useElementPosition';

import './SVGOverlay.sass'

export const SVGContext = createContext({
  left: 0,
  top: 0,
  width: 100,
  height: 100,
})

export const SVGOverlay: FunctionComponent<{
  className?: string;
}> = ({children, className}) => {
  const svgRef = useRef(null);
  const {
    elementLeft: left, 
    elementTop: top, 
    elementWidth: width, 
    elementHeight: height
  } = useElementPosition(svgRef);

  const viewBox = `0 0 ${width} ${height}`;

  return <svg className={classNames("SVGOverlay", className)} ref={svgRef} viewBox={viewBox}>
    <SVGContext.Provider value={{
      top, left, width, height,
    }}>
      {children}
    </SVGContext.Provider>
  </svg>
}

export default SVGOverlay
