import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgWalletLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M18.005 7h3a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h15zm-14 2v10h16V9zm0-4v2h12V5zm11 8h3v2h-3z" />
  </Svg>
);
export default SvgWalletLine;
