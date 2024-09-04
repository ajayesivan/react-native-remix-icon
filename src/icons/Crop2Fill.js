import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgCrop2Fill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="m17.586 5 2.556-2.556 1.414 1.414L19 6.414V17h3v2h-3v3h-2V7H9V5zM15 17v2H6a1 1 0 0 1-1-1V7H2V5h3V2h2v15zM9 9h6v6H9z" />
  </Svg>
);
export default SvgCrop2Fill;
