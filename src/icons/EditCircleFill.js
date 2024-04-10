import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgEditCircleFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M16.626 3.128L9.29 10.463 9.3 14.71l4.238-.008 7.331-7.33A9.956 9.956 0 0122 11.996c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10c1.669 0 3.242.409 4.626 1.131zm3.86-1.03l1.413 1.413-9.192 9.193-1.412.002-.002-1.416 9.192-9.193z" />
    </Svg>
  );
}

export default SvgEditCircleFill;
