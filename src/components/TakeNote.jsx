import React from 'react'

export const TakeNote = () => {
  return (
    <div>
        <form>
            <input type='text' placeholder='Title' /> <br />
            <textarea name='content' type='text'  placeholder='Take a note...' />
            <button>Add</button>
        </form>
    </div>
  )
}
