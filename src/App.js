import './App.css';
import Header from './components/header.js'
import Services from './components/services.js'
import About1 from './components/about1.js'
import About2 from './components/about2.js'
import Download from './components/download.js'
import About3 from './components/about3.js'
import Footer from './components/footer.js'

function App() {
  return (
    <div className="App">
      <Header />
      <Services />
      <About1 />
      <About2 />
      <Download />
      <About3 />
      <Footer />
    </div>
  );
}

export default App;
