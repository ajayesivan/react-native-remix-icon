import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgHotelBedFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M22 11v9h-2v-3H4v3H2V4h2v10h8V7h6a4 4 0 014 4zM8 13a3 3 0 110-6 3 3 0 010 6z" />
    </Svg>
  );
}

export default SvgHotelBedFill;
