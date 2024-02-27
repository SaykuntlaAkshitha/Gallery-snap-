import React from 'react';

export const Gallery = ({ data }) => {
  return (
    <div className="container">
      <div className='row d-flex justify-content-around'>
        {data.map((image) => (
          <div key={image.id} className="col-md-4 mb-3">
            <img
              src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`}
              height="200"
              width="250"
              alt={image.title}
              className="img-fluid rounded flex-grow-1"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
