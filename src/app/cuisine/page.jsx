const page = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col w-[70vw] gap-20 max-md:w-full max-md:justify-center max-md:items-center"> 
        <div className="flex flex-col gap-3 max-md:justify-center max-md:items-center">
          <p className="upppercase text-3xl">Kouzina — κουζίνα</p>
          <div className="flex gap-10 w-full max-md:flex-col max-md:justify-center max-md:items-center">

            <div className="flex flex-col gap-7 w-[60%] max-md:w-full max-md:p-2">
              <div className="flex flex-col gap-2 w-full ">
                <div className="w-full h-[1px] bg-black"></div>
                <div className="w-full h-[1px] bg-black"></div>
              </div>
              <p>
                Although we operate in San Francisco and draw on the bounty of
                Northern California, we owe our culinary aesthetic to Greece,
                where diners take more pleasure in quality ingredients than in
                artful embellishment.
              </p>
              <p>
                We have modernized many Greek dishes while staying true to the
                signature tastes of the Greek table, respecting the pure flavors
                of sweet baby lamb, tangy homemade yogurt, and the woodsy scent
                of wild oregano
              </p>
              <p>
                While Greece is a country with dramatically varied landscapes
                and widely dispersed archipelagos, there is a singularly Greek
                flavor palette, a collection of ingredients and preparation,
                that define what we do at the Kokkari.
              </p>
              <p>
                The appetizing aroma of wood smoke, coming from our open hearth,
                charcoal grill, and wood-fired oven, perfumes our dishes and
                enhances the of warmth of family and friends.
              </p>
              <p>
                Our menu, showcasing seafood and game, features many of the most
                sought-after traditional Aegean dishes, as well as selections
                which have been modernized through the innovative blending of
                cultures and techniques. Horiatiki, the classic Greek salad is
                offered along side the Maroulosalata, a version of the chopped
                salad with a creamy feta dressing, pine nuts and Kalamata
                olives. Tender grilled octopus is garnished with lemon juice and
                olive oil; a classic Greek preparation, while calamari is
                stuffed with feta, fennel and orange; a more modern combination.
                Lamb chops are served straight from the mesquite grill with
                hints of garlic, oregano and lemon juice. While traditional
                soutzoukakia, or lamb meatballs, are enlivened with a hint of
                cumin and tangy Greek yogurt.
              </p>
            </div>
            
            <div className="flex flex-col w-[40%] max-md:w-full">
              <img src="/cuisine1.jpg" alt="cuisin1" className="w-full object-contain"/>
              <img src="/cuisine2.jpg" alt="cuisin2" className="w-full object-contain"/>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
