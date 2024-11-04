import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgFolderCloseLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M3 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h10v-2H4V5h5.586l2 2H20v5h2V6a1 1 0 0 0-1-1h-8.586l-2-2zm17.414 15 2.122 2.121-1.415 1.414-2.12-2.12-2.122 2.12-1.414-1.414L17.585 18l-2.12-2.121 1.414-1.415L19 16.586l2.121-2.122 1.415 1.415z" />
  </Svg>
);
export default SvgFolderCloseLine;
