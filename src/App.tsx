import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ExportPage from './pages/ExportPage'
import { useResume } from './contexts/useResume'
import HelloWorld from './pages/HelloWorld'

const AppRoutes = () => {
  const { resume } = useResume()

  // ${import.meta.env.VITE_route}

  return (
    <Routes>
      <Route path='/pocketify/' element={<HelloWorld/>} />
      <Route path={`/pocketify/redac`} element={<Home />} />
      <Route path={`/pocketify/walk`} element={<ExportPage resume={resume} />} />
    </Routes>
  )
}

export default AppRoutes