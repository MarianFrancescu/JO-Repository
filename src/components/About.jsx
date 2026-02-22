import { Typography } from '@mui/material';

function About({ profile }) {
  return (
    <section id="about" className="scroll-mt-24 mb-12 md:mb-16">
      <div className="mb-5 flex items-center gap-4">
        <Typography component="h2" className="!text-3xl !font-semibold !text-slate-50">
          About
        </Typography>
        <div className="h-px flex-1 bg-gradient-to-r from-cyan-800/70 to-transparent" />
      </div>

      <Typography className="!max-w-3xl !text-lg !leading-8 !text-slate-200">
        {profile.about}
      </Typography>
    </section>
  );
}

export default About;
