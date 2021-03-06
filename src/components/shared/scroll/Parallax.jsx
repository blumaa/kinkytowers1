import React from 'react'
import {
  motion,
  useViewportScroll,
  useTransform,
  useSpring,
} from 'framer-motion'

const Parallax = ({ children, zIndex, offset = 0, horizontal, diagonal }) => {
  const [elementTop, setElementTop] = React.useState(0)
  const [clientHeight, setClientHeight] = React.useState(0)
  const ref = React.useRef(null)
  const { scrollY } = useViewportScroll()
  // start animating our element when we've scrolled it into view
  const initial = elementTop - clientHeight
  // end our animation when we've scrolled the offset specified
  const final = elementTop + offset

  const yRange = useTransform(scrollY, [initial, final], [offset, -offset])
  // apply a spring to ease the result
  const y = useSpring(yRange, { stiffness: 400, damping: 90 })

  React.useLayoutEffect(() => {
    const element = ref.current
    // save our layout measurements in a function in order to trigger
    // it both on mount and on resize
    const onResize = () => {
      // use getBoundingClientRect instead of offsetTop in order to
      // get the offset relative to the viewport
      setElementTop(
        element.getBoundingClientRect().top + window.scrollY ||
          window.pageYOffset
      )
      setClientHeight(window.innerHeight)
    }
    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [ref])

  // const y = useTransform(scrollY, [100, 200], [0, 500]);

  const defaultStyle = {
    y: y,
    zIndex,
  }
  const isHorizontal = (style) => {
    if (horizontal) {
      style = {
        x: y,
        zIndex,
      }
    }
    if (diagonal) {
      style = {
        x: y,
        y: y,
        zIndex,
      }
    }

    return style
  }
  return (
    <motion.div
      ref={ref}
      style={{
        ...isHorizontal(defaultStyle),
        display: 'flex',
        justifyContent: 'center',
        // border: "1px solid yellow"
      }}
    >
      {children}
    </motion.div>
  )
}

export default Parallax
