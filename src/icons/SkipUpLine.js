import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSkipUpLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 13.914l4.793 4.793 1.414-1.414L12 11.086l-6.207 6.207 1.414 1.414L12 13.914zM6 7h12v2H6V7z" />
    </Svg>
  );
}

export default SvgSkipUpLine;
