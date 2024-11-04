import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgGiftFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M15.005 2.003a4 4 0 0 1 3.464 6h4.536v2h-2v10a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1v-10h-2v-2H5.54a4 4 0 0 1 6.465-4.646 3.98 3.98 0 0 1 2.999-1.354m-2 8h-2v10h2zm-4-6a2 2 0 0 0-.15 3.994l.15.006h2v-2a2 2 0 0 0-1.697-1.977l-.154-.018zm6 0a2 2 0 0 0-1.995 1.85l-.005.15v2h2a2 2 0 0 0 1.994-1.85l.006-.15a2 2 0 0 0-2-2" />
  </Svg>
);
export default SvgGiftFill;
