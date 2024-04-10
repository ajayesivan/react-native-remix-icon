import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgGraduationCapFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 2L0 9l12 7 10-5.833V17.5h2V9L12 2zM3.999 13.49V18a9.985 9.985 0 008 4A9.985 9.985 0 0020 18v-4.509l-8 4.667L4 13.49z" />
    </Svg>
  );
}

export default SvgGraduationCapFill;
