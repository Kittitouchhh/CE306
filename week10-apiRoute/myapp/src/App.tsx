import {Routes,Route,Link} from 'react-router-dom'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import ProductListPage from './pages/ProductListPage'
import AboutPage from './pages/AboutPage'
import ProductDetailPage from './pages/ProductDetailPage'
import FetchAPI from './pages/FetchAPI'
import AxiosAPI from './pages/Axios'
import './App.css'

function App() {
  return (
    <div>
      {/*Route เอาไว้ระบุตรง http ส่วน linkเอาไว้กด 
        Route path=.../... element={<File.tsx/>}
      */}
      <nav className='top-0 p-4  text-white'>
        <Link to="/" className='m-4'>Home </Link>
        <Link to="about">About</Link>
        <Link to="/products" className='ml-4'>products</Link>
        <Link to="/fetch-api" className='ml-4'>Fecth API</Link>
        <Link to="/axios-api" className='ml-4'>Axios API</Link>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />    {/* ดอกจัน = อื่นๆทั้งหมด */ }
          <Route path="/Products" element={<ProductListPage/>} />
          <Route path="/Products/:productId" element={<ProductDetailPage />} /> {/* : โคลอนเอาไว้เข้าถึง ID */}
          <Route path="/fetch-api" element={<FetchAPI/>}/>
          <Route path="/axios-api" element={<AxiosAPI/>}/>
        </Routes>
      </main>
    </div>
  )
}

export default App
