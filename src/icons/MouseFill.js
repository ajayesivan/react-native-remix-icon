import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgMouseFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M11.141 2h1.718c2.014 0 3.094.278 4.071.801A5.45 5.45 0 0 1 19.2 5.07c.522.978.801 2.058.801 4.072v5.718c0 2.014-.279 3.094-.801 4.071A5.45 5.45 0 0 1 16.93 21.2c-.977.522-2.057.801-4.071.801H11.14c-2.014 0-3.094-.279-4.072-.801a5.45 5.45 0 0 1-2.268-2.269C4.278 17.954 4 16.874 4 14.86V9.14c0-2.014.278-3.094.801-4.072A5.45 5.45 0 0 1 7.07 2.801C8.047 2.278 9.127 2 11.141 2M11 6v5h2V6z" />
  </Svg>
);
export default SvgMouseFill;
