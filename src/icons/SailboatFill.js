import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSailboatFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M3 18h18a.5.5 0 01.4.8l-2.1 2.8a1 1 0 01-.8.4h-13a1 1 0 01-.8-.4l-2.1-2.8A.5.5 0 013 18zM15 2.425V15a1 1 0 01-1 1H4.04a.5.5 0 01-.39-.812L14.11 2.113a.5.5 0 01.89.312z" />
    </Svg>
  );
}

export default SvgSailboatFill;
