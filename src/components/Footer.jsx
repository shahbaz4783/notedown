import React from 'react'

const currentYear = new Date().getFullYear();
const owner = 'Shahbaz Ansari'

export const Footer = () => {
  return (
    <footer>
        <p>Copyright @ {currentYear}</p>
        <p>Design & Built by {owner}</p>
    </footer>
  )
}
