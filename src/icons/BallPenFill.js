import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBallPenFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M17.85 11.805l-.708-.707-9.9 9.9H3v-4.243L14.314 5.44l5.657 5.657a1 1 0 010 1.414l-7.072 7.071-1.414-1.414 6.364-6.364zm.706-9.192l2.829 2.828a1 1 0 010 1.414L19.97 8.27l-4.243-4.242 1.414-1.414a1 1 0 011.414 0z" />
    </Svg>
  );
}

export default SvgBallPenFill;
