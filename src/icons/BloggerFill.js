import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBloggerFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M19.822 9.729H18.73a1.113 1.113 0 01-1.093-1.094A5.636 5.636 0 0012 3H8.636A5.636 5.636 0 003 8.635v6.73A5.636 5.636 0 008.636 21h6.729A5.636 5.636 0 0021 15.364v-4.458a1.15 1.15 0 00-1.178-1.177zM8.552 7.542h4.037c.589 0 1.093.504 1.093 1.093S13.178 9.73 12.59 9.73H8.55a1.113 1.113 0 01-1.093-1.094c0-.589.505-1.093 1.093-1.093zm6.897 8.916H8.636a1.113 1.113 0 01-1.094-1.094c0-.589.505-1.093 1.094-1.093h6.813c.588 0 1.093.504 1.093 1.093s-.505 1.094-1.093 1.094z" />
    </Svg>
  );
}

export default SvgBloggerFill;
