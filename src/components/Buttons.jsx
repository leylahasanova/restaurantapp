import React from 'react'

function Buttons(images) {
    const limitedImages = images.slice(0, 4).map((desc) => ({
        ...desc,
        description:
          desc.description.length > 80
            ? desc.description.slice(0, 110) + "..."
            : desc.description,
      }));
  return (
    <div>
        {limitedImages.map((data, index) => (
            <button>{data.title}</button>
        ))}
        <button>All</button>
      
    </div>
  )
}

export default Buttons
