import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSchoolLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 .586l6 6V9h4v10h1v2H1v-2h1V9h4V6.586l6-6zM18 19h2v-8h-2v8zM6 11H4v8h2v-8zm2-3.586V19h3v-7h2v7h3V7.414l-4-4-4 4z" />
    </Svg>
  );
}

export default SvgSchoolLine;
