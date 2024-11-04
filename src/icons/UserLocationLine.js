import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgUserLocationLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M12 14v2a6 6 0 0 0-6 6H4a8 8 0 0 1 8-8m0-1c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6m0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m8.828 10.071L18 24l-2.828-2.929c-1.562-1.618-1.562-4.24 0-5.858a3.904 3.904 0 0 1 5.656 0c1.563 1.618 1.563 4.24 0 5.858m-1.438-1.39c.813-.842.813-2.236 0-3.079a1.904 1.904 0 0 0-2.78 0c-.813.843-.813 2.237 0 3.08L18 21.12z" />
  </Svg>
);
export default SvgUserLocationLine;
