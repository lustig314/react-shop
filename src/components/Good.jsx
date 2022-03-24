import React from 'react';

const Good = ({mainId: id, displayName: title, displayDescription: description, displayAssets:[img], price:{regularPrice}, addToBasket = Function.prototype}) => {
  return (
    <div className="card" id={id}>
      <div className="card-image">
        <img src={img.full_background} alt={title}/>
      </div>
      <div className="card-content">
        <span className="card-title">{title}</span>
        <p>
          {description}
        </p>
      </div>
      <div className="card-action">
        <button className='btn' onClick={() => addToBasket({id, title, regularPrice})}>Купить</button>
        <span className='right' style={{fontSize: '1.8rem'}}>{regularPrice}.руб</span>
      </div>
    </div>
);
};

export default Good;
