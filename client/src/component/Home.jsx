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
        <td>{item.email}</td>
        <td>{item.education}</td>
        <td>{item.graduationschool}</td>
        <td>{item.profession}</td>
        <td>{item.profile}</td>
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
      <input type="search" className="form-control" value={search} onChange={handleChange} />
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th>姓名</th>
            <th>年龄</th>
            <th>电话</th>
            <th>邮箱</th>
            <th>学历</th>
            <th>毕业院校</th>
            <th>职业</th>
            <th>简介</th>
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
