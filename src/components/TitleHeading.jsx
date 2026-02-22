import { Typography } from '@mui/material';

function TitleHeading({ profile }) {
  const accentText = 'Scalable Architectures.';
  const headlinePrefix = profile.headline.endsWith(accentText)
    ? profile.headline.slice(0, -accentText.length)
    : profile.headline;

  return (
    <section id="title-heading" className="mb-8 md:mb-10">
      <Typography
        component="h1"
        className="!max-w-4xl !text-4xl !font-bold !leading-[1.15] !text-slate-50 md:!text-6xl"
      >
        {profile.name}
      </Typography>

      <Typography className="!mt-4 !max-w-4xl !text-2xl !font-semibold !leading-tight !text-slate-100 md:!text-4xl">
        {headlinePrefix}
        {profile.headline.endsWith(accentText) && (
          <span className="text-cyan-300">{accentText}</span>
        )}
      </Typography>
    </section>
  );
}

export default TitleHeading;
