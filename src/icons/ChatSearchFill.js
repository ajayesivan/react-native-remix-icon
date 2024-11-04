import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgChatSearchFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M6.455 19L2 22.5V4a1 1 0 011-1h18a1 1 0 011 1v8.803A6 6 0 0013.083 19H6.455zm17.495 2.535l-1.504-1.503a4 4 0 10-1.414 1.414l1.503 1.504 1.415-1.415zM21 18a2 2 0 11-4 0 2 2 0 014 0z" />
    </Svg>
  );
}

export default SvgChatSearchFill;
