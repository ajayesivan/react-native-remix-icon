import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgToggleLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M8 7a5 5 0 100 10h8a5 5 0 000-10H8zm0-2h8a7 7 0 010 14H8A7 7 0 018 5zm0 10a3 3 0 110-6 3 3 0 010 6z" />
    </Svg>
  );
}

export default SvgToggleLine;
