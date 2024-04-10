import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgGenderlessFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M11 7.066V1h2v6.066A7.501 7.501 0 0112 22a7.5 7.5 0 01-1-14.934z" />
    </Svg>
  );
}

export default SvgGenderlessFill;
