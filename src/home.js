//import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Card from 'react-bootstrap/Card'
import PostsComponent from './postsComponent';
// import Button from 'react-bootstrap/Button';
// import imageFile from './images/Image-01.jpeg'
import { useState, useEffect } from 'react';
// import Card from 'react-bootstrap/Card'
// import { Row, Col} from 'react-bootstrap'

const HomeComponent = () => {

    // let styleHome = {
    //     border : '1px solid black'
    // };
    // const [oldvalue, newFunction] = ["Kingsley", "Solomon"];
    // let [kingsley, solomon, irene, mayomi] = [
    //    { name: "Kingsley", occupation:"Data Scientist"}, 
    //     {name: "Solomon", occupation: "Civil Servant"},
    //    {name: "Irene", occupation: "Business Woman", gender:'Female'},
    //     {name:"Mayomi", occupation: "Business Man", age:99}
    // ]; //destructured this array
    // console.log(kingsley.occupation, solomon.name, irene.gender, mayomi.age);

    // const [name, setName] = useState('Jason');
    // const [age, setAge] = useState(5);


    // // console.log(name);
    // const handleClick = ()=>{
    //     setName("Prudence");
    //     setAge(8);
    //     // console.log(name, age)
    // }

    const [posts, setPost] = useState(null);
    // const [name, setName] = useState('Jason');
    
    useEffect(
        () =>{ 
            fetch('http://localhost:8000/posts', {
                method: 'GET', // or 'PUT'
                headers: {
                  'Content-Type': 'application/json',
                  
                },
                credentials: 'same-origin'
            })
            .then(res=>res.json())
            .then(
                (data) =>{
                    console.log(data);
                    setPost(data)
                }
            )
        }, []
    )

    // const deletePost = (id)=>{
    //     const newPost = posts.filter(
    //         post => post.id !== id
    //     )
    //     setPost(newPost)
    // }
    
   
    
    return (
        <div>
            {/* < PostsComponent posts={posts} /> */}
            {/* <Button variant="secondary" onClick={()=>setName('Daniel')}>Click me to change name</Button> */}
           {posts && < PostsComponent posts={posts}   /> }
           
         </div>
    );
}

export default HomeComponent;