import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgSignpostLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M12 5h5.414l4.293 4.293a1 1 0 0 1 0 1.414L17.414 15H12v7h-2v-7H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6V2h2zm4.586 8 3-3-3-3H5v6z" />
  </Svg>
);
export default SvgSignpostLine;
