import React from "react";
import { GlobalStyles } from "twin.macro";

// https://github.com/ben-rogerson/twin.macro/issues/327#issuecomment-825636435

export const wrapPageElement = ({ element, props }) => (
  <>
    <GlobalStyles />
    {element}
  </>
);
