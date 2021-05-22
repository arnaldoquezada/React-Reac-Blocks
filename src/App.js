import logo from './logo.svg';
import Header from './components/Header';
import Main from './components/Main';
import Navigation from './components/Navigation';
import SubContents from './components/SubContents';
import Advertisement from './components/Advertisement';


function App() {
  return (
    <div className="App">
      <Header />
        <Navigation />
        <Main>      
            <SubContents />
            <SubContents />
            <SubContents />
            <Advertisement />
        </Main>        
    </div>
  );
}

export default App;
