import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgXrpFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M21.778 4h-2.837l-4.49 4.371a3.522 3.522 0 01-2.451.99 3.522 3.522 0 01-2.452-.99L5.062 4h-2.84L8.13 9.754c2.14 2.083 5.607 2.083 7.745 0L21.778 4zM2.223 20H5.05l4.508-4.385a3.51 3.51 0 012.443-.985c.914 0 1.792.354 2.443.985L18.952 20h2.826l-5.92-5.761c-2.132-2.073-5.585-2.073-7.715 0L2.223 20z" />
    </Svg>
  );
}

export default SvgXrpFill;
