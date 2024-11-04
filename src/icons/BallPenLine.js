import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBallPenLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M17.85 11.698l-.708-.707-9.9 9.9H3v-4.243L14.314 5.334l5.657 5.657a1 1 0 010 1.414l-7.072 7.072-1.414-1.415 6.364-6.364zm-2.122-2.121l-1.414-1.414L5 17.477v1.414h1.414l9.314-9.314zm2.828-7.071l2.829 2.828a1 1 0 010 1.415L19.97 8.163 15.728 3.92l1.414-1.414a1 1 0 011.414 0z" />
    </Svg>
  );
}

export default SvgBallPenLine;
