import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgExpandWidthFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M2 6v12h2V6zm7.45 1.05L4.5 12l4.947 4.947L9.448 13h5.102v3.95L19.5 12l-4.95-4.95V11H9.45zM20 6h2v12h-2z" />
  </Svg>
);
export default SvgExpandWidthFill;
