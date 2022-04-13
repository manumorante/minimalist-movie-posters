import React, { useState, createContext, useContext } from 'react'
import { POSTERS } from './posters.js'

const postersDataContext = createContext()
const posterToggleContext = createContext()

export function usePosters() {
  return useContext(postersDataContext)
}

export function usePosterToggle(id) {
  return useContext(posterToggleContext)
}

const firstPosterID = Object.keys(POSTERS)[0]

export default function AppProvider({ children }) {
  const initialPostersData = {
    posters: POSTERS,
    activePoster: POSTERS[firstPosterID],
  }

  const [postersData, setPostersData] = useState(initialPostersData)

  function togglePoster(posterID) {
    setPostersData((prevPostersData) => {
      return {
        posters: prevPostersData.posters,
        activePoster: prevPostersData.posters[posterID],
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
