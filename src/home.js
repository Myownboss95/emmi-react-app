//import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import PostsComponent from './postsComponent';
import Button from 'react-bootstrap/Button';
import imageFile from './images/Image-01.jpeg'
import { useState } from 'react';
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

    let posts = [
        { author: "Kingsley", title: "Data Scientist", body: 'he is a JS student', id: 1 },
        { author: "Solomon", title: "Civil Servant", body: 'Engr is here', id: 2 },
        { author: "Irene", title: "Business Woman", body: 'Female woman in tech', id: 3 },
        { author: "Mayomi", title: "Business Man", body: 'Mayomi is a JS student', id: 4 },
        { author: "Prudence", title: "Business Lady", body: 'Prudence is a JS student', id: 5 }
    ];
    return (
        <div>
            < PostsComponent posts={posts} />
         </div>
    );
}

export default HomeComponent;