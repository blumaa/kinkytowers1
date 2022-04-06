import React from 'react'
import Television from './Television'
import HotCupOfTitTea from '../../scenes/HotCupOfTitTea/HotCupOfTitTea'

const TelevisionLayout = () => {
  // console.log('theatre isLoading', isLoading)
  return (
    <div className='TelevisionLayout'>
      <div class="TelevisionLayout__outer">
        <div class="TelevisionLayout__top"> <Television /></div>
        <div class="TelevisionLayout__below"><HotCupOfTitTea /> </div>
        {/* <div class="TelevisionLayout__below-2">below 2 </div> */}
      </div>
    </div>
  )
}

export default TelevisionLayout
