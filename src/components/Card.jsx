import React from 'react';
import PropTypes from 'prop-types';

function Card(props) {

 const handleButtonClick = (evt) => {
  evt.preventDefault();
  props.onButtonClick(evt.target);
 }

 return (
  <div className="card">
   {props.children}
   <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.text}</p>
    <a href="/" onClick={handleButtonClick} className="btn btn-primary">{props.buttonCaption}</a>
   </div>
  </div>
 );
}

Card.propTypes = {
 title: PropTypes.string.isRequired,
 text: PropTypes.string.isRequired,
 buttonCaption: PropTypes.string.isRequired,
 onButtonClick: PropTypes.func.isRequired
}

export default Card;