import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { memo } from 'react';

const SvgComponent = ({ color = '#fff', height = 13, width = 13 }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 8 11">
    <Path
      fill={color}
      d="M2.527.617h1V3.06c1.008-.346 2.025-.71 3.04-1.06v.784c-1.016.347-2.025.7-3.04 1.046v.405c1.015-.35 2.032-.714 3.04-1.061v.779c-1.008.356-2.027.701-3.04 1.052V9.05a4.061 4.061 0 0 0 1.87-.726 3.787 3.787 0 0 0 1.249-1.511l.01-.025c.205-.458.31-.952.309-1.45v-.003H8v.15a4.551 4.551 0 0 1-.53 1.99l.014-.028a4.884 4.884 0 0 1-1.109 1.393l-.004.003a5.045 5.045 0 0 1-3.324 1.228c-.183 0-.364-.01-.543-.028l.022.002V5.35c-.624.209-1.238.426-1.859.638v-.756c.622-.216 1.245-.43 1.86-.653v-.402c-.62.201-1.24.427-1.86.636V4.06c.618-.22 1.247-.43 1.86-.656V.617Z"
    />
  </Svg>
);
const Currency = memo(SvgComponent);
export default Currency;
