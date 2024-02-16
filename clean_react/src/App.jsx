import { Route, Routes } from 'react-router-dom'
import './App.css'
import Categories from './components/Categories'
import CategoriesIndex from './components/CategoriesIndex'
import Category from './components/Category'
import Home from './components/Home'
import Layout from './components/Layout'

function App() {


  return (
    <Layout>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="categories/*" element={<Categories/>}>
          <Route index element={<CategoriesIndex/>}/>
          <Route path=':slug' element={<Category/>}/>
        </Route>
      </Routes>
    </Layout>
  )
}

export default App
