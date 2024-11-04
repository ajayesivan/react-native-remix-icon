import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgArrowUpDoubleLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 4.836l-6.207 6.207 1.414 1.414L12 7.664l4.793 4.793 1.414-1.414L12 4.836zm0 5.65l-6.207 6.207 1.414 1.414L12 13.314l4.793 4.793 1.414-1.414L12 10.486z" />
    </Svg>
  );
}

export default SvgArrowUpDoubleLine;
