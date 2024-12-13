import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <p className="appbody">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam,
        quibusdam aut sequi eveniet quae delectus. Adipisci ipsum placeat
        accusantium excepturi vel quod unde aliquam pariatur modi nesciunt,
        reprehenderit voluptatibus eveniet!
      </p>
      <p className="appbody">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam,
        quibusdam aut sequi eveniet quae delectus. Adipisci ipsum placeat
        accusantium excepturi vel quod unde aliquam pariatur modi nesciunt,
        reprehenderit voluptatibus eveniet!
      </p>
      <p className="appbody">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam,
        quibusdam aut sequi eveniet quae delectus. Adipisci ipsum placeat
        accusantium excepturi vel quod unde aliquam pariatur modi nesciunt,
        reprehenderit voluptatibus eveniet!
      </p>
      <p className="appbody">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam,
        quibusdam aut sequi eveniet quae delectus. Adipisci ipsum placeat
        accusantium excepturi vel quod unde aliquam pariatur modi nesciunt,
        reprehenderit voluptatibus eveniet!
      </p>
      <p className="appbody">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam,
        quibusdam aut sequi eveniet quae delectus. Adipisci ipsum placeat
        accusantium excepturi vel quod unde aliquam pariatur modi nesciunt,
        reprehenderit voluptatibus eveniet!
      </p>
      <Footer />
    </>
  );
}

export default App;
