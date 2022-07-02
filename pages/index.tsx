import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => (
  <section className="flex flex-col items-center w-100">
    <Link href="create-new">
      <button
        type="button"
        className="px-4 py-2 my-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
      >
        Create New Bill
      </button>
    </Link>
    <Link href="invoices">
      <button
        type="button"
        className="px-4 py-2 my-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
      >
        Invoices
      </button>
    </Link>
    <Link href="companies">
      <button
        type="button"
        className="px-4 py-2 my-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
      >
        Party Details
      </button>
    </Link>
  </section>
);

export default Home;
