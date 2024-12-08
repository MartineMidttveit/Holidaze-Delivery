import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Button from '../../components/Button';
import { useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import useCurrencyFormatter from '../../hooks/useCurrencyFormatter';
import getVenueById from '../../api/requests/getVenueById.js';
import Header from './header.jsx';
import Media from './media.jsx';
import Info from './info.jsx';
import LoadingIndicator from '../../components/LoadingIndicator.jsx';

export default function BookingConfirmation() {
  const location = useLocation();
  const bookingData = location.state?.data;
  const venueId = location.state?.venueId;
  const howManyAdults = location.state?.guests.adults;
  const howManyChildren = location.state?.guests.children;

  const { data, isLoading } = useQuery({
    queryKey: ['booking'],
    queryFn: () => getVenueById(venueId),
  });

  const price = useCurrencyFormatter(data?.price);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isLoading) return <LoadingIndicator />;

  return (
    <div className="bg-background">
      <Helmet>
        <title>Booking confirmed!</title>
        <meta
          name="description"
          content="Your booking is confirmed! Thank you for choosing Holidaze. Check your details and get ready for an unforgettable stay!"
        />
      </Helmet>
      <div className="bg-white w-full md:w-5/6 lg:w-3/4 xl:w-2/3 2xl:w-2/3 3xl:w-1/2 mx-auto px-[8%] lg:px-[10%] xl:px-[12%] py-[8%] lg:pt-[3%] lg:pb-[4%]">
        <Header />

        <Media data={data} />

        <Info
          bookingData={bookingData}
          howManyAdults={howManyAdults}
          howManyChildren={howManyChildren}
          price={price}
        />

        <div className="flex w-full gap-3 mt-6">
          <Button variant="third" disabled>
            Cancel booking
          </Button>

          <Button disabled>Edit booking</Button>
        </div>
      </div>
    </div>
  );
}