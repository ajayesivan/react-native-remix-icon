import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBankCardFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M22 10v10a1 1 0 01-1 1H3a1 1 0 01-1-1V10h20zm0-2H2V4a1 1 0 011-1h18a1 1 0 011 1v4zm-7 8v2h4v-2h-4z" />
    </Svg>
  );
}

export default SvgBankCardFill;
