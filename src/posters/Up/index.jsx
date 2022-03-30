import React from 'react'
import css from './styles.css'

export default function Up() {
  document.documentElement.style.setProperty('--bg-dark', '#009fe3aa')
  document.documentElement.style.setProperty('--bg', '#009fe3')
  document.documentElement.style.setProperty('--text', '#fff')

  return (
    <>
      <h1>UP</h1>
      <div class='globes'>
        <div class='globe green'></div>
        <div class='globe yellow'></div>
        <div class='globe pink'></div>
      </div>
      <style type='text/css'>{css}</style>
    </>
  )
}
