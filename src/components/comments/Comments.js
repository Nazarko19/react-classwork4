import {useEffect, useState} from "react";
import {getcomments} from "../../servis/comment.fetch.servis";
import Comment from "../comment/Comment";
import './Comments.css'

export default function Comments() {
   let [comments, setComments] = useState([])
    let [comment,setComent] = useState(null)

    useEffect(()=>{
        getcomments().then(value => setComments([...value]))
    })

    
    
    const clickomment = (u) => {
      setComent({...u})
    }



  return (
    <div className={'wrap'}>

        <div className={'comments'}>
            {
                comments.map((value => <Comment key={value.id} item={value} clickcomment={clickomment}/>))
            }
        </div>
        {     comment &&   <div className={'infocomments'}>
            {
               JSON.stringify(comment)
            }
        </div>}

    </div>
  );
}