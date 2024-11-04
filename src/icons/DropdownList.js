import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgDropdownList(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M4 5v14h9v2H3a1 1 0 01-1-1V4a1 1 0 011-1h18a1 1 0 011 1v5h-2V5H4zm15.707 6.293L19 10.586l-.707.707-3 3 1.414 1.414L19 13.414l2.293 2.293 1.414-1.414-3-3zm-3 6L19 19.586l2.293-2.293 1.414 1.414-3 3-.707.707-.707-.707-3-3 1.414-1.414z" />
    </Svg>
  );
}

export default SvgDropdownList;
