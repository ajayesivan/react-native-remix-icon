import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgLink(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M18.364 15.536L16.95 14.12l1.414-1.414a5 5 0 00-7.071-7.071L9.878 7.05 8.464 5.636l1.414-1.414a7 7 0 019.9 9.9l-1.414 1.414zm-2.829 2.828l-1.414 1.414a7 7 0 01-9.9-9.9l1.415-1.414L7.05 9.88l-1.414 1.414a5 5 0 007.07 7.071l1.415-1.414 1.414 1.414zm-.707-10.607l1.415 1.415-7.072 7.07-1.414-1.414 7.071-7.07z" />
    </Svg>
  );
}

export default SvgLink;
