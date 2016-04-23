import React from 'react'

const Training = (props) => {
  const { type } = props
  console.log("type", type)

  return (
    <section className="Training">
      <div className="container">
        { type }
      </div>
    </section>
  )
}

export default Training
