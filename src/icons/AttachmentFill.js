import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgAttachmentFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M20.997 2.992L21 21.008a1 1 0 01-.993.992H3.993A.993.993 0 013 21.008V2.992A1 1 0 013.993 2h16.01c.549 0 .994.444.994.992zM9 13V9a1 1 0 012 0v4a1 1 0 102 0V9a3 3 0 10-6 0v4a5 5 0 0010 0V8h-2v5a3 3 0 11-6 0z" />
    </Svg>
  );
}

export default SvgAttachmentFill;
