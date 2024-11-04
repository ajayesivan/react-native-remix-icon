import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgInboxArchiveLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="m20 3 2 4v13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.004L4 3zm0 6H4v10h16zm-7 1v4h3l-4 4-4-4h3v-4zm5.764-5H5.237l-1 2h15.527z" />
  </Svg>
);
export default SvgInboxArchiveLine;
