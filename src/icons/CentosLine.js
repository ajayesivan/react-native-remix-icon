import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgCentosLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="m12 2 4.292 4.292 1.061-1.06L16.121 4H20v3.879l-1.233-1.233-1.06 1.061L22 12l-4.292 4.293 1.059 1.059L20 16.121V20h-3.88l1.232-1.233-1.059-1.06L12 22l-4.293-4.293-1.061 1.06L7.879 20H4v-3.88l1.231 1.232 1.061-1.06L2 12l4.293-4.293-1.062-1.061L4 7.879V4h3.879L6.646 5.23l1.062 1.062zm0 11.413-2.88 2.879 2.88 2.88 2.879-2.88zM7.707 9.12 4.828 12l2.878 2.878 2.88-2.88zm8.585 0-2.877 2.878 2.878 2.879L19.172 12zM12 4.828 9.122 7.707l2.879 2.878 2.877-2.879z" />
  </Svg>
);
export default SvgCentosLine;
