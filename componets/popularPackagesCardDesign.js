
const cardDesign = [
    {
      imgUrl : '/asset/papular-plans/india.jpg',
      contry : 'India',
      packages : '90 Package',
    },
    {
      imgUrl : '/asset/papular-plans/america.jpg',
      contry : 'America',
      packages : '45 Package',
    },
    {
      imgUrl : '/asset/papular-plans/Dubai.jpg',
      contry : 'Dubai',
      packages : '25 Package',
    },
    {
      imgUrl : '/asset/papular-plans/africa.jpg',
      contry : 'Africa',
      packages : '124 Package',
    },
    {
      imgUrl : '/asset/papular-plans/africa.jpg',
      contry : 'Africa',
      packages : '124 Package',
    }
  ];
  cardDesign.map((e) =>{
    document.write(`
        <div class="flex flex-col max-w-44 min-w-44 gap-3 border-[0.6px] p-2 rounded-xl sm:p-3 lg:p-3 sm:max-w-48 sm:min-w-48 md:max-w-60 md:min-w-60 lg:max-w-64 lg:min-w-64">
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
                <p class="text-black-3 h2">${e.contry}</p>
              </div>
              <p
                class="bg-Gray-2 text-black-3 rounded-lg px-3 pt-1 pb-2 flex justify-center items-center h2">
              ${e.packages}</p>
            </div>
          </div>
        `)
 });
