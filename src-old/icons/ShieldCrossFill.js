import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgShieldCrossFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M3.783 2.826L12 1l8.217 1.826a1 1 0 01.783.976v9.987a6 6 0 01-2.672 4.992L12 23l-6.328-4.219A6 6 0 013 13.79V3.802a1 1 0 01.783-.976zM11 10H8v2h3v3h2v-3h3v-2h-3V7h-2v3z" />
    </Svg>
  );
}

export default SvgShieldCrossFill;
