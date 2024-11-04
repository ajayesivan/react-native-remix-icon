import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgCapsuleFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M19.779 4.222a6 6 0 0 1 0 8.485l-2.122 2.12-4.95 4.951a6 6 0 0 1-8.485-8.485l7.071-7.071a6 6 0 0 1 8.486 0m-4.95 10.606L9.172 9.172l-3.536 3.535a4 4 0 0 0 5.657 5.657z" />
  </Svg>
);
export default SvgCapsuleFill;
