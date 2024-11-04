import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgLinkUnlink = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M17 17h5v2h-3v3h-2zM7 7H2V5h3V2h2zm11.364 8.536L16.95 14.12l1.414-1.414a5 5 0 0 0-7.071-7.071L9.879 7.05 8.464 5.636 9.88 4.222a7 7 0 0 1 9.9 9.9zm-2.828 2.828-1.415 1.414a7 7 0 0 1-9.9-9.9l1.415-1.414L7.05 9.88l-1.414 1.414a5 5 0 0 0 7.071 7.071l1.414-1.414zm-.708-10.607 1.415 1.415-7.071 7.07-1.415-1.414z" />
  </Svg>
);
export default SvgLinkUnlink;
