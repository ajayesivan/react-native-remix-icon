import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgHeartsFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M17.363 11.045a3.614 3.614 0 015.084 0 3.55 3.55 0 010 5.047L17 21.5l-5.447-5.408a3.55 3.55 0 010-5.047 3.614 3.614 0 015.084 0l.363.36.363-.36zm1.88-6.288a5.986 5.986 0 011.689 3.338A5.619 5.619 0 0017 8.808a5.617 5.617 0 00-6.856.818 5.55 5.55 0 00-.178 7.701l.178.185 2.421 2.404L11 21.485 2.52 12.993a6 6 0 018.48-8.464 5.998 5.998 0 018.242.228z" />
    </Svg>
  );
}

export default SvgHeartsFill;
