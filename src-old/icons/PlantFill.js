import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPlantFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M21 3v2a7 7 0 01-7 7h-1v1h5v7a2 2 0 01-2 2H8a2 2 0 01-2-2v-7h5v-3a7 7 0 017-7h3zM5.5 2a7.49 7.49 0 016.124 3.169A7.953 7.953 0 0010 10v1h-.5A7.5 7.5 0 012 3.5V2h3.5z" />
    </Svg>
  );
}

export default SvgPlantFill;
