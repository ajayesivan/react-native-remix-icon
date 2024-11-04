import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgTravestiFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M7.537 9.95L4.662 7.076 2.187 9.55.772 8.136l6.364-6.364 1.415 1.414-2.475 2.475L8.95 8.537A7.5 7.5 0 117.537 9.95z" />
    </Svg>
  );
}

export default SvgTravestiFill;
