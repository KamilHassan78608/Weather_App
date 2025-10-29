import React from 'react'
import { Button } from './ui/button'
import { Search } from "lucide-react"
import SearchBar from './ui/SearchBar'

const Navbar = () => {
  return (
    <div className='w-full flex justify-between mt-10 items-center'>
      <h1 className='weather-title'>WTR.x</h1>
      <SearchBar />
    </div>
  )
}

export default Navbar
