import LayoutNavbar from './LayoutNavbar';
import Home from './Home';
import About from './About';
import Services from './Services';
import Features from './Features';
import Workteam from './Workteam';
import Contact from './Contact';
import Footer from './Footer';

const Layout = (props) => {
    return (
        <div>
            <LayoutNavbar />
            <Home />
            <About />
            <Services />
            <Features />
            <Workteam />
            <Contact />
            <Footer />
        </div>
    );
}

export default Layout;
