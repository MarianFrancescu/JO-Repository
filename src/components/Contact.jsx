import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import {
  Box,
  Button,
  Card,
  CardContent,
  Stack,
  TextField,
  Typography,
} from '@mui/material';

function Contact({ details }) {
  return (
    <section id="contact" className="scroll-mt-24 mb-10">
      <div className="mb-5 flex items-center gap-4">
        <Typography component="h2" className="!text-3xl !font-semibold !text-slate-50">
          Contact
        </Typography>
        <div className="h-px flex-1 bg-gradient-to-r from-cyan-800/70 to-transparent" />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
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

        <Card className="!rounded-xl !border !border-cyan-900/50 !bg-slate-900/55" elevation={0}>
          <CardContent>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              <TextField
                size="small"
                label="Name"
                fullWidth
                className="md:col-span-1"
                placeholder="Your name"
              />
              <TextField
                size="small"
                label="Email"
                fullWidth
                className="md:col-span-1"
                placeholder="you@example.com"
              />
              <TextField
                size="small"
                label="Message"
                fullWidth
                multiline
                minRows={5}
                className="md:col-span-2"
                placeholder="How can we collaborate?"
              />
            </div>

            <Button
              fullWidth
              variant="contained"
              className="!mt-3 !h-11 !font-semibold !bg-cyan-400 !text-slate-950 hover:!bg-cyan-300"
            >
              Send Inquiry
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default Contact;
