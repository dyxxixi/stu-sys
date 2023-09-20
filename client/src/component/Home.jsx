import { useState, useEffect } from "react";
import Alert from "./Alert";
import { NavLink, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getStuListAsync } from "../redux/stuSlice";

function Home() {
  const { stuList } = useSelector(state => state.stu) //从仓库中获取数据
  const [searchStuList, setSearchStuList] = useState([]) //搜索后的用户列表
  const [searchItem, setSearchItem] = useState('')
  const [alert, setAlert] = useState(null)

  const location = useLocation()
  const dispatch = useDispatch()

  useEffect(() => {
    if (!stuList.length) {
      //如果没有数据 就派发一个action到仓库 
      //仓库发送请求获取数据后填充到前端仓库
      dispatch(getStuListAsync())
    }
  }, [stuList, dispatch]) 

  // 再来处理一个副作用，用于获取跳转到 home 组件时传递的 state 数据
  useEffect(() => {
    if (location.state) {
      setAlert(location.state)
    }
  }, [location])

  function handleChange(name) {
    //用户要搜的内容就存储在了searchItem里
    setSearchItem(name)
    // 对stuList进行过滤
    const arr = stuList.filter((item) => {
      return item.name.match(name)
    })
    // 存入搜索后的学生列表
    setSearchStuList(arr)
  }

  const list = searchItem ? searchStuList : stuList

  const content = list.map((item) => {
    return (
      <tr key={item.id}>
        <td>{item.name}</td>
        <td>{item.age}</td>
        <td>{item.phone}</td>
        <td><NavLink to={`/detail/${item.id}`}>详情</NavLink></td>
      </tr>
    )
  })

  return (
    <>
      {/* 判断是否显示alert */}
      {alert ? <Alert {...alert} /> : null}
      <h1 className="page-header">学生列表</h1>
      <input type="search" placeholder="搜索" className="form-control" value={searchItem} onChange={(e) => { handleChange(e.target.value) }} />
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
