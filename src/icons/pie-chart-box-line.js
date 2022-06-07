import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgPieChartBoxLine = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h16V5H4zm12.9 8A5.002 5.002 0 0 1 7 12a5.002 5.002 0 0 1 4-4.9V13h5.9zm0-2H13V7.1a5.006 5.006 0 0 1 3.9 3.9z" />
  </Svg>
);

export default SvgPieChartBoxLine;
