import React, { useState, createContext, useContext } from 'react'
import { POSTERS } from './postersData'

const postersDataContext = createContext()
const posterToggleContext = createContext()

export function usePosters() {
  return useContext(postersDataContext)
}

export function usePosterToggle() {
  return useContext(posterToggleContext)
}

export default function AppProvider({ children }) {
  const initialPostersData = {
    posters: POSTERS,
    activePosition: -1,
  }

  const [postersData, setPostersData] = useState(initialPostersData)

  function togglePoster(position) {
    setPostersData((prevData) => {
      return {
        posters: prevData.posters,
        activePosition: parseInt(position),
      }
    })
  }

  return (
    <postersDataContext.Provider value={postersData}>
      <posterToggleContext.Provider value={togglePoster}>
        {children}
      </posterToggleContext.Provider>
    </postersDataContext.Provider>
  )
}
