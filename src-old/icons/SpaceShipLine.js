import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSpaceShipLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M2.88 18.054a35.897 35.897 0 018.531-16.32.8.8 0 011.178 0c.166.18.304.332.413.455a35.897 35.897 0 018.118 15.865c-2.141.451-4.34.747-6.584.874l-2.089 4.178a.5.5 0 01-.894 0l-2.089-4.178a44.019 44.019 0 01-6.584-.874zm6.698-1.123l1.157.066L12 19.527l1.265-2.53 1.157-.066a42.137 42.137 0 004.227-.454A33.913 33.913 0 0012 4.09a33.913 33.913 0 00-6.649 12.387c1.395.222 2.805.374 4.227.454zM12 15a3 3 0 110-6 3 3 0 010 6zm0-2a1 1 0 100-2 1 1 0 000 2z" />
    </Svg>
  );
}

export default SvgSpaceShipLine;
