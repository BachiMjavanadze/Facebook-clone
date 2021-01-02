import React from 'react';
import Story from './Story';
import './StoryReel.css';

function StoryReel() {
  return (
    <div className='storyReel'>

      <div>
        <Story
          image='https://upload.wikimedia.org/wikipedia/commons/4/48/Outdoors-man-portrait_%28cropped%29.jpg'
          profileSrc='https://manofmany.com/wp-content/uploads/2019/06/50-Long-Haircuts-Hairstyle-Tips-for-Men-2.jpg'
          title='Nika Mzhavanadze' />
      </div>

      <div>
        <Story
          image='https://i1.wp.com/www.whiskyandwisdom.com/wp-content/uploads/Bond.jpg?fit=688%2C800&ssl=1'
          profileSrc='https://cdn-st3.rtr-vesti.ru/vh/pictures/xw/300/865/2.jpg'
          title='Badri Kublashvili' />
      </div>

      <div>
        <Story
          image='https://i.insider.com/577d2929dd0895d15e8b45a1?width=600&format=jpeg&auto=webp'
          profileSrc='https://img1.looper.com/img/gallery/how-thanos-knew-who-tony-stark-was-in-avengers-infinity-war/intro-1533262156.jpg'
          title='Giorgi Tabatadze' />
      </div>

      <div className='last-story'>
        <Story
          image='https://phonemantra.com/wp-content/uploads/2020/05/Angelina-Jolie.jpg'
          profileSrc='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Angelina_Jolie_2_June_2014_%28cropped%29.jpg/220px-Angelina_Jolie_2_June_2014_%28cropped%29.jpg'
          title='Anano Melua' />
      </div>
    </div>
  );
}

export default StoryReel;
