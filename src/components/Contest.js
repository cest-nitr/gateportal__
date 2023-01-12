import React, { useState } from 'react'
import Guidelines from './Guidelines'
import Score from './Score'
const Contest = () => {
  const submit = false;
  return (
    <div>
      {
        submit ? <Score /> : <Guidelines />
      }
    </div>
  )
}

export default Contest
