import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgShareLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M13.12 17.023l-4.199-2.29a4 4 0 110-5.465l4.2-2.29a4 4 0 11.958 1.755l-4.2 2.29a4.008 4.008 0 010 1.954l4.2 2.29a4 4 0 11-.959 1.755zM6 14a2 2 0 100-4 2 2 0 000 4zm11-6a2 2 0 100-4 2 2 0 000 4zm0 12a2 2 0 100-4 2 2 0 000 4z" />
    </Svg>
  );
}

export default SvgShareLine;
