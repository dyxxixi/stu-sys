import { NavLink, Outlet } from "react-router-dom";

function About() {
  return (
    <div className="about container">
      <h1 className="page-header">使用说明</h1>
      <p>通过此系统来熟悉 react 以及 react router 的使用</p>


      <h1 className="page-header">联系方式</h1>
      <ul className="nav nav-tabs">
        <li><NavLink to='/about/email' className='active'>邮箱</NavLink></li>
        <li><NavLink to='/about/tel'>电话</NavLink></li>
      </ul>
      <div className="panel-body">
        <Outlet />
      </div>

    </div>
  );
}

export default About;
