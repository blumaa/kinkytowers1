import React from 'react'
import { motion, Reorder } from 'framer-motion'

import { Icon1, Icon2, Icon3, Icon4, Icon5, Icon6, Icon7, Icon8, Icon9 } from '../../assets/images/monster-character-svgs2/index'

import Lock from './icons/Lock'
// const initialMonsters = ["🍅 Tomato", "🥒 Cucumber", "🧀 Cheese", "🥬 Lettuce"];
const monsterArray = [
  { component: <Icon1 />, id: '2', alt: "2" },
  { component: <Icon2 />, id: '3', alt: "3" },
  { component: <Icon3 />, id: '4', alt: "3" },
  { component: <Icon4 />, id: '5', alt: "2" },
  { component: <Icon5 />, id: '6', alt: "3" },
  { component: <Icon6 />, id: '7', alt: "3" },
  { component: <Icon7 />, id: '8', alt: "2" },
  { component: <Icon8 />, id: '9', alt: "3" },
  { component: <Icon9 />, id: '10', alt: "3" },
]

const Monsters = () => {
  const [items, setItems] = React.useState(monsterArray)
  const [locked, setLocked] = React.useState(true)
  const monstersRef = React.useRef()

  return (
    <div className="Monsters" ref={monstersRef}>

      <div className="Monsters__frame">
        <div className="Monsters__button-wrapper">
          <Lock locked={locked} setLocked={setLocked} />
          {locked ? (
            <div>Click to unlock icons. Drag to reorder.</div>
          ) : (
            <div>Drag icons. Lock when finished.</div>

          )}
        </div>
        <div className="Monsters__icons-wrapper">
          <Reorder.Group values={items} onReorder={setItems} axis="x">
            {items.map(item => (
              <Reorder.Item
                key={item.id}

                value={item}
                drag={locked ? false : true}
                // whileDrag={{ scale: 1.2 }}
                whileHover={{scale: 1.2}}
                animate={{
                  scale: locked ? 1 : 1.3
                }}>
                <motion.div className={locked ? "Monsters__item-locked" : "Monsters__item-unlocked"} >
                  {item.component}
                </motion.div>
              </Reorder.Item>
            ))}
          </Reorder.Group>
        </div >
      </div>
    </div >
  )
}

export default Monsters
