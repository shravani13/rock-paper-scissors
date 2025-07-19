import {Routes, Route} from 'react-router-dom'
import './App.css'
import {Main} from './components/Main'
import {Result} from './components/Result/Result'

function App() {

  return (
    <>
    <Routes>
    <Route path='/' element={<Main />} />
    <Route path='/result' element={<Result />} />
    </Routes>
      
    </>
  )

}

export default App
