
import { About } from './components/about';
import { Contact } from './components/contact';
import { Eperience, Experience } from './components/eperience';
import { FirstSection } from './components/firstSection';
import { Portfolio } from './components/portfolio';
import { SocialLinks } from './components/socialLinks';
export const HomePage = () => {
    return (
        <>
            <FirstSection/>
            <SocialLinks/>
            <About/>
            <Experience/>
            <Portfolio/>
            <Contact/>
            

        </>
    );
}
