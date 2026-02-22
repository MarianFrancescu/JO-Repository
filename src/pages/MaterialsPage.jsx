import { Card, CardContent, Link, Typography } from '@mui/material';
import { materials } from '../data/materials';

function MaterialsPage() {
  return (
    <div className="relative z-10 mx-auto w-[min(980px,92%)] py-12 md:py-14">
      <header className="mb-10 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src="/logo-mark.svg" alt="App logo" className="h-9 w-9 rounded-md" />
          <Typography component="h1" className="!text-3xl !font-bold !text-slate-50 md:!text-4xl">
            Materials
          </Typography>
        </div>
        <Link
          href="/portfolio"
          underline="none"
          className="!rounded-lg !bg-cyan-500/20 !px-4 !py-2 !font-semibold !text-cyan-100 hover:!bg-cyan-500/30"
        >
          Back to Portfolio
        </Link>
      </header>

      <Typography className="!mb-6 !max-w-3xl !text-lg !text-slate-200">
        This route is reserved for research materials, documents, slides, and other
        supporting resources.
      </Typography>

      <div className="space-y-8">
        {materials.map((group) => (
          <section key={group.section}>
            <Typography className="!mb-3 !text-2xl !font-semibold !text-slate-100">
              {group.section}
            </Typography>
            <div className="grid gap-4 md:grid-cols-2">
              {group.items.map((item) => (
                <Card
                  key={item.title}
                  className="!rounded-xl !border !border-cyan-900/50 !bg-slate-900/55"
                  elevation={0}
                >
                  <CardContent>
                    <Typography className="!mb-2 !text-xl !font-semibold !text-slate-100">
                      {item.title}
                    </Typography>
                    <Typography className="!mb-4 !text-slate-300">
                      {item.description}
                    </Typography>
                    <Link
                      href={item.href}
                      underline="hover"
                      className="!font-medium !text-cyan-200 hover:!text-cyan-100"
                    >
                      Open
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default MaterialsPage;
