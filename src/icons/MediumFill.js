import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgMediumFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M13.41 12.007c0 3.45-2.779 6.247-6.205 6.247S1 15.458 1 12.007 3.778 5.76 7.205 5.76s6.204 2.797 6.204 6.247m6.806 0c0 3.248-1.39 5.88-3.102 5.88-1.714 0-3.103-2.633-3.103-5.88s1.39-5.88 3.103-5.88 3.102 2.633 3.102 5.88m2.784 0c0 2.91-.489 5.269-1.091 5.269-.603 0-1.091-2.36-1.091-5.269s.488-5.269 1.091-5.269S23 9.098 23 12.008" />
  </Svg>
);
export default SvgMediumFill;
