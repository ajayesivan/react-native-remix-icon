import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgEdit2Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M5 18.89h1.414l9.314-9.314-1.414-1.414L5 17.476v1.414zm16 2H3v-4.243L16.435 3.212a1 1 0 011.414 0l2.829 2.829a1 1 0 010 1.414L9.243 18.89H21v2zM15.728 6.748l1.414 1.414 1.414-1.414-1.414-1.414-1.414 1.414z" />
    </Svg>
  );
}

export default SvgEdit2Line;
