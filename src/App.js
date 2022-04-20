import Education from "./components/Education"
import Contacts from "./components/contacts"
import Experiences from "./components/Experience"
import Footer from "./components/Footer"

const App = () => {
    return (
        <div className='main'>
        <div className='body'>
            <Contacts/>
            <Education/>
            <Experiences/>
            <Footer/>
        </div>
        </div>
    )
}
export default App
