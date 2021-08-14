import {useEffect, useState} from "react";
import {getposts} from "../../servis/posts.fetch.servis";
import Post from "../post/Post";
import '../comments/Comments.css'

export default function Posts() {
    let [posts,setPosts]= useState([])
    let [post,setPost] = useState(null)

    useEffect(()=>{
        getposts().then(value => setPosts([...value]))

    })


    const clickpost = (u) => {
        setPost({...u})
    }


  return (
    <div className={'wrap'}>
        <div className={'posts'}>
            {
                posts.map(value => <Post key={value.id} item={value} clickpost={clickpost} />)
            }
        </div>

        { post && <div className={'infoposts'}>
            {JSON.stringify(post)}
        </div>}

    </div>
  );
}