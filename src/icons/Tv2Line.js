import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgTv2Line = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M2 4c0-.552.455-1 .992-1h18.016c.548 0 .992.445.992 1v14c0 .552-.455 1-.992 1H2.992A.994.994 0 0 1 2 18zm2 1v12h16V5zm1 15h14v2H5z" />
  </Svg>
);
export default SvgTv2Line;
