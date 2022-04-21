import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgRssLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M3 17a4 4 0 014 4H3v-4zm0-7c6.075 0 11 4.925 11 11h-2a9 9 0 00-9-9v-2zm0-7c9.941 0 18 8.059 18 18h-2c0-8.837-7.163-16-16-16V3z" />
    </Svg>
  );
}

export default SvgRssLine;
