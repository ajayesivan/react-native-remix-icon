import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgRulerLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M6.343 14.728l-2.828 2.829 3.535 3.535L20.485 7.657 16.95 4.121l-2.121 2.122 1.414 1.414-1.414 1.414-1.415-1.414-2.121 2.121 2.121 2.122L12 13.314 9.88 11.193l-2.122 2.12 1.415 1.415-1.415 1.414-1.414-1.414zM17.657 2l4.95 4.95a1 1 0 010 1.414l-14.85 14.85a1 1 0 01-1.414 0l-4.95-4.95a1 1 0 010-1.415L16.243 2a1 1 0 011.414 0z" />
    </Svg>
  );
}

export default SvgRulerLine;
