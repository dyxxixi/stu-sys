import { useState, useEffect } from "react";
import { getStuListApi } from "../api/stuApi";


function Home() {
  const [stuList, setStuList] = useState([])
  const [search, setSearch] = useState([])
  const content = stuList.map((item) => {
    return (
      <tr key={item.id}>
        <td>{item.name}</td>
        <td>{item.age}</td>
        <td>{item.phone}</td>
        <td>详情</td>
      </tr>
    )
  })

  useEffect(() => {
    getStuListApi().then(({ data }) => {
      setStuList(data)
    })
  }, [])

  function handleChange(e) {
    setSearch(e.target.value)
  }


  return (
    <>
      <h1>学生列表</h1>
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
