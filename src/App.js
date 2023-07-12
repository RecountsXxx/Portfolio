import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from "./components/MainPage";
function App() {
  return (
    <div className="App">
      <Header></Header>
        <MainPage></MainPage>
      <Footer></Footer>
    </div>
  );
}

export default App;
