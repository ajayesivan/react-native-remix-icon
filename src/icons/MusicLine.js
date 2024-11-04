import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgMusicLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M12 13.535V3h8v2h-6v12a4 4 0 1 1-2-3.465M10 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
  </Svg>
);
export default SvgMusicLine;
