import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgBilliardsLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16m0 2a6 6 0 1 1 0 12 6 6 0 0 1 0-12m0 1.75a2.5 2.5 0 0 0-1.88 4.147c-.565.457-.92 1.118-.92 1.853 0 1.38 1.254 2.5 2.8 2.5s2.8-1.12 2.8-2.5c0-.735-.355-1.396-.92-1.852A2.5 2.5 0 0 0 12 7.75m0 5c.754 0 1.3.488 1.3 1s-.546 1-1.3 1-1.3-.488-1.3-1 .547-1 1.3-1m0-3.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
  </Svg>
);
export default SvgBilliardsLine;
