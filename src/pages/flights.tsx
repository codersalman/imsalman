import React from 'react';

import flights from '@/data/flights.json';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import { AppConfig } from '@/utils/AppConfig';

interface IFlight {
  from: string;
  to: string;
  flightNumber: string;
  event: string;
}

const FlightRecord = ({ flight }: { flight: IFlight }) => {
  return (
    <div className="flex flex-col items-center justify-start space-y-3 rounded bg-gray-100 py-6 shadow-sm ring-1 ring-gray-200 backdrop-blur dark:bg-zinc-800 dark:ring-white/10">
      <div className="flex  items-center justify-center">
        <h3 className="m-2 text-sm">{flight.from}</h3>
        <h3 className="m-2 text-sm">{flight.to}</h3>
      </div>
      <h3 className="m-2 text-sm">{flight.flightNumber}</h3>
      <h3 className="m-2 text-sm">{flight.event}</h3>
    </div>
  );
};
export default function FlightsPage() {
  return (
    <Main
      meta={
        <Meta
          title={`Flights | ${AppConfig.title}`}
          description={AppConfig.description}
        />
      }
    >
      <div className="pb-8 pt-16">
        <h1 className="mb-2 text-5xl font-bold text-gray-900 dark:text-gray-200">
          <span role="img" aria-label="Hi">
            ✈️
          </span>{' '}
          Flights
        </h1>
        <h2 className="text-xl">Flights that I have taken</h2>

        <div className="mt-3 grid grid-cols-2 gap-2 lg:gap-4">
          {flights.map((flight: IFlight, i: number) => (
            <FlightRecord flight={flight} key={i} />
          ))}
        </div>
      </div>
    </Main>
  );
}
