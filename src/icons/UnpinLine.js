import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgUnpinLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="m20.97 17.172-1.414 1.414-3.535-3.535-.073.074-.707 3.536-1.415 1.414-4.242-4.243-4.95 4.95-1.414-1.414 4.95-4.95-4.243-4.243L5.34 8.761l3.536-.707.073-.074-3.536-3.536L6.828 3.03zM10.365 9.394l-.502.502-2.822.565 6.5 6.5.564-2.822.502-.502zm8.411.074-1.34 1.34 1.414 1.415 1.34-1.34.707.707 1.415-1.415-8.486-8.485-1.414 1.414.707.707-1.34 1.34 1.414 1.415 1.34-1.34z" />
  </Svg>
);
export default SvgUnpinLine;
