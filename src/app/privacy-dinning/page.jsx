const page = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col w-[70vw] gap-20 max-md:w-full max-md:p-3">
        <h1 className=" uppercase text-3xl">
          Private Dining and Special Events
        </h1>

        <div className="flex flex-col gap-6">
          <p className="text-2xl uppercase">Chef’s Table</p>
          <div className="flex justify-between  max-md:flex-col max-md:justify-center max-md:items-center">
            <div className="flex flex-col gap-2 w-[58%] max-md:w-full ">
              <div className="flex flex-col gap-2 w-full ">
                <div className="w-full h-[1px] bg-black"></div>
                <div className="w-full h-[1px] bg-black"></div>
              </div>
              <p>
                The focal point of the Kouzina is the Chef’s Table. It is a
                beautiful 20 foot long hand-carved wooden table that can
                accommodate up to 20 people. This space is ideal for
                celebrations, special family events and casual business
                functions that do not require a completely private space.
              </p>
            </div>
            <img
              src="/private1.jpg"
              alt="pricate_image1"
              className="w-[40%] object-contain"
            />
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <p className="text-2xl uppercase">OENOS ROOM</p>
          <div className="flex justify-between max-md:flex-col max-md:justify-center max-md:items-center">
            <div className="flex flex-col gap-2 w-[58%] max-md:w-full  ">
              <div className="flex flex-col gap-2 w-full ">
                <div className="w-full h-[1px] bg-black"></div>
                <div className="w-full h-[1px] bg-black"></div>
              </div>
              <p>
                Adjacent to the Kouzina is the Oenos or “wine” room. This is one
                of Kokkari’s two private dining rooms. This room features large
                windows that look out on to Jackson Street and a dramatic wall
                of wine racks that spans floor to ceiling. The large,
                wood-framed, sliding glass doors that separate the Oenos Room
                from the main dining area allow guests to feel part of the
                restaurant while still being in a private space. This room can
                accommodate 30 people
              </p>
            </div>
            <img
              src="/private2.jpg"
              alt="pricate_image1"
              className="w-[40%] object-contain"
            />
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <p className="text-2xl uppercase">HANIA</p>
          <div className="flex justify-between max-md:flex-col max-md:justify-center max-md:items-center">
            <div className="flex flex-col gap-2 w-[58%] max-md:w-full ">
              <div className="flex flex-col gap-2 w-full ">
                <div className="w-full h-[1px] bg-black"></div>
                <div className="w-full h-[1px] bg-black"></div>
              </div>
              <p>
                This unique private dining room is located downstairs and is
                completely separate from the main dining area. The room has the
                feel of a wine cellar with warm wood accents and rich, tapestry
                carpets. It features a rectangular polished wood table that
                accommodates up to 10 people comfortably. The Hania Room is
                ideal for small business meetings and intimate family
                functions.e
              </p>
            </div>
            <img
              src="/private3.jpg"
              alt="pricate_image1"
              className="w-[40%] object-contain"
            />
          </div>
        </div>

        <div className="flex flex-col gap-6 border-2 border-black p-4">
          <p className="uppercase text-2xl ">
            Further Group Dining Information
          </p>
          <p>
            For group dining options, room minimums and availability, please
            contact our Event Manager, Bibi Bahador.
          </p>
          <p className="font-semibold">
            Phone:<span className="font-normal">415.981.0983</span>
          </p>
          <p className="font-semibold">
            Email:<span className="font-normal">events@kokkari.com</span>
          </p>
          <p className="font-semibold">
            Download:<span className="font-normal">Private Dining Packet or Lunch Event Packet</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
