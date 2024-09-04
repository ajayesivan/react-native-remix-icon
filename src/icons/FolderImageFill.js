import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgFolderImageFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414zM10 10.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m8 6.5-4-6-7 6z" />
  </Svg>
);
export default SvgFolderImageFill;
