import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgMagicFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="m15.224 15.508-2.213 4.65a.6.6 0 0 1-.977.155l-3.542-3.739a.6.6 0 0 0-.358-.182l-5.106-.668a.6.6 0 0 1-.45-.881l2.462-4.524a.6.6 0 0 0 .063-.396L4.16 4.86a.6.6 0 0 1 .7-.7l5.062.943a.6.6 0 0 0 .397-.063l4.523-2.46a.6.6 0 0 1 .882.448l.668 5.107a.6.6 0 0 0 .182.357l3.739 3.542a.6.6 0 0 1-.155.977l-4.65 2.213a.6.6 0 0 0-.284.284m.797 1.927 1.414-1.414 4.243 4.242-1.415 1.415z" />
  </Svg>
);
export default SvgMagicFill;
