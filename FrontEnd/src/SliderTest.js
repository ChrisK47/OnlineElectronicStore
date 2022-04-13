import {Carousel} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from './images/image3.jpg'
import img2 from './images/Image2.jpg'
import img3 from './images/Image1.png'


const Home = () =>
{
    return (<div>
        <Carousel interval={1500}>
             <Carousel.Item>
                 <img src={img1} height="700px" width="100%" alt="Img1" />

             </Carousel.Item>
             <Carousel.Item>
                 <img src= {img2} height="700px" width="100%" alt="Img2" />

             </Carousel.Item>
             <Carousel.Item>
                 <img src={img3} height="700px" width="100%" alt="Img3" />

             </Carousel.Item>
        </Carousel>
        
         </div>) ;
   
}

export default Home