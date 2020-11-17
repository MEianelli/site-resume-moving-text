const posts = [
  {
    "id": "0",
    "title": "Born in Campinas",
    "type": "personal",
    "year": "1983",
    "detail": "I was Born and raised in Campinas, on Sao Paulo state and lived there until 7 years old. Pretty normal childhood, playing soccer, trips to the beach, Atari and Donkey Kong on Super Nintendo with my two younger brother and three cousins.",
    "mainword": "Born",
    "wordtolink": "N/A",
    "imgsrc": "../Icons/pic.jpg"
  },
  {
    "id": "1",
    "title": "Moved to Rio de Janeiro ",
    "type": "personal",
    "year": "1990",
    "detail": "My father (Agronomist) was transferred to Rio de Janeiro and we had to move to Rio de Janeiro.",
    "mainword": "Rio",
    "wordtolink": "N/A",
    "imgsrc": "../Icons/pic2.jpg"
  },
  {
    "id": "2",
    "title": "Went to Disney World",
    "type": "personal",
    "year": "1994",
    "detail": "First big trip that I remember. Best memories: apple juice, playing X-men on hotel arcade where my brother put a 10 dollars bill on change machine and got a sea of quarters, peeing on a tree (legal in Brazil) and getting yelled at by a cop, Space Mountain!!!",
    "mainword": "Disney",
    "wordtolink": "N/A",
    "imgsrc": "../Icons/pic3.jpg"
  },
  {
    "id": "3",
    "title": "Messed with DOS on Computer",
    "type": "personal",
    "year": "1995",
    "detail": "Around this year I started playing with our home computer (486), I got excited to learn some DOS commands like copy and format, which I did a couple of times by accident and pissed off my parents. All that just to play Prince of Persia.",
    "mainword": "DOS",
    "wordtolink": "N/A",
    "imgsrc": "../Icons/pic4.jpg"
  },
  {
    "id": "4",
    "title": "Started Skateboarding ",
    "type": "personal",
    "year": "1996",
    "detail": "One time a friend and I were riding on a forbidden garage and we made the guard so mad he hit us, 13 years old kids, with his baton",
    "mainword": "Skate",
    "wordtolink": "N/A",
    "imgsrc": "../Icons/skate.png"
  },
  {
    "id": "5",
    "title": "Started learning Guitar",
    "type": "personal",
    "year": "1997",
    "detail": "My father was very much into music and wanted us to learn how to play an instrument, so, one day in 1997 he asked what I wanted and since I had some piano lessons when I was 5 yo I asked for a piano. Next day he shows up with an acoustic guitar.",
    "mainword": "Guitar",
    "wordtolink": "N/A",
    "imgsrc": "../Icons/guitar.png"
  },
  {
    "id": "6",
    "title": "Playing Starcraft",
    "type": "personal",
    "year": "1997",
    "detail": "Childhood playing Megaman X on super nintendo, then Goldeneye on N64 evolved to computer games like warcraft 2 and then Starcraft. Show me the money!",
    "mainword": "Starcraft",
    "wordtolink": "N/A",
    "imgsrc": "../Icons/starcraft.png"
  },
  {
    "id": "7",
    "title": "Started a Band",
    "type": "personal",
    "year": "1998",
    "detail": "This year we moved to a new apartment where I started hanging out with some metalheads, listening to Sepultura, Pearl Jam, Nirvana, and which of course eventually led to starting a band",
    "mainword": "Band",
    "wordtolink": "N/A",
    "imgsrc": "../Icons/cesio.png"
  },
  {
    "id": "8",
    "title": "Lived in Canada of 6 months",
    "type": "education",
    "year": "2000",
    "detail": "During the second half of this year I lived in Canada, doing a International Student Program to learn english. Lived in Bridgewater, near Halifax, NS. Went to highschool, had a locker, played soccer. Had such a great time that now (2017) Im living in Toronto",
    "mainword": "Canada",
    "wordtolink": "N/A",
    "imgsrc": "../Icons/novascotia.png"
  },
  {
    "id": "9",
    "title": "Graduated from High School",
    "type": "education",
    "year": "2001",
    "detail": "In Brazil we have this SAT like test we need to pass in order to get to top colleges. I had to study an entire year after high school to get into USP",
    "mainword": "School",
    "wordtolink": "N/A",
    "imgsrc": "../Icons/bahiense.png"
  },
  {
    "id": "10",
    "title": "USP - Electrical Engineering",
    "type": "education",
    "year": "2003",
    "detail": "Love for video games, computers, good in math and physics during school, so Electrical Engineering sounded like a good idea",
    "mainword": "Engineering",
    "wordtolink": "N/A",
    "imgsrc": "../Icons/usp-logo.png"
  },
  {
    "id": "11",
    "title": "Playing Diablo 2",
    "type": "personal",
    "year": "2004",
    "detail": "As a gift for getting into college I got a computer, and then a friend introduced me the real life destroyer, also known as home lan network to play Diablo 2.",
    "mainword": "Diablo",
    "wordtolink": "N/A",
    "imgsrc": "../Icons/diablo2.png"
  },
  {
    "id": "12",
    "title": "Monitored Assembly classes",
    "type": "programming",
    "year": "2005",
    "detail": "The first computer science class I took in college I struggled a lot at first, but luckily the teacher helped me after class and when I started to the get the hang of it I loved it. After one year on computer science lab we had to build a simple network using assembly and a 8086 microprocessor. I loved so much coding in assembly the teacher asked me to help the other classmates groups.",
    "mainword": "Assembly",
    "wordtolink": "N/A",
    "imgsrc": "../Icons/protoboard.png"
  },
  {
    "id": "13",
    "title": "Worked on a chocolate factory",
    "type": "professional",
    "year": "2006",
    "detail": "Student with no money equals working at night making chocolate for a couple months just to buy a new graphic card",
    "mainword": "chocolate",
    "wordtolink": "N/A",
    "imgsrc": "../Icons/usp-logo.png"
  },
  {
    "id": "14",
    "title": "Met my Wife",
    "type": "personal",
    "year": "2006",
    "detail": "The college (USP) was in Sao Carlos, SP. My wife Tieni was a friends' friend in Rio de Janeiro from the time I lived there. Nine hour bus drive to see eachother once a month. Totally worth it.",
    "mainword": "Wife",
    "wordtolink": "N/A",
    "imgsrc": "../Icons/wake.png"
  },
  {
    "id": "15",
    "title": "Playing World of Warcraft",
    "type": "personal",
    "year": "2007",
    "detail": "Now this game speaks for it self, but I consider it important because: I practiced my english and I had to learn how to manage 20 screaming people on voice chat to complete the raids",
    "mainword": "Warcraft",
    "wordtolink": "N/A",
    "imgsrc": "../Icons/wow.png"
  },
  {
    "id": "16",
    "title": "Got an internship at Logicalis",
    "type": "professional",
    "year": "2009",
    "detail": "Logicalis is an Information and communication technology (ICT) company. Thankfully they had a logic test on their hiring process which I do really well and helped me to get the internship.",
    "mainword": "Logicalis",
    "wordtolink": "N/A",
    "imgsrc": "../Icons/logicalis.png"
  },
  {
    "id": "17",
    "title": "Graduated from College",
    "type": "education",
    "year": "2010",
    "detail": "It took 2 years more then it should, but Functions of complex Variable class and and World of Warcraft was too much to handle",
    "mainword": "Graduated",
    "wordtolink": "N/A",
    "imgsrc": "../Icons/graduation.png"
  },
  {
    "id": "18",
    "title": "Got a CISCO CCNA certification",
    "type": "professional",
    "year": "2010",
    "detail": "CCNA (Cisco Certified Network Associate) is an information technology (IT) certification from Cisco",
    "mainword": "CISCO",
    "wordtolink": "N/A",
    "imgsrc": "../Icons/usp-logo.png"
  },
  {
    "id": "19",
    "title": "Network Engineer at Logicalis ",
    "type": "professional",
    "year": "2010",
    "detail": "Field Engineer: Planning, configuring and Installing Routers and Switches on service providers core IP Network projects. Project Management: Scheduled activities, Design and maintenance of project documents",
    "mainword": "Engineer",
    "wordtolink": "N/A",
    "imgsrc": "../Icons/usp-logo.png"
  },
  {
    "id": "20",
    "title": "Changed to Sales Engineer",
    "type": "professional",
    "year": "2013",
    "detail": "Analysis of RFPs (Clients Request for Proposal). Design and development of project proposals with required services and equipment for Brazil's main service provider networks and platforms such as Core IP, DCN and WiFi. Managing third party suppliers, evaluating technical difficulties and possible solutions. Presenting sold projects to the Implementation Team.",
    "mainword": "Sales",
    "wordtolink": "N/A",
    "imgsrc": "../Icons/usp-logo.png"
  },
  {
    "id": "21",
    "title": "Promoted to Project Engineer",
    "type": "professional",
    "year": "2014",
    "detail": "Project Management: Assemble of engineer and technicians team for each project. Kick-off meetings with clients and engineer team. Purchased equipments and followed up the transport from importation to delivery. Weekly meetings with cash-flow team to: Review plan and project expenses, ex: technicians and engineer hour assignments, installation materials, etc. Design and maintenance of project documents.",
    "mainword": "Project",
    "wordtolink": "N/A",
    "imgsrc": "../Icons/usp-logo.png"
  },
  {
    "id": "22",
    "title": "Started learning Drums",
    "type": "personal",
    "year": "2014",
    "detail": "I had this dumb idea that learning drums would help balance my rational and emotional mind, because I consider myself too rational and that annoys me sometimes. Didnt help much with that but it is fun as hell to play.",
    "mainword": "Drums",
    "wordtolink": "N/A",
    "imgsrc": "../Icons/usp-logo.png"
  },
  {
    "id": "23",
    "title": "Started a Band, again",
    "type": "personal",
    "year": "2016",
    "detail": "Now as a drummer Ju, Daniel and I started the band Uni-Verse, recorded some songs and released them on Spotify.",
    "mainword": "Band",
    "wordtolink": "Spotify",
    "imgsrc": "../Icons/external-icon.png"
  },
  // {
  //   "id": "24",
  //   "title": "Started Climbing ",
  //   "type": "personal",
  //   "year": "2017",
  //   "detail": "Daniel and Ju from our band introduced me to it, and after all my life hiking, swimming, playing soccer, snowboarding, this is now my favorite outdoor activity.",
  //   "mainword": "Climbing",
  //   "wordtolink": "N/A",
  //   "imgsrc": "../Icons/usp-logo.png"
  // },
  {
    "id": "25",
    "title": "Left Logicalis",
    "type": "professional",
    "year": "2017",
    "detail": "Me and my wife decided to move to Canada. This was an opportunity to leave my job since I wasnt happy with it anymore, and try to pursuit a carrier that I actually like and not be just a job. I had so much fun coding during college that I decided to invest on Programming, and I've been studying Javascript/PHP since then. I'm enjoying a lot studying this, and I hope to find a job that I can do with pleasure.",
    "mainword": "Left",
    "wordtolink": "N/A",
    "imgsrc": "../Icons/usp-logo.png"
  },
  {
    "id": "26",
    "title": "Climbed Dedo de Deus summit",
    "type": "personal",
    "year": "2017",
    "detail": "On a sunny day you can see this summit from Rio de Janeiro, which is 70km away. As a kid I used to look at it as an unreachable place. And now thanks to my brother who guided the climb we've done it.",
    "mainword": "Dedo",
    "wordtolink": "N/A",
    "imgsrc": "../Icons/usp-logo.png"
  },
  {
    "id": "27",
    "title": "Started Javascript/PHP studies",
    "type": "programming",
    "year": "2017",
    "detail": "On May this year I started studying by following The Coding Train channel on YouTube where Daniel Shiffman teaches how to code JavaScript (with p5.js). After a while I bought a online course called phpdozeroaoprofissional taught by Bonieky Lacerda.",
    "mainword": "Javascript/PHP",
    "wordtolink": "The Coding Train,phpdozeroaoprofissional",
    "imgsrc": "../Icons/external-icon.png"
  },
  {
    "id": "28",
    "title": "Made a Javascript game",
    "type": "programming",
    "year": "2017",
    "detail": "To practice what I was learning I started making this Healing game using the p5.js library, and later on I upgraded it a little with JQuery and ajax for the score board.",
    "mainword": "game",
    "wordtolink": "Healing",
    "imgsrc": "../Icons/internal-icon.png"
  },
  {
    "id": "29",
    "title": "Made a PHP WordCrack solver",
    "type": "programming",
    "year": "2017",
    "detail": "To practice some PHP I made this WordCrack solver. Wordcrack is a game where you have to find all possible words within a 4x4 letter matrix. My solver gives you all possible solutions.",
    "mainword": "WordCrack",
    "wordtolink": "Wordcrack",
    "imgsrc": "../Icons/internal-icon.png"
  }
];

//************************************
//*********** ALL LINKS **************


/*
Welcome to my website/first project/portifolio, all in one.
I worked in a big IT company for 8 years but I felt it was time for a change.
In this page I'll show what I've been studying on the last couple of months, along with a glimpse of my personal life.

This is my website/first project/portifolio all in one.
Worked in IT for 8 years but I felt it was time for a carrier change,
and with this website I hope to show what I've been studying on the
past few months

*/

//https://www.youtube.com/user/shiffman
//http://www.phpdozeroaoprofissional.com.br/
//https://open.spotify.com/album/2MYouluj3j2BHwzfNcrvCA
//https://www.facebook.com/filipe.louzano
//http://www.linkedin.com/in/filipelouzano
//https://docs.google.com/document/d/1GjsT8mVkPc4PKFIijumbkJaLixc2E-CnbkmyRZYWVeI/edit?usp=sharing
