import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFlutterLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M14.598 10.684h2.828l-5.657 5.658 5.657 5.656h-2.828L8.94 16.341l5.657-5.657zm-.194-8.68h2.829L5.919 13.318l-1.414-1.414 9.9-9.9z" />
    </Svg>
  );
}

export default SvgFlutterLine;
