import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPieChart2Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 .5C18.351.5 23.5 5.649 23.5 12c0 .337-.015.67-.043 1h-1.506c-.502 5.053-4.766 9-9.951 9-5.523 0-10-4.477-10-10 0-5.185 3.947-9.449 9-9.95V.542c.33-.029.663-.043 1-.043zm-1 3.562A8.001 8.001 0 0012 20a8.001 8.001 0 007.938-7H11V4.062zm2-1.51V11h8.448A9.503 9.503 0 0013 2.552z" />
    </Svg>
  );
}

export default SvgPieChart2Line;
