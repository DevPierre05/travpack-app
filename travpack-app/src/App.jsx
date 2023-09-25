import Header from './components/Header'
import './App.css'
import MainView from './components/MainView'

function App() {
  return (
    <section className="relative max-w-7xl  mx-auto min-h-screen bg-slate-50 sm:overflow-x-hidden">
      <Header />
      <div className="mt-8 px-2">
        <MainView />
      </div>
    </section>
  );
}

export default App
