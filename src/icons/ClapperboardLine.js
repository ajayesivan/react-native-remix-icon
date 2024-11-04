import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgClapperboardLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="m5.998 7 2.31-4h3.69l-2.31 4zm6 0 2.31-4h3.69l-2.31 4zm6 0 2.31-4h.7c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3h3.006L4 6.46V19h16V7z" />
  </Svg>
);
export default SvgClapperboardLine;
