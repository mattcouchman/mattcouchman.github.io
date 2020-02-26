import React from "react"

const Text = props => {
  const { className, element = "p", children } = props
  const Element = element

  return <Element className={className}>{children}</Element>
}

export default Text
