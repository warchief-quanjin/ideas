import Home from './Home';
import About from './About';
import Services from './Services';
import Features from './Features';
import Workteam from './Workteam';
import Contact from './Contact';
import Footer from './Footer';
import IdeaPage from '../idea/IdeaPage';
import IdeaNavbar from '../idea/IdeaNavbar';

const Layout = (props) => {
    return (
        <div>
            <IdeaNavbar />
            <Home />
            <About />
            <Services />
            <Features />
            <Workteam />
            <Contact />
            <IdeaPage />
            <Footer />
        </div>
    );
}

export default Layout;
