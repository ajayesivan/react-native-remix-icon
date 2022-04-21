import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgHotelFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M17 19h2v-8h-6v8h2v-6h2v6zM3 19V4a1 1 0 011-1h14a1 1 0 011 1v5h2v10h1v2H2v-2h1zm4-8v2h2v-2H7zm0 4v2h2v-2H7zm0-8v2h2V7H7z" />
    </Svg>
  );
}

export default SvgHotelFill;
