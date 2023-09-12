import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getStuByIdApi } from "../api/stuApi";

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

  //根据id获得学生详细信息
  useEffect(() => {
    getStuByIdApi(id).then(({ data }) => {
      setStuInfo(data)
    })
  })

  return (
    <div className="details container">
      <button className="btn btn-default" >返回</button>
      <h1 className="page-header">
        {stuInfo.name}
        <span className="pull-right">
          <button className="btn btn-primary" style={{ marginRight: 10 }}>修改</button>
          <button className="btn btn-danger" >删除</button>
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
