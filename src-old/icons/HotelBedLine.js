import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgHotelBedLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M22 11v9h-2v-3H4v3H2V4h2v10h8V7h6a4 4 0 014 4zm-2 3v-3a2 2 0 00-2-2h-4v5h6zM8 11a1 1 0 100-2 1 1 0 000 2zm0 2a3 3 0 110-6 3 3 0 010 6z" />
    </Svg>
  );
}

export default SvgHotelBedLine;
