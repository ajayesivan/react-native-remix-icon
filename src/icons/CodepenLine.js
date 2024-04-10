import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCodepenLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M16.5 13.202L13 15.535v3.596L19.197 15 16.5 13.202zM14.697 12L12 10.202 9.303 12 12 13.798 14.697 12zM20 10.868L18.303 12 20 13.132v-2.264zM19.197 9L13 4.869v3.596l3.5 2.333L19.197 9zM7.5 10.798L11 8.465V4.869L4.803 9 7.5 10.798zM4.803 15L11 19.131v-3.596l-3.5-2.333L4.803 15zM4 13.132L5.697 12 4 10.868v2.264zM2 9a1 1 0 01.445-.832l9-6a1 1 0 011.11 0l9 6A1 1 0 0122 9v6a1 1 0 01-.445.832l-9 6a1 1 0 01-1.11 0l-9-6A1 1 0 012 15V9z" />
    </Svg>
  );
}

export default SvgCodepenLine;
