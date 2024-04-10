import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgEyeOffFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M4.52 5.935L1.394 2.808l1.414-1.414 19.799 19.798-1.414 1.415-3.31-3.31A10.949 10.949 0 0112 21c-5.392 0-9.878-3.88-10.818-9A10.982 10.982 0 014.52 5.935zm10.238 10.237l-1.464-1.464a3 3 0 01-4.001-4.001L7.829 9.243a5 5 0 006.929 6.929zM7.974 3.76C9.221 3.27 10.58 3 12 3c5.392 0 9.878 3.88 10.819 9a10.947 10.947 0 01-2.012 4.593l-3.86-3.86a5 5 0 00-5.68-5.68L7.975 3.76z" />
    </Svg>
  );
}

export default SvgEyeOffFill;
