import { Card, CardContent, List, ListItem, Typography } from '@mui/material';
import type { ExperienceItem } from '../../data/types';

interface ExperienceProps {
  items: ExperienceItem[];
}

function Experience({ items }: ExperienceProps): JSX.Element {
  return (
    <section id="experience" className="scroll-mt-24 mb-12 md:mb-16">
      <div className="mb-5 flex items-center gap-4">
        <Typography component="h2" className="!text-3xl !font-semibold !text-slate-50">
          Experience
        </Typography>
        <div className="h-px flex-1 bg-gradient-to-r from-cyan-800/70 to-transparent" />
      </div>

      <div className="relative ml-0 border-l-0 pl-0 md:ml-1 md:border-l md:border-cyan-900/70 md:pl-5">
        {items.map((item, index) => (
          <Card
            key={item.title}
            className="!relative !mb-4 !rounded-xl !border !border-cyan-900/50 !bg-slate-950/50"
            elevation={0}
          >
            <span
              className={`absolute -left-[29px] top-8 hidden h-3 w-3 rounded-full border-2 md:block ${
                index === 0
                  ? 'border-cyan-300 bg-cyan-300/20'
                  : 'border-slate-500 bg-slate-600/20'
              }`}
            />
            <CardContent>
              <div className="mb-1 flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                <Typography className="!text-xl !font-semibold !text-slate-100">
                  {item.title}
                </Typography>
                <Typography className="!font-['IBM_Plex_Mono'] !text-sm !text-cyan-300">
                  {item.period}
                </Typography>
              </div>
              <Typography className="!mb-2 !text-slate-300">{item.organization}</Typography>

              <List className="!list-disc !pl-4">
                {item.bullets.map((bullet) => (
                  <ListItem
                    key={bullet}
                    className="!block !list-item !py-1 !pl-0 !leading-7 !text-slate-200"
                  >
                    {bullet}
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default Experience;
