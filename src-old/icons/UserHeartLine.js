import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgUserHeartLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M17.841 15.659l.176.177.178-.177a2.25 2.25 0 013.182 3.182l-3.36 3.359-3.358-3.359a2.25 2.25 0 013.182-3.182zM12 14v2a6 6 0 00-6 6H4a8 8 0 017.75-7.996L12 14zm0-13c3.315 0 6 2.685 6 6a5.998 5.998 0 01-5.775 5.996L12 13c-3.315 0-6-2.685-6-6a5.998 5.998 0 015.775-5.996L12 1zm0 2C9.79 3 8 4.79 8 7s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" />
    </Svg>
  );
}

export default SvgUserHeartLine;
