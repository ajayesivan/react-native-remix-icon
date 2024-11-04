import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPlayCircleFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zM10.622 8.415a.4.4 0 00-.622.332v6.506a.4.4 0 00.622.332l4.879-3.252a.401.401 0 000-.666l-4.88-3.252z" />
    </Svg>
  );
}

export default SvgPlayCircleFill;
