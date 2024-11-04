import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFirebaseLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M9.223 8.707l-2.312 4.334 1.09-6.715 1.222 2.381zm1.145-2.148L7.695 1.353a.5.5 0 00-.938.148L4 18.5l1.748 1.093 5.192 3.244a2 2 0 002.12 0L20 18.5 18.142 5.961a.5.5 0 00-.841-.287l-2.735 2.637-2.125-3.984a.5.5 0 00-.882 0l-1.19 2.232zm2.701 3.196L8.667 14 12 7.75l1.07 2.005zm-5.837 8.407l9.36-9.025 1.238 8.36L12 21.143l-4.768-2.98z" />
    </Svg>
  );
}

export default SvgFirebaseLine;
