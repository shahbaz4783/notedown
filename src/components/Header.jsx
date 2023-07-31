import React from 'react'

export const Header = () => {
  return (
    <header>
        <div>
        <h2 className='logo'>notedown</h2>
        </div>

        <nav>
            <ul>
                <li>Notes</li>
                <li>Tasks</li>
                <li>Archive</li>
            </ul>
        </nav>

    </header>
  )
}
