import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPassportFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M20 2a1 1 0 011 1v18a1 1 0 01-1 1H4a1 1 0 01-1-1V3a1 1 0 011-1h16zm-4 14H8v2h8v-2zM12 6a4 4 0 100 8 4 4 0 000-8zm0 2a2 2 0 110 4 2 2 0 010-4z" />
    </Svg>
  );
}

export default SvgPassportFill;
