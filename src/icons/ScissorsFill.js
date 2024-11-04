import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgScissorsFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M9.683 7.559L12 9.875l6.374-6.374a2 2 0 012.829 0l.707.707L9.683 16.435a4 4 0 11-2.121-2.121l2.317-2.317L7.562 9.68A4 4 0 119.683 7.56zM6 7.997a2 2 0 100-4 2 2 0 000 4zm0 12a2 2 0 100-4 2 2 0 000 4zm9.535-6.587l6.375 6.375-.707.707a2 2 0 01-2.829 0l-4.96-4.96 2.12-2.122z" />
    </Svg>
  );
}

export default SvgScissorsFill;
