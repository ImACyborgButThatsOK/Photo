import Main from "../../Components/Main/Main"
import Intro from "../../Components/Intro/Intro"
import Navbar from "../../Components/Navbar/Navbar"
import About from "../../Components/About/About"
import Footer from "../../Components/Footer/Footer"

function Home() {
    return (
        <div>
            <Navbar />
            <Intro />
            <Main />
            <About />
            <Footer />
        </div>
    )
}

export default Home