import logo from './logo.svg';
import './App.css';
import Card from './Component/Card';
let image2= 'https://scontent.fpnq2-1.fna.fbcdn.net/v/t39.30808-6/289567666_5137554789697066_5240246901939994021_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=GLn6ixNuzfgAX_H_vzS&_nc_ht=scontent.fpnq2-1.fna&oh=00_AfDpp4-UJ_jfXL2dBfJGytjkF8JXRAGgJBNhFIvQlo0olA&oe=660096AC';
let image1= 'https://media.licdn.com/dms/image/D4D03AQFREKutJ8rwaQ/profile-displayphoto-shrink_200_200/0/1699456971856?e=1716422400&v=beta&t=WTxSwfqv24PFx6nSYPDdVPAYZP_zMu_YAR9ZAefrZ2c';
function App() {
  return (
    <>

      <div className="App">
        <h1 className="text-3xl font-bold underline">Test Card</h1>
        <Card name='Tejas' profile='Full Stack Developer' image={image2}/>
        <Card name='TejasM' profile='DevOps Enginner' image={image1}/>
      </div>
    </>
  );
}

export default App;
