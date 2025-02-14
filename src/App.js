import './App.css';
import CardSocialMedia from './CardSocialMedia';
import Header from './Header';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <Header/>
      </header> */}
      <section className='pb-4'>
        <div className='border rounded-5'>
          <section className='w-100 ' style={{backgroundColor: "#eee", borderRadius: ".5rem .5rem 0 0"}}>
              <Header />
              <CardSocialMedia />
          </section>
        </div>
      </section>
    </div>
  );
}

export default App;
