import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgParenthesesFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M6.923 21C5.113 18.664 4 15.493 4 12s1.113-6.664 2.923-9h2.014C7.235 5.388 6.2 8.542 6.2 12s1.035 6.612 2.737 9zm10.151 0H15.06c1.702-2.388 2.737-5.542 2.737-9s-1.035-6.612-2.737-9h2.014c1.81 2.336 2.923 5.507 2.923 9s-1.112 6.664-2.923 9" />
  </Svg>
);
export default SvgParenthesesFill;
