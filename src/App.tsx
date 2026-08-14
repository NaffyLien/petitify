import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ExportPage from './pages/ExportPage'
import { useResume } from './contexts/useResume'

const AppRoutes = () => {
  const { resume } = useResume()

  return (
    <Routes>
      
      <Route path={`/${import.meta.env.VITE_route}/`} element={<Home />} />
      <Route path={`/${import.meta.env.VITE_route}/exp`} element={<ExportPage resume={resume} />} />
    </Routes>
  )
}

export default AppRoutes