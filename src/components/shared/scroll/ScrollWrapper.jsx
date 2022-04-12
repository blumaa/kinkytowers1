import * as React from "react";
import Status from "./Status";
import { motion } from 'framer-motion'



/**
 * ScrollWrapper directs the user to scroll the page to reveal it's children.
 * Use this on Modules that have scroll and/or observer triggers.
 */
const ScrollWrapper = ({ children, style, inView, ...props }) => {
  return (
    <div {...props} className='ScrollWrapper'>
      {/* <Status inView={inView} /> */}
      {children}
    </div>
  );
};

export default ScrollWrapper;

