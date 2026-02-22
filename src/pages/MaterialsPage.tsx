import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import { Button, Card, CardContent, Divider, Link, List, ListItem, Typography } from '@mui/material';
import { materials } from '../data/materials';

function MaterialsPage(): JSX.Element {
  return (
    <div className="relative z-10 mx-auto w-[min(980px,92%)] py-12 md:py-14">
      <header className="mb-10">
        <Button
          href="/portfolio"
          startIcon={<ArrowBackRoundedIcon />}
          variant="outlined"
          className="!mb-5 !rounded-lg !border-cyan-700/70 !px-4 !py-2 !font-semibold !text-cyan-100 hover:!border-cyan-500 hover:!bg-cyan-500/10"
        >
          Back to Portfolio
        </Button>

        <div className="flex items-center gap-3">
          <img src="/logo-mark.svg" alt="App logo" className="h-9 w-9 rounded-md" />
          <Typography component="h1" className="!text-3xl !font-bold !text-slate-50 md:!text-4xl">
            Materials
          </Typography>
        </div>
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
            <Card
              className="!rounded-xl !border !border-cyan-900/50 !bg-slate-900/55"
              elevation={0}
            >
              <CardContent className="!p-0">
                <List className="!py-0">
                  {group.items.map((item, index) => (
                    <div key={item.title}>
                      <ListItem className="!flex !items-center !justify-between !px-4 !py-3">
                        <Typography className="!text-slate-200">{item.title}</Typography>
                        <Link
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          underline="hover"
                          className="!font-medium !text-cyan-200 hover:!text-cyan-100"
                        >
                          Open
                        </Link>
                      </ListItem>
                      {index < group.items.length - 1 && (
                        <Divider className="!border-cyan-900/40" />
                      )}
                    </div>
                  ))}
                </List>
              </CardContent>
            </Card>
          </section>
        ))}
      </div>
    </div>
  );
}

export default MaterialsPage;
