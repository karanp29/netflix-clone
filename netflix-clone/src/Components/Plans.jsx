const Plans = () => {
  const plans = [
    {
      planType: "Premium",
      description:
        "A cinematic experience with the best picture and audio quality.",
      price: 649,
    },
    {
      planType: "Standard",
      description:
        "A cinematic experience with the best picture and audio quality.",
      price: 499,
    },
    {
      planType: "Basic",
      description:
        "A cinematic experience with the best picture and audio quality.",
      price: 199,
    },
    {
      planType: "Mobile",
      description:
        "A cinematic experience with the best picture and audio quality.",
      price: 149,
    },
  ];

  return (
    <div className="">
      <h1 className="">Plan that suits your needs</h1>
      <div className="flex gap-2">
        {plans.map(({ planType, description, price }) => {
          return (
            <div className="card" key={planType}>
              <div className="red-card p-4 rounded">
                <h1>{planType}</h1>
                <p className="break-words">{description}</p>
                <p>{`Rs. ${price}/month `}</p>
              </div>
            </div>
          );
        })}
      </div>

      <h1 className="w-full">Extra Chill</h1>
      <div className="flex gap-2">
        {plans.map(({ planType, description, price }) => {
          return (
            <div className="card" key={planType}>
              <div className="mix-bg p-4 rounded">
                <h1>{planType}</h1>
                <p className="break-words">{description}</p>
                <p>{`Rs. ${price}/month `}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Plans;
