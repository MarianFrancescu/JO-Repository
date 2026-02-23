import { Link, Typography } from '@mui/material';
import type { Profile } from '../../data/types';

interface FooterProps {
  profile: Profile;
}

function Footer({ profile }: FooterProps): JSX.Element {
  return (
    <footer className="mt-8 border-t border-cyan-900/50 pt-5 pb-8">
      <div className="flex flex-col items-start justify-between gap-3 text-sm text-slate-400 md:flex-row md:items-center">
        <Typography className="!text-sm !text-slate-300">
          © 2026 {profile.name}. All rights reserved.
        </Typography>
        <div className="flex items-center gap-4">
          <Link
            href="https://scholar.google.com/"
            target="_blank"
            rel="noopener noreferrer"
            underline="hover"
            className="!text-slate-200 hover:!text-white"
          >
            Google Scholar
          </Link>
          <Link
            href="https://arxiv.org/"
            target="_blank"
            rel="noopener noreferrer"
            underline="hover"
            className="!text-slate-200 hover:!text-white"
          >
            arXiv
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
