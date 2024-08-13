import CounterUp from "./CounterUp";

const Review = () => {
  return (
    <div className="bg-orange-500 container mx-auto grid grid-cols-1 mt-12 gap-y-4 lg:gap-y-0 lg:grid-cols-3 place-items-center py-12">
      <div>
        <CounterUp
          className="flex gap-x-2 text-white font-bold text-3xl order-1 justify-center"
          end={44}
          text="million"
          line="Transaction every 24 hours"
        />
      </div>
      <div>
        <CounterUp
          className="flex gap-x-2 text-white font-bold text-3xl justify-center"
          end={119}
          text="trillion"
          line="Assests Under Running"
        />
      </div>

      <div>
        <CounterUp
          className="flex gap-x-2 text-white font-bold text-3xl justify-center"
          end={45000}
          text="+"
          line="New Users Annually"
        />
      </div>
    </div>
  );
};

export default Review;
