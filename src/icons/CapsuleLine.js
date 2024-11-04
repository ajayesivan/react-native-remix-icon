import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgCapsuleLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M19.779 4.222a6 6 0 0 1 0 8.485l-7.071 7.071a6 6 0 0 1-8.486-8.485l7.071-7.071a6 6 0 0 1 8.486 0m-5.657 11.313L8.466 9.878l-2.83 2.83a4 4 0 0 0 5.657 5.656zm4.242-9.899a4 4 0 0 0-5.657 0L9.88 8.464l5.657 5.657 2.827-2.828a4 4 0 0 0 0-5.657" />
  </Svg>
);
export default SvgCapsuleLine;
