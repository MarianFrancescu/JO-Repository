import { Button } from '@mui/material';
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
} from '../data/portfolioData';

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
        <div className="mt-6 flex justify-center">
          <Button
            variant="contained"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="!rounded-lg !bg-cyan-400 !px-5 !py-2 !font-semibold !text-slate-950 hover:!bg-cyan-300"
          >
            Back to Top
          </Button>
        </div>
      </main>
    </>
  );
}

export default PortfolioPage;
