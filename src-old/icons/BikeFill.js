import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBikeFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M5.5 12H4V7H2V5h6v2H6v2.795l9.813-2.629L15.233 5H12V3h3.978a1 1 0 01.988.741l1.553 5.796-1.932.517-.256-.956L5.5 12zM5 21a4 4 0 110-8 4 4 0 010 8zm0-3a1 1 0 100-2 1 1 0 000 2zm13 3a5 5 0 110-10 5 5 0 010 10zm0-4a1 1 0 100-2 1 1 0 000 2z" />
    </Svg>
  );
}

export default SvgBikeFill;
