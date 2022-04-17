import * as React from "react"

const SvgComponent = ({fill}) => (
  <svg style={{ height: ".5rem"}} className="star-container" viewBox="-21 -21 42 42" >
    <path
      className="star-shape"
      stroke={`#${fill}`}
      fill={`#${fill}`}
      strokeWidth="2"
      d="m0-20 3.708 8.587 8.048-4.767-2.048 9.127 9.313.873L12 0l7.021 6.18-9.313.873 2.048 9.127-8.048-4.767L0 20l-3.708-8.587-8.048 4.767 2.048-9.127-9.313-.873L-12 0l-7.021-6.18 9.313-.873-2.048-9.127 8.048 4.767z"
    />
  </svg>
)

export default SvgComponent

