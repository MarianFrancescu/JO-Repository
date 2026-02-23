import About from '../components/About';
import Contact from '../components/Contact';
import Experience from '../components/Experience';
import Footer from '../components/Footer';
import HeaderNav from '../components/HeaderNav';
import Publications from '../components/Publications';
import Studies from '../components/Studies';
import TitleHeading from '../components/TitleHeading';
import {
  contact,
  experiences,
  profile,
  publications,
  studies,
} from '../../data/portfolioData';

function PortfolioPage(): JSX.Element {
  return (
    <>
      <HeaderNav name={profile.name} />

      <main
        id="main-content"
        className="relative z-10 mx-auto w-[min(980px,92%)] py-14 md:py-16"
      >
        <TitleHeading profile={profile} />
        <About profile={profile} />
        <Experience items={experiences} />
        <Studies items={studies} />
        <Publications items={publications} />
        <Contact details={contact} />
        <Footer profile={profile} />
      </main>
    </>
  );
}

export default PortfolioPage;
