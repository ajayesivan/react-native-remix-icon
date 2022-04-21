import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgChargingPile2Line(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M20 11h-1V7h1V4h2v3h1v4h-1v7a3 3 0 01-6 0v-4h-2v5h1v2H2v-2h1V4a1 1 0 011-1h9a1 1 0 011 1v8h2a2 2 0 012 2v4a1 1 0 002 0v-7zm-8 8V5H5v14h7zm-3-8h3l-4 6v-4H5l4-6v4z" />
    </Svg>
  );
}

export default SvgChargingPile2Line;
