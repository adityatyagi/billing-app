import type { NextPage } from 'next';
import Stack from '@mui/material/Stack';
import Link from 'next/link';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

const Home: NextPage = () => (
  <Container>
    <Stack spacing={4}>
      <Link href="create-new-invoice">
        <Button variant="outlined" type="button">
          Create New Bill
        </Button>
      </Link>

      <Link href="invoices">
        <Button variant="outlined" type="button">
          Invoices
        </Button>
      </Link>

      <Link href="companies">
        <Button variant="outlined" type="button">
          Party Details
        </Button>
      </Link>
    </Stack>
  </Container>
);

export default Home;
