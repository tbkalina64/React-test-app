// import { Link } from "react-router-dom";
import './App.css';
import data from "./data";
import CompanyName from './components/CompanyName'
// function App() {
//   return (
//     <div className="App">
//       <h1>Hello word</h1>
//     </div>
//   );
// }



const socialMediaList = data.SocialMedias;
const experience = data.Experiences;
const skills = data.Skills;

const UserData = {
  firstName: 'Tani',
  specialization: 'FronEnd Developer',
  contacts: 'tbkalina64@gmail.com'
}

const Footer = () => (
  <footer>footer</footer>
)

const App = () => (
  <div className="App">
    <div>
      <h1 className='main_title'>Hello {UserData.firstName} !!!</h1>
      <p className='main_specialization'>Specialization is <span>{UserData.specialization}</span></p>
      <div className='main_contacts'>
        <a href='mailto:{ UserData.contacts }'>{UserData.contacts} </a>
      </div>
      <ul className='main_social'>
        {socialMediaList.map((media, i) => (<li key={i}>{media}</li>))}
      </ul>
    </div>
    <CompanyName experience={experience}/>
    <Footer />
  </div>
)

export default App;
