import { useState } from "react";
const Tour = ({image,name,price,info,deleteItem}) => {
const [isMoreInfo, setIsMoreInfo] = useState(false)
  return (
    <article>
      <img src={image} alt=":(" ></img>
      <div className="info">
        <h3 className="info__name">{name}</h3>
        <h3 className="info__price">{price}$</h3>
      </div>
      <p className="place-info">
        {isMoreInfo ? info :info.substring(0,180)+'...'}
        <button className="btn-read__more btn" onClick={()=>{setIsMoreInfo(!isMoreInfo)}}>{isMoreInfo ? "Show Less":"Read More"}</button>
      </p>
      <div>
        <button className="btn-delete btn" onClick={deleteItem}>Not Interested</button>
      </div>
    </article>
  )
}

export  {Tour};
