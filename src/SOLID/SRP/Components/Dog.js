import React from 'react'

const Dog = ({url}:{url:string}) => {
  return (
    <>
    <hr/>
      <h3>Dog Photo</h3>
      <img src={url} alt="dog" />
    <hr/>
    </>
  )
}

export default Dog