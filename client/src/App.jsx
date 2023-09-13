import { Routes, Route } from 'react-router-dom'
import Home from './component/Home'
import About from './component/About'
import AddOrEdit from './component/AddOrEdit'
import './css/App.css'
import { Navigate, NavLink } from 'react-router-dom';
import Detail from './component/Detail'

function App() {
  return (
    <div id="app" className="container">
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <NavLink className="navbar-brand" to='/'>学生管理系统</NavLink>
          </div>
          <div id="navbar" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li>
                <NavLink to='/home'>主页</NavLink>
              </li>
              <li>
                <NavLink to='/about'>关于我们</NavLink>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <NavLink to='/add'>添加用户</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* 匹配上的路由所对应的组件显示在这个位置 */}
      <div className='content'>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/add' element={<AddOrEdit />} />
          <Route path='/detail/:id' element={<Detail />} />
          <Route path='/edit/:id' element={<AddOrEdit />} />
          <Route path='/' element={<Navigate replace to='/home' />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
