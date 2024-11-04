import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgPenNibLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="m16.596 1.037 6.347 6.346a.5.5 0 0 1-.277.848l-1.474.23-5.656-5.657.212-1.485a.5.5 0 0 1 .848-.282M4.595 20.147c3.722-3.33 7.995-4.327 12.643-5.52l.446-4.017-4.297-4.298-4.018.447c-1.192 4.648-2.189 8.92-5.52 12.643l-1.395-1.395c2.829-3.3 3.89-6.953 5.303-13.081l6.364-.708 5.657 5.657-.707 6.364c-6.128 1.415-9.782 2.475-13.081 5.304zm5.284-6.029a2 2 0 1 1 2.828-2.828 2 2 0 0 1-2.828 2.828" />
  </Svg>
);
export default SvgPenNibLine;
