import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgGlasses2Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M3.015 10.988c.03-1.535.11-2.52.34-3.667.331-1.658.954-2.659 2.2-3.489l-1.11-1.664c-1.755 1.17-2.633 2.669-3.051 4.76-.52 2.6-.398 7.936-.395 8.07V15a5 5 0 109.935-.806c.33-.125.69-.194 1.065-.194.376 0 .734.069 1.065.194a5 5 0 109.935.806s.132-5.439-.394-8.071c-.419-2.092-1.296-3.591-3.05-4.761l-1.11 1.664c1.245.83 1.867 1.831 2.199 3.49.229 1.145.31 2.131.34 3.666A4.978 4.978 0 0017.998 10a4.995 4.995 0 00-4.224 2.325A4.99 4.99 0 0011.998 12a4.99 4.99 0 00-1.775.325A4.996 4.996 0 005.999 10a4.978 4.978 0 00-2.984.988zM3 15a3 3 0 116 0 3 3 0 01-6 0zm12.168-.994A3.002 3.002 0 0121 15a3 3 0 11-5.832-.994z" />
    </Svg>
  );
}

export default SvgGlasses2Line;
