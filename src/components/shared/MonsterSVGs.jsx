import React from 'react'
import Death from '../../assets/images/monster-character-svgs/dead-death-fear-grim-horror-svgrepo-com.svg';
import {
 DeadDeath,
  JackLantern,
  Fairy,
  AngelGod,
  GhostDevilQueen,
  CrystalBall
} from '../../assets/images/monster-character-svgs'


// <img src={images['doggy.png']} />

const Monsters = () => {
  const [ monsters, setMonsters ] = React.useState({})

  // React.useEffect(()=>{
  //
  //   function importAll(r) {
  //     let images = {};
  //     r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  //     return images;
  //   }
  //
  //   setMonsters(importAll(require.context('../../assets/images', false, /\.(png|jpe?g|svg)$/)))
  //
  // }, [])
  return (
    <div className="Monsters">
      <img src={DeadDeath} alt="death" />
      <img src={CrystalBall} alt="death" />
      <img src={AngelGod} alt="death" />
      <img src={GhostDevilQueen} alt="death" />
    </div>
  )
}

export default Monsters
