import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgPaintingFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M15.526 3.526a3.5 3.5 0 1 1 4.949 4.949l-.17.172a.5.5 0 0 0 0 .707l.17.172a3.5 3.5 0 0 1 0 4.949l-.17.172a.5.5 0 0 0 0 .707l.17.172a3.5 3.5 0 0 1-4.95 4.949l-.171-.17a.5.5 0 0 0-.707 0l-.172.17a3.5 3.5 0 0 1-4.95 0l-.171-.17a.5.5 0 0 0-.707 0l-.172.17a3.5 3.5 0 0 1-4.95-4.95l.172-.171a.5.5 0 0 0 0-.707l-.171-.172a3.5 3.5 0 0 1 0-4.95l.17-.171a.5.5 0 0 0 0-.707l-.17-.172a3.5 3.5 0 1 1 4.949-4.95l.172.172a.5.5 0 0 0 .707 0l.172-.171a3.5 3.5 0 0 1 4.949 0l.172.17a.5.5 0 0 0 .707 0zM9.5 7.5a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2zm5 2v5h-5v-5z" />
  </Svg>
);
export default SvgPaintingFill;
