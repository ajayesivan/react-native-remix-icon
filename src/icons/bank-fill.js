import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgBankFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M2 20h20v2H2zm2-8h2v7H4zm5 0h2v7H9zm4 0h2v7h-2zm5 0h2v7h-2zM2 7l10-5 10 5v4H2zm10 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
  </Svg>
);
export default SvgBankFill;
