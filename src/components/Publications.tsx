import { useMemo, useState } from 'react';
import { Button, Card, CardContent, Link, Typography } from '@mui/material';
import type { PublicationItem } from '../../data/types';

interface PublicationsProps {
  items: PublicationItem[];
}

const filterOptions: Array<{ label: string; value: PublicationItem['filter'] }> = [
  { label: 'Research', value: 'research' },
  { label: 'Problems', value: 'problems' },
  { label: 'Articles', value: 'articles' },
];

function Publications({ items }: PublicationsProps): JSX.Element {
  const [activeFilter, setActiveFilter] = useState<PublicationItem['filter']>('research');
  const filteredItems = useMemo(
    () => items.filter((publication) => publication.filter === activeFilter),
    [items, activeFilter],
  );

  return (
    <section id="publications" className="scroll-mt-24 mb-12 md:mb-16">
      <div className="mb-5 flex items-center gap-4">
        <Typography component="h2" className="!text-3xl !font-semibold !text-slate-50">
          Publications / Articles
        </Typography>
        <div className="h-px flex-1 bg-gradient-to-r from-cyan-800/70 to-transparent" />
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        {filterOptions.map((option) => (
          <Button
            key={option.value}
            size="small"
            variant={activeFilter === option.value ? 'contained' : 'outlined'}
            onClick={() => setActiveFilter(option.value)}
            className="!rounded-full !px-4 !font-semibold"
          >
            {option.label}
          </Button>
        ))}
      </div>

      {filteredItems.length === 0 ? (
        <Typography className="!text-slate-300">
          No items found for this filter.
        </Typography>
      ) : (
        <div className="grid gap-3">
        {filteredItems.map((publication) => (
          <Card
            key={publication.title}
            className="!rounded-xl !border !border-cyan-900/50 !bg-slate-900/55"
            elevation={0}
          >
            <CardContent>
              <div>
                <Typography className="!text-xs !uppercase tracking-wider !text-cyan-300">
                  {publication.venue}
                </Typography>
                <Typography className="!mt-1 !text-lg !font-semibold !text-slate-100">
                  {publication.title}
                </Typography>
                <Typography className="!mt-1 !text-slate-300">{publication.authors}</Typography>
                <Link
                  href={publication.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="hover"
                  className="!mt-3 !inline-block !font-medium !text-cyan-200 hover:!text-cyan-100"
                >
                  Read publication
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
        </div>
      )}
    </section>
  );
}

export default Publications;
