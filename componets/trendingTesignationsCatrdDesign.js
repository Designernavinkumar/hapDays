
const cardDesign1 = [
    {
      imgUrl : '/asset/papular-plans/london.jpg',
      contry : 'London',
      packages : '12 Days',
    },
    {
      imgUrl : '/asset/papular-plans/japan.jpg',
      contry : 'Japan',
      packages : '1 Week',
    },
    {
      imgUrl : '/asset/papular-plans/hanoi.jpg',
      contry : 'Hanoi',
      packages : '17 Days',
    },
    {
      imgUrl : '/asset/papular-plans/bali.jpg',
      contry : 'Bali',
      packages : '1 Month',
    },
  ];
  cardDesign1.map((e) =>{
    document.write(`
        <div class="flex flex-col w-1/4 gap-3 border-[0.6px] p-3 rounded-xl">
            <div class="relative">
              <img class="w-full" src="${e.imgUrl}">
              <div style="border-top-right-radius: 24px" ;
                class="absolute w-10 h-10 bg-Gray-1/90 flex justify-center items-center right-3 top-3 rounded-b-full rounded-l-full">
                <img class="h-5" src="/asset/icon/share-icon.svg" alt="share">
              </div>
            </div>
            <div class="flex flex-row justify-between">
              <div class="flex flex-row items-center gap-1">
                <img class="w-5" src="/asset/png-icons/location-icon.png" alt="">
                <p class="text-base text-black-3">${e.contry}</p>
              </div>
              <p
                class="bg-Gray-2 text-black-3 rounded-lg px-3 pt-1 pb-2 flex justify-center items-center text-sm font-semibold">
              ${e.packages}</p>
            </div>
          </div>
        `)
 });