import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgPaintLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="m19.228 18.732 1.767-1.767 1.768 1.767a2.5 2.5 0 1 1-3.535 0M8.878 1.08l11.314 11.313a1 1 0 0 1 0 1.415l-8.485 8.485a1 1 0 0 1-1.414 0l-8.485-8.485a1 1 0 0 1 0-1.415l7.778-7.778-2.122-2.121zM11 6.03 3.929 13.1l7.07 7.072 7.072-7.071z" />
  </Svg>
);
export default SvgPaintLine;
