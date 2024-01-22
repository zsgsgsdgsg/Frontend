import React, { useContext, useEffect } from 'react'
import Header from '../components/Header'
import SelectForm from '../components/SelectForm'
import { MainContextContent } from '../components/Context'

const Home = () => {

  return (
    <div className=''>
        <Header/>
        <div className="grid md:grid-cols-3 gap-4">
            <div></div>
            <div className='px-4 sm:px-16 md:px-0'>
                <SelectForm/>
            </div>
            <div></div>
        </div>
    </div>
  )
}

export default Home