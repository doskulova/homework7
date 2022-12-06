import React, {useEffect, useState} from 'react';
import Posts from "../../components/post/Posts";
import {Container, Row, Spinner} from "react-bootstrap";

function PostsPage(props) {
    const [posts, setPosts]=useState([])
    const [loading, setLoading]=useState(false);
    async function getUsers(){
        setLoading(true)
        const response= await fetch('https://jsonplaceholder.typicode.com/posts')
        const data =  await response.json()
       setPosts(data)
        setLoading(false)
    }
    useEffect(()=>{
        getUsers()
    },[])
    return (
        <Container>
            <h1>Posts Page</h1>
            <Row>
                {
                    loading=== true
                        ?
                        <div className="w-100 h-100">
                            <Spinner animation="grow" />;
                        </div>

                        :
                        posts.slice(0,15).map(post=> <Posts objects={post}/>)
                }
            </Row>

        </Container>
    );
}

export default PostsPage;