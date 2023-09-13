import { useEffect, useState } from "react";
import { useNavigate, useParams, NavLink } from "react-router-dom";
import { delStuByIdApi, getStuByIdApi } from "../api/stuApi";

function Detail() {
  const { id } = useParams()

  const [stuInfo, setStuInfo] = useState({
    "name": "",
    "age": "",
    "phone": "",
    "email": "",
    "education": "",
    "graduationschool": "",
    "profession": "",
    "profile": "",
  })

  const navigate = useNavigate()

  //根据id获得学生详细信息
  useEffect(() => {
    getStuByIdApi(id).then(({ data }) => {
      setStuInfo(data)
    })
  }, [id])

  // 根据id删除学生信息
  function handleDel() {
    // 给出确认窗口
    if (window.confirm('你确定要删除此用户？')) {
      delStuByIdApi(id).then(() => {
        // 跳转到主页
        navigate('/home', {
          state: {
            type: 'info',
            message: '删除用户成功！'
          }
        })
      })
    }
  }

  return (
    <div className="details container">
      <button className="btn btn-default" onClick={() => { navigate('/home') }}>返回</button>
      <h1 className="page-header">
        {stuInfo.name}
        <span className="pull-right">
          <NavLink to={`/edit/${id}`}>
            <button className="btn btn-primary" style={{ marginRight: 10 }}>修改</button>
          </NavLink>
          <button className="btn btn-danger" onClick={handleDel}>删除</button>
        </span>
      </h1>
      {/* 第一组 */}
      <ul className="list-group">
        <li className="list-group-item">
          <span className="glyphicon glyphicon-phone">电话：{stuInfo.phone}</span>
        </li>
        <li className="list-group-item">
          <span className="glyphicon glyphicon-envelope">邮箱：{stuInfo.email}</span>
        </li>
      </ul>
      {/* 第二组 */}
      <ul className="list-group">
        <li className="list-group-item">
          <span className="glyphicon glyphicon-book">文化水平：{stuInfo.education}</span>
        </li>
        <li className="list-group-item">
          <span className="glyphicon glyphicon-flag">毕业院校：{stuInfo.graduationschool}</span>
        </li>
        <li className="list-group-item">
          <span className="glyphicon glyphicon-briefcase">专业：{stuInfo.profession}</span>
        </li>
        <li className="list-group-item">
          <span className="glyphicon glyphicon-user">个人简介：{stuInfo.profile}</span>
        </li>
      </ul>
    </div>
  );
}

export default Detail;
