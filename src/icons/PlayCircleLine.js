import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPlayCircleLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zM10.622 8.415l4.879 3.252a.4.4 0 010 .666l-4.88 3.252a.4.4 0 01-.621-.332V8.747a.4.4 0 01.622-.332z" />
    </Svg>
  );
}

export default SvgPlayCircleLine;
