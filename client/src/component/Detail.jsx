import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getStuByIdApi } from "../api/stuApi";

function Detail() {
  const { id } = useParams()

  //根据id获得学生详细信息
  useEffect(() => {
    getStuByIdApi(id).then(({ data }) => {
      console.log(data)
    })
  })

  return (
    <div>
      详情页
    </div>
  );
}

export default Detail;
