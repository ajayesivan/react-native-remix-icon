import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBankFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M2 20h20v2H2v-2zm2-8h2v7H4v-7zm5 0h2v7H9v-7zm4 0h2v7h-2v-7zm5 0h2v7h-2v-7zM2 7l10-5 10 5v4H2V7zm10 1a1 1 0 100-2 1 1 0 000 2z" />
    </Svg>
  );
}

export default SvgBankFill;
