import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import grey_img from './greyimg.jpg'
import Card from './components/Card';

function App() {

  const firstCardClick = (obj) => {
    console.log('First card click');
  };

  const secondCardClick = (obj) => {
    console.log('Second card click');
  }


  const cards = [{
    title: 'Special title treatment',
    text: 'With supporting text below as a natural lead-in to additional content.',
    buttonCaption: 'Do something',
    onButtonClick: firstCardClick
  },
  {
    title: 'Card title',
    text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content',
    buttonCaption: 'Redirect',
    onButtonClick: secondCardClick
  }];

  return (
    <React.Fragment>
      <div className="card-list">
        <Card {...cards[0]} />
        <Card {...cards[1]}>
          <img src={grey_img} className="card-img-top" alt="" />
        </Card>
      </div>
    </React.Fragment>
  );
}

export default App;