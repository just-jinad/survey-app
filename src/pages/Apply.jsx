import React from 'react'
import NikeOrderForm from './Embedded'


const Apply = () => {
  return (
    < >
        <div className=''>j</div>
        <p className='mt-20 text-center underline font-bold'>Apply here </p>

    <div className="container">
        {/* <iframe
      title="Nike Product Order Form"
      className='mb-5'
      src="https://form.jotform.com/240826909263260"
      style={{ minWidth: '100%', maxWidth: '100%', height: '539px', border: 'none' }}
      scrolling="no"
    /> */}

    <NikeOrderForm/>

    </div>
    </>
  )
}

export default Apply