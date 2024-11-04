import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgAndroidLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M19 13H5v7h14zm0-2a7 7 0 1 0-14 0zM6.382 3.968A8.96 8.96 0 0 1 12 2c2.125 0 4.078.736 5.618 1.968l1.453-1.453 1.414 1.414-1.453 1.453A8.96 8.96 0 0 1 21 11v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V11c0-2.125.736-4.078 1.968-5.618L3.515 3.93l1.414-1.414zM9 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2m6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2" />
  </Svg>
);
export default SvgAndroidLine;
