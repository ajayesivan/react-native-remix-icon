import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSkipLeftFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M7 18V6h2v12H7zm4-6l6-6v12l-6-6z" />
    </Svg>
  );
}

export default SvgSkipLeftFill;
