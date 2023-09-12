import { useState, useEffect } from "react";
import { getStuListApi } from "../api/stuApi";
import Alert from "./Alert";
import { NavLink, useLocation } from "react-router-dom";


function Home() {
  const [stuList, setStuList] = useState([])
  const [search, setSearch] = useState([])
  const [alert, setAlert] = useState(null)
  const content = stuList.map((item) => {
    return (
      <tr key={item.id}>
        <td>{item.name}</td>
        <td>{item.age}</td>
        <td>{item.phone}</td>
        <td><NavLink to={`/detail/${item.id}`}>详情</NavLink> </td>
      </tr>
    )
  })

  const location = useLocation()

  useEffect(() => {
    getStuListApi().then(({ data }) => {
      setStuList(data)
    })
  }, [])

  // 再来处理一个副作用，用于获取跳转到 home 组件时传递的 state 数据
  useEffect(() => {
    if (location.state) {
      setAlert(location.state)
    }
  }, [location])

  function handleChange(e) {
    setSearch(e.target.value)
  }


  return (
    <>
      {/* 判断是否显示alert */}
      {alert ? <Alert {...alert} /> : null}
      <h1 className="page-header">学生列表</h1>
      <input type="search" placeholder="搜索" className="form-control" value={search} onChange={handleChange} />
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th>姓名</th>
            <th>年龄</th>
            <th>联系方式</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {content}
        </tbody>
      </table>
    </>
  );
}

export default Home;
