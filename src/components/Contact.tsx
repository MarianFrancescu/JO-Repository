import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import {
  Box,
  Card,
  CardContent,
  Stack,
  Typography,
} from '@mui/material';
import type { ContactInfo } from '../data/types';

interface ContactProps {
  details: ContactInfo;
}

function Contact({ details }: ContactProps): JSX.Element {
  return (
    <section id="contact" className="scroll-mt-24 mb-10">
      <div className="mb-5 flex items-center gap-4">
        <Typography component="h2" className="!text-3xl !font-semibold !text-slate-50">
          Contact
        </Typography>
        <div className="h-px flex-1 bg-gradient-to-r from-cyan-800/70 to-transparent" />
      </div>

      <div className="grid gap-4">
        <Card className="!rounded-xl !border !border-cyan-900/50 !bg-slate-900/55" elevation={0}>
          <CardContent>
            <Typography className="!leading-8 !text-slate-200">{details.intro}</Typography>

            <Stack spacing={2} className="!mt-4">
              <Box className="flex items-center gap-2 text-slate-200">
                <EmailOutlinedIcon fontSize="small" className="!text-cyan-300" />
                <Typography>{details.email}</Typography>
              </Box>
              <Box className="flex items-center gap-2 text-slate-200">
                <LocationOnOutlinedIcon fontSize="small" className="!text-cyan-300" />
                <Typography>{details.location}</Typography>
              </Box>
            </Stack>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default Contact;
