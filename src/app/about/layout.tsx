import React from 'react'

type Props = {
    children:React.ReactNode;
}

export default function AboutLayout({children}: Props) {
  return (
    <div>
        <h4>section</h4>
        {children}
    </div>

  )
}