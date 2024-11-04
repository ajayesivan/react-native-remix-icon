import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPokerClubsFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M13.775 11.04C14.933 9.266 16 7.632 16 6a4 4 0 00-8 0c0 1.633 1.067 3.267 2.225 5.04h.001l.234.359c-.29-.22-.557-.43-.808-.626C8.276 9.697 7.386 9 6 9a4 4 0 000 8c1.633 0 3.267-1.067 5.04-2.225l.03-.02c-.093 2.281-.958 3.683-1.913 5.23l-.369.602c-.384.636.087 1.413.83 1.413h4.764c.743 0 1.214-.777.83-1.413a72.98 72.98 0 00-.369-.602c-.955-1.547-1.82-2.949-1.913-5.23l.03.02C14.734 15.933 16.368 17 18 17a4 4 0 000-8c-1.386 0-2.276.697-3.652 1.773-.251.197-.518.406-.808.626l.235-.36z" />
    </Svg>
  );
}

export default SvgPokerClubsFill;