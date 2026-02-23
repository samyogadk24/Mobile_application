import React from "react";


export default function input({LabelName, type, placeholder}){
    return(
       <div>
        <label htmlFor="name"> {LabelName}</label>
        <input
          type={type}
          placeholder={placeholder}
          required
          className="w-full p-2 border rounded"
        />
        

        </div>
    )
}