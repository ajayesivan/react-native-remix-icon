import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgRocket2Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M15.502 20.005A6.522 6.522 0 0112 23.507a6.523 6.523 0 01-3.502-3.502h2.26c.326.488.747.912 1.242 1.243.495-.33.916-.755 1.242-1.243h2.26zM18 14.81l2 2.268v1.927H4v-1.927l2-2.268V9.005c0-3.483 2.504-6.447 6-7.545 3.496 1.098 6 4.062 6 7.545v5.804zm-.73 2.195L16 15.565v-6.56c0-2.318-1.57-4.43-4-5.421-2.43.99-4 3.103-4 5.42v6.561l-1.27 1.44h10.54zm-5.27-6a2 2 0 110-4 2 2 0 010 4z" />
    </Svg>
  );
}

export default SvgRocket2Line;
