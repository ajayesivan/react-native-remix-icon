import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgArrowDownWideLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 15.632l8.968-4.748-.936-1.768L12 13.368 3.968 9.116l-.936 1.768L12 15.632z" />
    </Svg>
  );
}

export default SvgArrowDownWideLine;
