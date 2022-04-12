import React from 'react'
import Television from './Television'
import HotCupOfTitTea from '../../scenes/HotCupOfTitTea/HotCupOfTitTea'

const TelevisionLayout = () => {
  // console.log('theatre isLoading', isLoading)
  return (
    <div className='TelevisionLayout'>
      <div className="TelevisionLayout__outer">
        <div className="TelevisionLayout__top"> <Television /></div>
        <div className="TelevisionLayout__below"><HotCupOfTitTea /> </div>
        {/* <div className="TelevisionLayout__below-2">below 2 </div> */}
      </div>
    </div>
  )
}

export default TelevisionLayout
