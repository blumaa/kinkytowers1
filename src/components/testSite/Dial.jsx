import * as React from "react"
import { motion, useMotionValue, useTransform } from "framer-motion"

const dialVariants = {
  initial: {
    rotate: 0
  },
  visible: {
    rotate: 90
  }
}

const Dial = () => {
  const x = useMotionValue(0)
  const scale = useTransform(x, [-150, 150], [1.5, 0.5])
  const rotate = useTransform(x, [-150, 150], [-90, 90])

  return (
    <>
      <motion.div className="DialWrapper"
        style={{
          x: x,
          // scale: scale,
          rotate: rotate,
          cursor: "grab",
        }}
        drag="x"
        dragConstraints={{ left: -150, right: 150 }}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
        whileTap={{ cursor: "grabbing" }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" viewBox="0 0 401.89 401.89" className="Dial"
        >
          <path d="M200.947 98.829c-56.305 0-102.112 45.807-102.112 102.112s45.807 102.112 102.112 102.112c56.304 0 102.112-45.808 102.112-102.112S257.251 98.829 200.947 98.829zm0 189.224c-48.034 0-87.112-39.079-87.112-87.112s39.078-87.112 87.112-87.112 87.112 39.078 87.112 87.112-39.078 87.112-87.112 87.112zm0-196.99c18.589 0 33.713-15.124 33.713-33.713s-15.124-33.713-33.713-33.713c-18.59 0-33.713 15.124-33.713 33.713s15.123 33.713 33.713 33.713zm0-52.427c10.319 0 18.713 8.395 18.713 18.713s-8.395 18.713-18.713 18.713c-10.318 0-18.713-8.395-18.713-18.713s8.395-18.713 18.713-18.713zm0 272.183c-18.59 0-33.713 15.124-33.713 33.713s15.124 33.713 33.713 33.713 33.713-15.124 33.713-33.713-15.124-33.713-33.713-33.713zm0 52.427c-10.318 0-18.713-8.395-18.713-18.713s8.395-18.713 18.713-18.713c10.319 0 18.713 8.395 18.713 18.713s-8.394 18.713-18.713 18.713zm-80.521-254.095c2.905.778 5.852 1.163 8.781 1.163 5.841 0 11.607-1.532 16.802-4.531 16.099-9.295 21.634-29.954 12.34-46.053-4.502-7.799-11.772-13.377-20.471-15.708s-17.784-1.135-25.583 3.368c-7.799 4.502-13.377 11.772-15.708 20.471-2.331 8.699-1.135 17.784 3.368 25.583 4.502 7.798 11.772 13.376 20.471 15.707zm-9.351-37.407c1.294-4.829 4.391-8.864 8.719-11.363 2.94-1.697 6.152-2.503 9.325-2.503 6.472 0 12.775 3.356 16.238 9.353 5.159 8.936 2.086 20.404-6.85 25.563-4.329 2.5-9.373 3.162-14.2 1.87-4.828-1.294-8.864-4.39-11.363-8.719-2.498-4.33-3.162-9.373-1.869-14.201zm144.811 224.355c-16.099 9.295-21.634 29.955-12.34 46.053 6.238 10.803 17.593 16.849 29.254 16.849 5.715 0 11.505-1.453 16.8-4.51 16.099-9.295 21.634-29.955 12.34-46.053-4.502-7.799-11.772-13.377-20.471-15.708-8.7-2.331-17.785-1.133-25.583 3.369zm33.063 19.839c5.159 8.936 2.086 20.403-6.85 25.563-8.934 5.16-20.404 2.086-25.563-6.85-5.159-8.936-2.086-20.403 6.85-25.563 4.33-2.5 9.376-3.162 14.2-1.87 4.829 1.295 8.864 4.391 11.363 8.72zM59.736 158.341c5.195 3 10.96 4.532 16.802 4.531 2.928 0 5.876-.385 8.78-1.163 8.698-2.331 15.969-7.909 20.471-15.708 4.503-7.799 5.699-16.884 3.368-25.583-2.331-8.698-7.909-15.968-15.708-20.471-16.099-9.293-36.758-3.758-46.053 12.34-9.294 16.101-3.759 36.76 12.34 46.054zm.65-38.553c3.462-5.997 9.765-9.353 16.238-9.353 3.172 0 6.386.807 9.325 2.503 4.329 2.5 7.425 6.535 8.719 11.363 1.293 4.828.629 9.871-1.87 14.2-2.499 4.329-6.535 7.426-11.363 8.719-4.829 1.294-9.871.629-14.2-1.87-8.935-5.158-12.007-16.625-6.849-25.562zm30.683 81.153c0-18.59-15.124-33.713-33.713-33.713s-33.713 15.124-33.713 33.713 15.124 33.713 33.713 33.713 33.713-15.123 33.713-33.713zm-52.427 0c0-10.318 8.395-18.713 18.713-18.713s18.713 8.395 18.713 18.713-8.395 18.713-18.713 18.713-18.713-8.395-18.713-18.713zm70.515 80.522c2.331-8.699 1.135-17.784-3.368-25.583-4.502-7.799-11.772-13.377-20.471-15.708s-17.784-1.134-25.583 3.368c-16.099 9.294-21.634 29.954-12.34 46.053 6.237 10.804 17.593 16.85 29.253 16.85 5.715 0 11.504-1.453 16.8-4.51 7.8-4.502 13.379-11.772 15.709-20.47zm-14.488-3.883c-1.294 4.829-4.391 8.864-8.719 11.363-8.938 5.159-20.404 2.086-25.563-6.85-5.159-8.937-2.086-20.404 6.85-25.563 2.884-1.665 6.083-2.515 9.326-2.515 1.625 0 3.262.214 4.874.646 4.828 1.294 8.864 4.39 11.363 8.719 2.498 4.329 3.162 9.372 1.869 14.2zm51.339 18.519c-7.799-4.503-16.884-5.7-25.583-3.368-8.698 2.331-15.968 7.909-20.471 15.708s-5.699 16.884-3.368 25.583c2.331 8.698 7.909 15.968 15.708 20.471 5.195 3 10.959 4.531 16.802 4.531 2.928 0 5.876-.385 8.781-1.163 8.698-2.331 15.968-7.909 20.471-15.708 9.294-16.1 3.759-36.759-12.34-46.054zm-.65 38.553c-5.159 8.937-16.625 12.009-25.563 6.85-4.329-2.5-7.425-6.535-8.719-11.363-1.293-4.828-.629-9.871 1.87-14.2 2.499-4.329 6.535-7.425 11.363-8.719 1.612-.432 3.249-.646 4.874-.646 3.243 0 6.443.851 9.326 2.515 8.935 5.159 12.008 16.627 6.849 25.563zm110.528-228.869c5.195 3 10.96 4.531 16.802 4.531 2.929 0 5.877-.385 8.781-1.163 8.698-2.331 15.969-7.909 20.471-15.708 9.294-16.099 3.759-36.758-12.34-46.053-16.096-9.293-36.759-3.76-46.054 12.34-9.294 16.099-3.759 36.758 12.34 46.053zm.65-38.553c3.463-5.997 9.766-9.354 16.238-9.354 3.173 0 6.386.807 9.325 2.503 8.936 5.16 12.009 16.627 6.85 25.563-2.499 4.329-6.534 7.425-11.363 8.719-4.828 1.292-9.87.629-14.2-1.87-8.936-5.158-12.009-16.625-6.85-25.561z" fill="#fff" />
          <path d="m389.064 294.129-8.073-3.917c13.683-27.581 20.899-58.272 20.899-89.272C401.89 90.141 311.749 0 200.95 0 90.146 0 0 90.141 0 200.94c0 110.804 90.146 200.95 200.95 200.95 31.911 0 62.427-7.264 90.699-21.591 24.314-12.321 46.17-29.785 63.697-50.782l5.663 6.145c1.426 1.547 3.429 2.417 5.514 2.417.211 0 .423-.009.635-.027 2.309-.196 4.397-1.448 5.658-3.392l19.266-29.701c1.171-1.804 1.51-4.024.933-6.095-.577-2.072-2.017-3.796-3.951-4.735zm-104.195 72.789c-26.151 13.252-54.386 19.972-83.919 19.972C98.417 386.89 15 303.473 15 200.94 15 98.412 98.417 15 200.95 15c102.528 0 185.94 83.412 185.94 185.94 0 28.737-6.697 57.18-19.393 82.726l-62.793-30.464c-3.242-1.574-7.146-.617-9.294 2.275-2.149 2.893-1.937 6.906.506 9.556l49.177 53.358c-16.432 20.118-37.134 36.827-60.224 48.527zm80.621-48.528-31.715-34.412 41.102 19.941-9.387 14.471z" fill="#fff" />
        </svg>
      </motion.div>
      <button onClick={() => console.log('rotate', rotate.current)}>click</button>
    </>
  )

}

export default Dial
