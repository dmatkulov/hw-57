import Navbar from './components/Navbar/Navbar';

const App = () => (
  <>
    <header>
      <Navbar/>
    </header>
    <main className="container">
      <div className="row">
        <div className="col-6">
          Here will be inputs
        </div>
        <div className="col-6">
          Here will be list
        </div>
      </div>
    </main>
  </>
);

export default App;
