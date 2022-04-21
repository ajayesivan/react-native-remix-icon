import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgAdvertisementLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M21 3a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1h18zm-1 2H4v14h16V5zM9.399 8l3.199 8h-2.155l-.4-1h-3.29l-.4 1H4.199l3.2-8h2zM19 8v8h-3a3 3 0 010-6h.999L17 8h2zm-2 4h-1a1 1 0 00-.117 1.993L16 14h1v-2zm-8.601-1.115L7.552 13h1.692l-.845-2.115z" />
    </Svg>
  );
}

export default SvgAdvertisementLine;
