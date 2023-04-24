import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getstatus } from "../../services/apiServices";
import { AiOutlineGlobal } from "react-icons/ai";
import React from "react";
import { MultiStateCheckbox } from "primereact/multistatecheckbox";
const Getstatus = (props) => {
  const [value, setValue] = useState("public");
  const options = [
    { value: "public", icon: "pi pi-globe" },

    { value: "private", icon: "pi pi-lock" },
  ];
  
  const img1 = "http://localhost:8080";
  const {listdangtin}   = props;

  
    


  return (
    <>
      {listdangtin &&
        listdangtin.length > 0 &&
        listdangtin.map((item, index) => {
          console.log(">>> check item  tam love:",item );
          return (
            <div key={index} className="content_status">
              <div className="status-all">
                <div className="" key={item.id}>
                  <div className="status">
                    <div className="status-title">
                      <div className="status-tilte1">
                        <img src={`${img1}${item.user.avatar}`} />
                        <Link to={String(item.user.user_id)} >{item.user.last_name}</Link>

                        {/* { <h2>
                          {item.user.last_name} {item.user.first_name}
                          <div className="flex flex-column align-items-center">
                            <MultiStateCheckbox
                              value={value}
                              onChange={(e) => setValue(e.value)}
                              options={options}
                              optionValue="value"
                            />
                            <span>{value || "no value"}</span>
                          </div>
                        </h2> } */}
                     
                      </div>
                    </div>
                    <div className="status-conten">
                      <h2>{item.content} {item.comments.comment}</h2>
                        {
                          item.comments && item.comments>0 &&
                          item.comments.map((item,index) =>{
                            console.log("Check Tam loveeeeeeeeeeeee",index)
                            return(
                              <div>
                                  {item.comment_time}

                              </div>
                            )
                          })
                        }
                    </div>
                    <div className="status--icon">
                      <div className="status--icon1">
                        <span>Thích</span>
                      </div>
                      <div className="status--icon1">
                        <span>Bình Luận</span>
                      </div>
                      <div className="status--icon1">
                        <span>Chia sẻ</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default Getstatus;
