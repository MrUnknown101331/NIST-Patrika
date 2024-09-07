function getNews(i: number) {
    const titles = [
        "How Much Will the iPhone 16 Cost?",
        "I deleted Instagram because it was making me anxious. I have no FOMO now, and I'm closer to my friends.",
        "Teens won $50,000 for inventing a flood forecasting technology they hope can help millions of people at risk worldwide",
        "Virgin is spending $17 billion on new planes and cabins. See inside its Airbus A330neo, with niche perks like Bluetooth.",
        "Backlash against immigrants challenges Canada's welcoming image",
        "Global Warming Breaks Another Record With Hottest Summer Ever",
        'El gran "sorpasso" de China a EEUU ya ha llegado y nos dice mucho sobre la calidad de vida: el consumo de proteínas',
        "Turn any bike into an e-bike in seconds with this nifty gadget",
        "Potentially devastating typhoon approaching Hong Kong, disrupting life and business",
        "Malas noticias: un tifón devastador se acerca al núcleo de fabricación y entrega del iPhone 16",
        "China's mysterious space plane returns to Earth after 268 days in orbit",
        "Witness 1.8 billion years of tectonic plates dance across Earth's surface in a new animation",
        "The FDA has an inspector shortage -- now that the low-paid workers have shifted to the private sector",
        "The top 10 business schools for career growth",
        "Storey and Sandilands take GB to 38 golds in Paris",
        "Adani Plans $10 Billion India Chip Plant With Israel’s Tower",
        "What killing of Hindu teen by India cow vigilantes tells us about Modi 3.0",
        "Russia-Ukraine war: List of key events, day 924"
    ];
    const descs = [
        "Apple's next-generation iPhone 16 series is expected to launch on September 20 and will compete in a quickly evolving smartphone market, and with some notable upgrades rumored, the new models could see price changes compared to previous years.",
        "Over 150 days ago I decided to delete Instagram. I'm more productive now and closer to my friends despite not sharing memes all the time.",
        "This year's first place Earth Prize went to four teens for developing a new way to visualize flood risk using AI and computer modeling.",
        "Virgin Atlantic's Airbus A330neo debuted with an exclusive 'Retreat Suite' business class and ditched bars for a new social space called the 'Loft.'",
        "A growing perception in Canada that immigration is to blame for some of the country's economic woes is fuelling a xenophobic backlash evidenced by a surge in...",
        "Across the world, soaring temperatures are testing the limits of the human body, posing threats and even causing deaths at outdoor activities such as concerts, sports events, and religious gatherings.",
        "Ni en músculo económico, ni en patentes, ni en innovación tecnológica. El gran sorpasso de China sobre Estados Unidos lo marca otro indicador igual de crucial pero algo menos evidente: las proteínas. Los datos recogidos por la FAO, la agencia alimentaria de l…",
        "Innovative startup Clip has developed a gadget to quickly convert a regular bike into an e-bike without tools or complex installations.",
        "Super Typhoon Yagi, the second strongest tropical cyclone of 2024, is impacting southern China, once again highlighting Apple's reliance on the country as iPhone 16 launches.Satellite imagery provided by NASA of Yagi with Apple logos indicating factories and …",
        "El iPhone 16 ya se encuentra en la fase final de ensamblaje. Algunos modelos están ya fabricados desde el pasado mes de julio y la producción no cesa para hacer frente a una demanda histórica. Apple  de iPhone 16, una de las mayores previsiones en los últimos…",
        "China's reusable space plane has landed after spending over 8 months in orbit on a largely secret mission.",
        "Using information from inside the rocks on Earth's surface, we have reconstructed the plate tectonics of the planet over the last 1.8 billion years.",
        "Some 2,000 drug-making firms haven’t had their operations inspected by federal regulators in years, as Food and Drug Administration inspectors leave the agency for better jobs in the private sector.Read more...",
        "Pursuing a Master of Business Administration (MBA) can be a powerful investment for career development.Read more...",
        "A round-up of what has happened so far on day nine at the 2024 Paralympics, with Great Britain already winning three medals.",
        "(Bloomberg) -- Sign up for the India Edition newsletter by Menaka Doshi – an insider's guide to the emerging economic powerhouse, and the billionaires and...",
        "What happens when the vigilantes 'mistakenly' shoot a Hindu teenager dead after a 40km chase, thinking he was a Muslim?",
        "As the war enters its 924th day, these are the main developments."
    ];
    const urls = [
        "https://www.macrumors.com/2024/09/06/how-much-will-iphone-16-cost/",
        "https://www.businessinsider.com/deleted-instagram-and-its-helped-anxiety-fomo-productivity-2024-9",
        "https://www.businessinsider.com/teens-win-50000-earth-prize-flood-forecasting-model-2024-8",
        "https://www.businessinsider.com/virgin-a330neo-new-business-premium-economy-cabins-bluetooth-2024-9",
        "https://ca.news.yahoo.com/backlash-against-immigrants-challenges-canadas-100523663.html",
        "https://time.com/7018495/hottest-summer-record-heat-extreme-temperatures-global-warming-climate-change/",
        "https://www.xataka.com/magnet/china-ha-logrado-marcarse-sorpasso-estados-unidos-indicador-clave-consumo-proteinas",
        "https://www.foxnews.com/tech/turn-any-bike-e-bike-seconds-nifty-gadget",
        "https://appleinsider.com/articles/24/09/06/potentially-devastating-typhoon-approaching-hong-kong-disrupting-life-and-business",
        "https://www.applesfera.com/iphone/malas-noticias-tifon-devastador-se-acerca-al-nucleo-fabricacion-entrega-iphone-16",
        "https://www.space.com/china-space-plane-lands-268-days",
        "https://phys.org/news/2024-09-witness-billion-years-tectonic-plates.html",
        "https://qz.com/fda-inspections-drug-makers-worker-shortage-1851641665",
        "https://qz.com/top-10-mba-programs-globally-linkedin-report-1851640783",
        "https://www.bbc.com/sport/articles/clynje4yjjxo",
        "https://finance.yahoo.com/news/adani-plans-10-billion-india-075728828.html",
        "https://www.aljazeera.com/news/2024/9/6/what-killing-of-hindu-teen-by-india-cow-vigilantes-tells-us-about-modi-3-0",
        "https://www.aljazeera.com/news/2024/9/6/russia-ukraine-war-list-of-key-events-day-924"
    ];
    const imgUrl = [
        "https://images.macrumors.com/t/xcTabKWMzOGvrlv91McWob6xGn0=/2000x/article-new/2024/06/iPhone-16-Pro-Front-Update-Blue.jpg",
        "https://i.insider.com/66d9e2291d8d2deb96b95d61?width=1200&format=jpeg",
        "https://i.insider.com/66cf3b2e43b5e59d16b5f3dc?width=1200&format=jpeg",
        'https://i.insider.com/66da03045444ffafa762d717?width=1200&format=jpeg',
        'https://media.zenfs.com/en/reuters.com/7f6d130d18825f384b0c7f6527400aac',
        'https://api.time.com/wp-content/uploads/2024/09/turkey-extreme-heat-fire.jpg?quality=85&w=1024&h=628&crop=1',
        'https://i.blogs.es/f694b5/josh-appel-8q3a_pb8jf0-unsplash/840_560.jpeg',
        'https://static.foxnews.com/foxnews.com/content/uploads/2024/09/2-Turn-any-bike-into-an-e-bike-in-seconds-with-this-nifty-gadget.jpg',
        'https://photos5.appleinsider.com/gallery/60941-125552-IMG_0890-xl.jpg',
        'https://i.blogs.es/ddf72b/tifon-iphone/840_560.jpeg',
        'https://cdn.mos.cms.futurecdn.net/cGtCuNH7okM3obeutT7Dhk-1200-80.jpg',
        'https://scx2.b-cdn.net/gfx/news/hires/2022/tectonic-plates.jpg',
        "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/528921d68e92e2f58a2df4f970965b86.jpg",
        "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/e2d9b952fff06c3dac7da840ee596e33.jpg",
        'https://ichef.bbci.co.uk/news/1024/branded_sport/1d66/live/70a178d0-6c3d-11ef-8589-49d352db8330.png',
        'https://s.yimg.com/ny/api/res/1.2/oL6bVmDg.k2fCopA.5n8Jw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/bloomberg_technology_68/289d36555d03802182b8b9c08d7a00bd',
        'https://www.aljazeera.com/wp-content/uploads/2023/07/2017-11-06T120404Z_1750438941_RC16194CB200_RTRMADP_3_INDIA-POLITICS-RELIGION-COWS-1689844431.jpg?resize=1920%2C1440',
        'https://www.aljazeera.com/wp-content/uploads/2024/09/AFP__20240905__36FD9CC__v1__HighRes__UkraineRussiaConflictWar-1725582495.jpg?resize=1200%2C630'
    ];


    return Array.from({length: i}).map((_, index) => ({
        title: titles[index % titles.length],
        desc: descs[index % descs.length],
        url: urls[index % urls.length],
        imgUrl: imgUrl[index % imgUrl.length]
    }));

}

export default getNews;