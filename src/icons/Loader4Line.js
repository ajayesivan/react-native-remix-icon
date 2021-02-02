import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgLoader4Line(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M18.364 5.636L16.95 7.05A7 7 0 1019 12h2a9 9 0 11-2.636-6.364z" />
    </Svg>
  );
}

export default SvgLoader4Line;
