import React, { Fragment } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { router } from './router'
import { Default } from './components'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {router.map(el => {
            const Page = el.page
            const Layout = el.isShowHeader ? Default : Fragment
            return (
              <Route key={el.path} path={el.path} element={
                <Layout>
                  <Page />
                </Layout>
              } />
            )
          })}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App