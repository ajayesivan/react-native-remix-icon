import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgGogglesFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M4.952 6.942C7.08 6.118 9.75 6 12 6c2.249 0 4.92.118 7.049.942 1.08.419 2.08 1.04 2.81 1.974C22.596 9.862 23 11.054 23 12.5c0 1.47-.525 2.933-1.38 4.042C20.77 17.647 19.503 18.5 18 18.5c-1.425 0-2.656-.79-3.575-1.38C13.72 16.667 12.883 16 12 16c-.883 0-1.72.667-2.425 1.12-.919.59-2.15 1.38-3.575 1.38-1.503 0-2.769-.852-3.62-1.958A6.744 6.744 0 011 12.5c0-1.446.402-2.638 1.142-3.584.729-.933 1.728-1.555 2.81-1.974z" />
    </Svg>
  );
}

export default SvgGogglesFill;
