import React from 'react'
/**
 * Subtype objects should be substitutable for supertype objects
 * So , if you have a subComponent SearchBar , it should have props that
 * would take in the input components prop types , rather than modifying   * multiple props of the input element inside the search bar component
 * @returns 
 */
const Bad = () => {
  return (
    <div>Bad</div>
  )
}

export default Bad