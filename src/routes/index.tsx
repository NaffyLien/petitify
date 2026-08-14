import { Route, Routes } from 'react-router-dom'
import App from '../App.tsx'
import ExportPage from '../pages/ExportPage'
import { useResume } from '../contexts/useResume'

const AppRoutes = () => {
  const { resume } = useResume()

  return (
    <Routes>
      <Route path={`/pocketify/`} element={<App />} />
      <Route path={`/pocketify/exp`} element={<ExportPage resume={resume} />} />
    </Routes>
  )
}

export default AppRoutes