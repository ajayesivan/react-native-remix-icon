import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMailSendLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M21 3a1 1 0 011 1v16.007a1 1 0 01-.992.993H2.992A.993.993 0 012 20.007V19h18V7.3l-8 7.2-10-9V4a1 1 0 011-1h18zM8 15v2H0v-2h8zm-3-5v2H0v-2h5zm14.566-5H4.434L12 11.81 19.566 5z" />
    </Svg>
  );
}

export default SvgMailSendLine;
