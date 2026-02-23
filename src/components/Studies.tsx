import { Typography } from '@mui/material';
import type { StudyItem } from '../../data/types';

interface StudiesProps {
  items: StudyItem[];
}

function Studies({ items }: StudiesProps): JSX.Element {
  return (
    <section id="studies" className="scroll-mt-24 mb-12 md:mb-16">
      <div className="mb-5 flex items-center gap-4">
        <Typography component="h2" className="!text-3xl !font-semibold !text-slate-50">
          Studies
        </Typography>
        <div className="h-px flex-1 bg-gradient-to-r from-cyan-800/70 to-transparent" />
      </div>

      <div className="space-y-3">
        {items.map((study) => (
          <div
            key={study.degree}
            className="rounded-xl border border-cyan-900/50 bg-slate-900/35 px-4 py-4 md:px-5"
          >
            <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
              <Typography className="!text-xl !font-semibold !text-slate-100">
                {study.degree}
              </Typography>
              <Typography className="!font-['IBM_Plex_Mono'] !text-sm !text-cyan-300">
                {study.years}
              </Typography>
            </div>
            <Typography className="!mt-1 !text-sm !text-slate-300">{study.school}</Typography>
            <Typography className="!mt-3 !leading-7 !text-slate-200">{study.details}</Typography>
            <Typography className="!mt-3 !font-medium !text-cyan-200">{study.note}</Typography>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Studies;
