import titanicS from "../images/titanicScene.png";
import tita from "../images/tit.png";
import movieLogo from "../images/movieLogo.png";
import spidey from "../images/spidey.png";
import jumanji from "../images/jumanji.png";
import wolf from "../images/wolf.png";
import mrs from "../images/mrs.png";
import hob from "../images/hob.png";
import spideyLogo from "../images/spideyLogo.png";
import spideyScene from "../images/spideyScene.png";
import moralis from "../images/moralis.png";
import moralisLogo from "../images/moralisLogo.png";
import moralisScene from "../images/moralisScene.png";
import jam from "../images/jam.png";
import jamLogo from "../images/jamLogo.png";
import jamScene from "../images/jamScene.png";
import bayw from "../images/bayw.png";
import shrek from "../images/shrek.png";
import lucy from "../images/lucy.png";
import topgu from "../images/topgu.png";
import imit from "../images/imit.png";
import reven from "../images/reven.png";
import tomb from "../images/tomb.png";
import amaz from "../images/amaz.png";
import bigs from "../images/bigs.png";
import secona from "../images/secona.png";
import ted from "../images/ted.png";
import amerp from "../images/amerp.png";

export const movies = [
    {
        Movie: "",
        Thumnbnail: tita,
        Scene: titanicS,
        Logo: movieLogo,
        Name: "Titanic",
        Description:
            "Staring Kate Winslet and Leonardo DiCaprio. The two play characters who are of different social classes. They fall in love after meeting aboard the ship, but it was not good for a rich girl to fall in love with a poor boy in 1912.",
        Genre: "Romance, Drama",
        Actors: "Kate Winslet, Leonardo DiCaprio",
        Year: "1998",
        Duration: "3h 14min",
    },
    {
        Movie: "https://ipfs.moralis.io:2053/ipfs/QmNtxfy9Mk8qLsdGnraHGk5XDim8ayR93krM24ETJEd2bG/media/0",
        Thumnbnail: spidey,
        Scene: spideyScene,
        Logo: spideyLogo,
        Name: "Spiderman Homecoming",
        Description: "Peter Parker tries to stop the Vulture from selling weapons made with advanced Chitauri technology while trying to balance his life as an ordinary high school student.",
        Genre: "Action, Superhero, Comedy",
        Actors: "Tom Holland, Zendeya",
        Year: "2017",
        Duration: "2h 13min",
    },
    {
        Movie: "",
        Thumnbnail: "https://static.joonsite.com/seelatest/jumanji-the-next-level-review-here-is-sum-total-of-nick-and-dwayne-johnsons-adventure-movie.jpg",
        Scene: "https://static.joonsite.com/seelatest/jumanji-the-next-level-review-here-is-sum-total-of-nick-and-dwayne-johnsons-adventure-movie.jpg",
        Logo: "data:image/jpeg;base64,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",
        Name: "Jumanji",
        Description: "When Spencer goes missing, the gang returns to Jumanji to travel unexplored territories and help their friend escape the world's most dangerous game.",
        Genre: "Adventure",
        Actors: "Dwayne Johnson, Karen Gillan",
        Year: "2019 ",
        Duration: " 2h 3m",
    },
    {
        Movie: "https://ipfs.moralis.io:2053/ipfs/QmWWnyCZwh8RVnamjeLhGmpYM2C3oDr3FzF7zgv5ur24z5/media/0",
        Thumnbnail: moralis,
        Scene: moralisScene,
        Logo: moralisLogo,
        Name: "Moralis Rap",
        Description: "Moralis serverless Web3 Dapps, is a beautiful music video that tells a touching story of how anyone can become a Web3 developer if they put their trust in the hands of the musically gifted team at Moralis. ",
        Genre: "Music Video",
        Actors: "Ivan Liljeqvist, Filip Martinsson, CTO Larsson",
        Year: "2021",
        Duration: "1min 2sec",
    },
    {
        Movie: "",
        Thumnbnail: wolf,
        Scene: "https://cdn.flickeringmyth.com/wp-content/uploads/2021/12/Wolf-of-Wall-Street-4k-600x771-1.jpg",
        Logo: "",
        Name: "Wolf Of Wallstreet",
        Description: "Introduced to life in the fast lane through stockbroking, Jordan Belfort takes a hit after a Wall Street crash. He teams up with Donnie Azoff, cheating his way to the top as his relationships slide.",
        Genre: "Drama/Comedy",
        Actors: "Jonah Hill, Margot Robbie",
        Year: "2013",
        Duration: " 3 hours",
    },
    {
        Movie: "",
        Thumnbnail: mrs,
        Scene: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7404B1CDB53E39CFCF78D368AC1D63D217034852992B21FE15575E63B189CA95/scale?width=1200&aspectRatio=1.78&format=jpeg",
        Logo: "",
        Name: "Mr and Mrs Smith",
        Description: "A husband and wife struggle to keep their marriage alive until they realise they are both secretly working as assassins. Now, their respective assignments require them to kill each other.",
        Genre: "Action/Romance",
        Actors: "Brad Pitt, Angelina Jolie",
        Year: "2h",
        Duration: "2005",
    },
    {
        Movie: "https://ipfs.moralis.io:2053/ipfs/QmSi84pJTjBXmXREN8NMRuRnK9oobYb8QcPZsXUj3GZr12/media/0",
        Thumnbnail: jam,
        Scene: jamScene,
        Logo: jamLogo,
        Name: "Jam Doughnut",
        Description: "In this masterpiece a wild Jay, endulges in flavorful jam doughnut. Be warned, this video is most certainly going to leave you craving for some sweets.",
        Genre: "Silent Mukbang",
        Actors: "Jay",
        Year: "2022",
        Duration: "1min 5sec",
    },
    {
        Movie: "",
        Thumnbnail: hob,
        Scene: "",
        Logo: "",
        Name: "Hobbit",
        Description: "",
        Genre: "",
        Actors: "",
        Year: "",
        Duration: "",
    },
    {
        Movie: "",
        Thumnbnail: shrek,
        Scene: "data:image/jpeg;base64,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",
        Logo: "",
        Name: "Shrek",
        Description: "Shrek, an ogre, embarks on a journey with a donkey to rescue Princess Fiona from a vile lord and regain his swamp.",
        Genre: "Comedy/Fantasy",
        Actors: "Mike Myers, Cameron Diaz",
        Year: "2001",
        Duration: "1h 30m",
    },
    {
        Movie: "",
        Thumnbnail: reven,
        Scene: "https://i.ytimg.com/vi/LoebZZ8K5N0/mqdefault.jpg",
        Logo: "",
        Name: "The Revenant",
        Description: "Hugh Glass, a legendary frontiersman, is severely injured in a bear attack and is abandoned by his hunting crew. He uses his skills to survive and take revenge on his companion who betrayed him.",
        Genre: "",
        Actors: "Tom Hardy, Will Poulter",
        Year: "2016 ",
        Duration: "2h 36m",
    },
    {
        Movie: "",
        Thumnbnail: imit,
        Scene: "https://m.media-amazon.com/images/M/MV5BMTQ1NzM0NjU3NF5BMl5BanBnXkFtZTgwMzI5MTUyMjE@._V1_.jpg", Logo: "",
        Name: "The Imitation Game",
        Description: "Alan Turing, a British mathematician, joins the cryptography team to decipher the German enigma code. With the help of his fellow mathematicians, he builds a machine to crack the codes.",
        Genre: "War/Drama",
        Actors: "Benedict Cumberbatch, Keira Knightly",
        Year: "2014",
        Duration: "1h 54m",
    },
    {
        Movie: "",
        Thumnbnail: topgu,
        Scene: "data:image/jpeg;base64,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",
        Logo: "",
        Name: "Top Gun",
        Description: "After more than 30 years of service as one of the Navy's top aviators, Pete Maverick Mitchell is where he belongs, pushing the envelope as a courageous test pilot and dodging the advancement in rank that would ground him. Training a detachment of graduates for a special assignment, Maverick must confront the ghosts of his past and his deepest fears, culminating in a mission that demands the ultimate sacrifice from those who choose to fly it.",
        Genre: "Action/Adventure",
        Actors: "Tom Cruise, Miles Miller",
        Year: "2022",
        Duration: "2h 11m",
    },
    {
        Movie: "",
        Thumnbnail: lucy,
        Scene: "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYNpSWKtr-DtRWp8ums9I1v_D9BlcKVk0Wa2BKaGzaMCJYg-MvGU0v630zXuOM-h7KPf86cXMj26kkAC2NEVduIDzWtB.jpg?r=dbf",
        Logo: "",
        Name: "Lucy",
        Description: "Lucy gains extraordinary physical and mental capabilities after the effects of a performance-enhancing drug set in. Soon, she evolves into a warrior bent on destroying those who held her captive.",
        Genre: "Action/Romance",
        Actors: "Scarlett Johanesson",
        Year: "2014",
        Duration: "2h",
    },
    {
        Movie: "",
        Thumnbnail: bayw,
        Scene: "https://i.ytimg.com/vi/7xgcyj5No6o/maxresdefault.jpg",
        Logo: "",
        Name: "Bay Watch",
        Description: "Lifeguard Mitch Buchannon and his team discover a drug racket involving businesswoman Victoria Leeds and decide to unearth the truth and bring the perpetrators to justice.",
        Genre: "Comedy/Drama",
        Actors: "Dwayn Johnson, Zac Effron",
        Year: "2017",
        Duration: "2h 1m",
    },
    {
        Movie: "",
        Thumnbnail: tomb,
        Scene: "https://cdn1.epicgames.com/offer/4b5461ca8d1c488787b5200b420de066/egs-shadowofthetombraiderdefinitiveedition-eidosmontralcrystaldynamicsnixxessoftware-s1-2560x1440-eca6506e95a1_2560x1440-193582a5fd76a593804e0171d6395cf4",
        Logo: "",
        Name: "Tomb Raider",
        Description: "Tomb Raider is a 2018 action-adventure film directed by Roar Uthaug, with a screenplay by Geneva Robertson-Dworet and Alastair Siddons, from a story by Evan Daugherty and Robertson-Dworet.",
        Genre: "Action/Adventure/Drama",
        Actors: "Angelina Jolie",
        Year: "2018",
        Duration: "2h 30m",
    },


];