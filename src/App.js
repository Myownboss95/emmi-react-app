import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselComponent from './carouselComponent';
//import logo from './logo.svg';
import NavbarComponent from './navbarComponent';
import HomeComponent from './home';
import FooterComponent from './footerComponent';
import PostComponent from './postsComponent';


function App() {
  const person = [
    { author: "Larry", title: "PHP Devops", body: 'HE is coding', id: 7 },
    { author: "Ishmael", title: "Business Guru", body: 'He iss in business', id: 8 },
    { author: "Ametudiore", title: "Data Scientist", body: 'he is a JS student', id: 9 },
  ]

  return (
    <div className="App">
        <header>
          < NavbarComponent />
        </header>
        < CarouselComponent />
        < HomeComponent />
        {/* <PostComponent data = {person}/> */}
        < FooterComponent />
    </div>
  );
}

export default App;
