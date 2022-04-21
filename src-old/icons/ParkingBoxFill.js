import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgParkingBoxFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M11 14h1.5a3.5 3.5 0 000-7H9v10h2v-3zM4 3h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1zm7 6h1.5a1.5 1.5 0 010 3H11V9z" />
    </Svg>
  );
}

export default SvgParkingBoxFill;
