import React, { useEffect, useState } from 'react';
import './Feed.css';
import db from './firebase';
import MessageSender from './MessageSender';
import Post from './Post';
import StoryReel from './StoryReel';

function Feed() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => (
      setPosts(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
    ));
  }, []);

  return (
    <div className='feed'>
      <StoryReel />
      <MessageSender />

      {posts.map(post => (
        <Post
          key={post.id}
          profilePic={post.data.profilePic}
          message={post.data.message}
          timestamp={post.data.timestamp}
          username={post.data.username}
          image={post.data.image} />
      ))}

      <Post
        profilePic='https://miro.medium.com/max/3150/1*xxVEfOOAmIKHWOUloRKLhw.jpeg'
        message='Excited to launch the first of many future tools on ReactJS'
        timestamp='This is timestamp'
        username='Dan Abramov'
        image='https://www.hiddenbrains.com/blog/wp-content/uploads/2019/09/New-React-Developer-Tools.jpg' />

      <Post
        profilePic='https://www.biography.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg'
        message='Starlink is a satellite internet constellation being constructed by SpaceX providing satellite Internet access. The constellation will consist of thousands of mass-produced small satellites in low Earth orbit (LEO), working in combination with ground transceivers. SpaceX also plans to sell some of the satellites for military, scientific, or exploratory purposes.'
        timestamp='This is timestamp'
        username='Elon Musk'
        image='https://fpg.uz/uploads/product/file3168.jpg' />

      <Post
        profilePic='https://media1.popsugar-assets.com/files/thumbor/zcOHq6Onxvj-fZOVYUyVclMsX48/0x118:1988x2106/fit-in/500x500/filters:format_auto-!!-:strip_icc-!!-/2020/02/12/790/n/1922398/2d05a80a5e443cc6beba59.08230582_/i/Jim-Carrey.jpg'
        message='The cat (Felis catus) is a domestic species of small carnivorous mammal. It is the only domesticated species in the family Felidae and is often referred to as the domestic cat to distinguish it from the wild members of the family. A cat can either be a house cat, a farm cat or a feral cat; the latter ranges freely and avoids human contact.'
        timestamp='This is timestamp'
        username='Jim Carrey'
        image='https://thumbs.dreamstime.com/b/grey-cat-wants-to-steal-big-fish-grey-cat-wants-to-steal-big-fish-white-plate-wooden-table-168461455.jpg' />

      <Post
        profilePic='https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Arnold_Schwarzenegger_-_2019_%2833730956438%29_%28cropped%29.jpg/1200px-Arnold_Schwarzenegger_-_2019_%2833730956438%29_%28cropped%29.jpg'
        message='The Terminator is a 1984 American science fiction film directed by James Cameron. It stars Arnold Schwarzenegger as the Terminator, a cyborg assassin sent back in time from 2029 to 1984 to kill Sarah Connor (Linda Hamilton), whose son will one day become a savior against machines in a post-apocalyptic future.'
        timestamp='This is timestamp'
        username='Arnold Schwarzenegger '
        image='https://movies.mxdwn.com/wp-content/uploads/2020/04/the-terminator-arnold-schwarzenegger-1.jpg' />



    </div>
  );
}

export default Feed;
