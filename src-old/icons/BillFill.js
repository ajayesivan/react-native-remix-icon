import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBillFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M20 22H4a1 1 0 01-1-1V3a1 1 0 011-1h16a1 1 0 011 1v18a1 1 0 01-1 1zM8 9v2h8V9H8zm0 4v2h8v-2H8z" />
    </Svg>
  );
}

export default SvgBillFill;
