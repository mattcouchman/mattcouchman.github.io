import React from "react"

const Grid = props => {
  const { className, children } = props

  return <div className={className}>{children}</div>
}

export default Grid
