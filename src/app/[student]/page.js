'use client'

import { blogsArray } from "../../../public/lib/blogs";

export default function Student({params}) {
  console.log(params);
    return (
      <main>
  <h1 style={{fontSize : 29,fontWeight : "bold"}}>Student Details</h1>
  <br/>
  <br/>

{
  blogsArray.map((data)=>{
    return(
      <div style={{border : "1px solid black",height:"100",width : "100"}}>
        <h1 style={{fontSize : 29,fontWeight : "bold"}}>{data.title}</h1>
        <p>{data.desc}</p>
        <p style={{fontFamily : "cursive"}}>{data.by}</p>
      </div>
    )
  })
}
      </main>
    )
  }
  