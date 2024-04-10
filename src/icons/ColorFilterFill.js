import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgColorFilterFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M16.572 8.027a5 5 0 10-5.101 2.945 6.994 6.994 0 015.1-2.945zm-3.418 9.92a6.995 6.995 0 000-5.892 5 5 0 110 5.89zm-6.88-7.92a6.995 6.995 0 005.1 2.946 5 5 0 11-5.1-2.946z" />
    </Svg>
  );
}

export default SvgColorFilterFill;
