import React from 'react';
import './App.css';
import { NewsDetailComponent } from './NewsDetailComponent';
import image1 from './image1.jpg'
import image2 from './image2.jpg'
import { WheatherDetail } from './WheatherDetail';
import { SecondRowComponent } from './SecondRowComponent';
const newsList: Array<News> = [{
  title: 'Cerlia herldo Trial',
  subtitle: 'Lorem ipsum dolor sit amet',
  description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse',
  image: image1
},
{
  title: 'Coronavirus',
  description: ' ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  subtitle: 'Lorem ipsum dolor sit amet, ',
  image: image2
}
]
const App: React.FC = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-2">
          <WheatherDetail />
        </div>
        <div className="col-lg-10">
          <NewsDetailComponent
            news={newsList[0]}
          />
          <hr />
          <SecondRowComponent
            news={newsList[1]}
          />
        </div>
      </div>

    </div>
  );
}

export default App;
