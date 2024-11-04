import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgMailDownloadLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="m20 7.238-7.928 7.1L4 7.216V19h9v2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v8h-2zM19.501 5H4.511l7.55 6.662zM20 18h3l-4 4-4-4h3v-4h2z" />
  </Svg>
);
export default SvgMailDownloadLine;
