import React from 'react'
import { Link } from 'react-router-dom'
import Icon from './Icon'

export default function Nav() {
  return (
    <nav className='flex flex-col sm:flex-row justify-center gap-5 transition-colors'>
      <Link to='/' className='flex gap-3'>
        <Icon icon='back' />
        <div>Inicio</div>
      </Link>
      <Link to='/forrest-gump' className='flex gap-3'>
        <Icon icon='cake' />
        <div>Forrest Gump</div>
      </Link>
      <Link to='/the-matrix' className='flex gap-3'>
        <Icon icon='adjust' />
        <div>The Matrix</div>
      </Link>
      <Link to='/kill-bill' className='flex gap-3'>
        <Icon icon='userMinus' />
        <div>Kill Bill</div>
      </Link>
      <Link to='/star-wars' className='flex gap-3'>
        <Icon icon='circleMinus' />
        <div>Star Wars</div>
      </Link>
      <Link to='/up' className='flex gap-3'>
        <Icon icon='home' />
        <div>Up</div>
      </Link>
      <Link to='/titanic' className='flex gap-3'>
        <Icon icon='support' />
        <div>Titanic</div>
      </Link>
      <Link to='/home-alone' className='flex gap-3'>
        <Icon icon='group' />
        <div>Home Alone</div>
      </Link>
    </nav>
  )
}
