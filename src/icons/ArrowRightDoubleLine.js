import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgArrowRightDoubleLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M19.164 12l-6.207-6.207-1.414 1.414L16.336 12l-4.793 4.793 1.414 1.414L19.164 12zm-5.65 0L7.307 5.793 5.893 7.207 10.686 12l-4.793 4.793 1.414 1.414L13.514 12z" />
    </Svg>
  );
}

export default SvgArrowRightDoubleLine;
