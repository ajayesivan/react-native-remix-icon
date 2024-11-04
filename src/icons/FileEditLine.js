import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgFileEditLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="m21 6.757-2 2V4h-9v5H5v11h14v-2.757l2-2v5.765a.993.993 0 0 1-.993.992H3.993A1 1 0 0 1 3 20.993V8l6.003-6h10.995C20.55 2 21 2.455 21 2.992zm.778 2.05 1.414 1.415L15.414 18l-1.416-.002.002-1.412z" />
  </Svg>
);
export default SvgFileEditLine;
