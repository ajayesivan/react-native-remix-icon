import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPlug2Fill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M13 18v2h6v2h-6a2 2 0 01-2-2v-2H8a4 4 0 01-4-4v-4h16v4a4 4 0 01-4 4h-3zm4-12h2a1 1 0 011 1v2H4V7a1 1 0 011-1h2V2h2v4h6V2h2v4zm-5 8.5a1 1 0 100-2 1 1 0 000 2zM11 2h2v3h-2V2z" />
    </Svg>
  );
}

export default SvgPlug2Fill;
