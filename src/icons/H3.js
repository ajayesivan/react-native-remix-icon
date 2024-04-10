import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgH3(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M22 8l-.002 2-2.505 2.883a3.752 3.752 0 01-.993 7.367 3.751 3.751 0 01-3.682-3.033l1.964-.382a1.75 1.75 0 10.924-1.895l-1.307-1.547L19.35 10H15V8h7zM4 4v7h7V4h2v16h-2v-7H4v7H2V4h2z" />
    </Svg>
  );
}

export default SvgH3;
