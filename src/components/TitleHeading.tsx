import { Typography } from "@mui/material";
import type { Profile } from "../../data/types";

interface TitleHeadingProps {
  profile: Profile;
}

function TitleHeading({ profile }: TitleHeadingProps): JSX.Element {
  const accentText = "Scalable Architectures.";
  const headlinePrefix = profile.headline.endsWith(accentText)
    ? profile.headline.slice(0, -accentText.length)
    : profile.headline;
  const photoSrc = `${import.meta.env.BASE_URL}assets/profile-photo.png`;
  const fallbackPhotoSrc = `${import.meta.env.BASE_URL}assets/logo-mark.svg`;

  return (
    <section
      id="title-heading"
      className="mb-8 flex flex-col items-center gap-5 md:mb-10 md:flex-row md:items-start md:gap-6"
    >
      <div className="text-center md:text-left">
        <Typography
          component="h1"
          className="!max-w-4xl !text-4xl !font-bold !leading-[1.1] !text-slate-50 md:!text-6xl">
          {profile.name}
        </Typography>

        <Typography className="!mt-3 !max-w-4xl !text-2xl !font-semibold !leading-tight !text-slate-100 md:!mt-4 md:!text-4xl">
          {headlinePrefix}
          {profile.headline.endsWith(accentText) && (
            <span className="text-cyan-300">{accentText}</span>
          )}
        </Typography>
      </div>
      <img
        src={photoSrc}
        alt={`${profile.name} profile`}
        onError={(event) => {
          event.currentTarget.onerror = null;
          event.currentTarget.src = fallbackPhotoSrc;
        }}
        className="order-first h-24 w-24 shrink-0 rounded-2xl object-cover ring-2 ring-cyan-700/60 md:order-none md:ml-auto md:h-28 md:w-28"
      />
    </section>
  );
}

export default TitleHeading;
