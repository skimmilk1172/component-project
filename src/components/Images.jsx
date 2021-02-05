import React from 'react';



function Images (props) {
  const { url } = props;
  return (
    <div>
      <img width='100%' height='25%vw' src={url} />
    </div>
  )
}

export default Images;