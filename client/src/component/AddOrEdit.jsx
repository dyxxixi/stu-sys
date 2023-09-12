import { useState } from "react";
import { addStuInfoApi } from "../api/stuApi";
import { useNavigate } from "react-router-dom";
/***
 * 该组件有添加学生和修改学生两个功能
 */
function AddOrEdit() {
  const [stuInfo, setStuInfo] = useState({
    "name": "",
    "age": "",
    "phone": "",
    "email": "",
    "education": "本科",
    "graduationschool": "",
    "profession": "",
    "profile": "",
  })

  const navigate = useNavigate()

  /**
   * 根据对应的key来更新信息
   * @param {*} newInfo 
   * @param {*} key 
   */
  function updateStuInfo(newInfo, key) {
    if (key === "age" && isNaN(newInfo)) {
      return
    }
    const newStuInfo = { ...stuInfo }
    newStuInfo[key] = newInfo.trim()
    setStuInfo(newStuInfo)
  }



  function handleSubmit(e) {
    e.preventDefault()
    for (const key in stuInfo) {
      if (!stuInfo[key]) {
        alert("请完善表单的每一项")
        return
      }
    }

    // 接下来发送请求
    addStuInfoApi(stuInfo).then(() => {
      // 跳转到主页
      navigate('/home', {
        state: {
          type: 'success',
          message: '添加用户成功！'
        }
      })
    })
  }

  return (
    <div className="container">
      <h1 className="page-header">添加用户</h1>
      <form onSubmit={handleSubmit}>
        <div className="well">
          <div className="form-group">
            <label htmlFor="stuName">姓名</label>
            <input type="text" id="stuName" className="form-control" placeholder="请填写用户的姓名" value={stuInfo.name} onChange={(e) => { updateStuInfo(e.target.value, 'name') }} />
          </div>
          <div className="form-group">
            <label htmlFor="stuAge">年龄</label>
            <input type="text" id="stuAge" className="form-control" placeholder="请填写用户的年龄" value={stuInfo.age} onChange={(e) => { updateStuInfo(e.target.value, 'age') }} />
          </div>
          <div className="form-group">
            <label htmlFor="stuPhone">电话</label>
            <input type="text" id="stuPhone" className="form-control" placeholder="请填写用户的电话号码" value={stuInfo.phone} onChange={(e) => { updateStuInfo(e.target.value, 'phone') }} />
          </div>
          <div className="form-group">
            <label htmlFor="stuEmail">邮箱</label>
            <input type="text" id="stuEmail" className="form-control" placeholder="请填写用户邮箱地址" value={stuInfo.email} onChange={(e) => { updateStuInfo(e.target.value, 'email') }} />
          </div>
          <div className="form-group">
            <label htmlFor="stuEducation">学历</label>
            <select className="form-control" id="stuEducation" onChange={(e) => { updateStuInfo(e.target.value, 'education') }} >
              <option>小学</option>
              <option>初中或职中</option>
              <option>高职或职高</option>
              <option>专科</option>
              <option>本科</option>
              <option>硕士</option>
              <option>博士</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="stuGraduationSchool">毕业院校</label>
            <input type="text" id="stuGraduationSchool" className="form-control" placeholder="请填写用户的毕业院校" value={stuInfo.stuGraduationSchool} onChange={(e) => { updateStuInfo(e.target.value, 'graduationschool') }} />
          </div>
          <div className="form-group">
            <label htmlFor="stuProfession">职业</label>
            <input type="text" id="stuProfession" className="form-control" placeholder="请填写用户从事的相关职业" value={stuInfo.profession} onChange={(e) => { updateStuInfo(e.target.value, 'profession') }} />
          </div>
          <div className="form-group">
            <label htmlFor="stuProfile">个人简介</label>
            <textarea className="form-control" id="stuProfile" rows='10' placeholder="请简单的介绍一下你自己，例如兴趣、爱好等信息" value={stuInfo.profile} onChange={(e) => { updateStuInfo(e.target.value, 'profile') }} />
          </div>
          <button type="submit" className="btn btn-primary">确认添加</button>
        </div>
      </form>
    </div>
  );
}

export default AddOrEdit;
