import { Card, CardContent, Typography } from '@mui/material';
import type { StudyItem } from '../data/types';

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

      <div className="grid gap-4 md:grid-cols-3">
        {items.map((study) => (
          <Card
            key={study.degree}
            className="!rounded-xl !border !border-cyan-900/50 !bg-slate-900/60"
            elevation={0}
          >
            <CardContent>
              <Typography className="!text-xl !font-semibold !text-slate-100">
                {study.degree}
              </Typography>
              <Typography className="!mt-1 !text-sm !text-slate-300">
                {study.school} | {study.years}
              </Typography>
              <Typography className="!mt-3 !leading-7 !text-slate-200">
                {study.details}
              </Typography>
              <Typography className="!mt-3 !font-medium !text-cyan-200">{study.note}</Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default Studies;
