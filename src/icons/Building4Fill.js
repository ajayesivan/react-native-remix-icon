import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBuilding4Fill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M21 20h2v2H1v-2h2V3a1 1 0 011-1h16a1 1 0 011 1v17zM8 11v2h3v-2H8zm0-4v2h3V7H8zm0 8v2h3v-2H8zm5 0v2h3v-2h-3zm0-4v2h3v-2h-3zm0-4v2h3V7h-3z" />
    </Svg>
  );
}

export default SvgBuilding4Fill;
