import img1 from "../../images/egale.jpg"
import img2 from "../../images/teri baaton mein.jpg"
import img3 from "../../images/Hate-Story.jpg"
import img4 from "../../images/shaitaan.jpg"
import img5 from '../../images/abrahm ozler.jpg'
import img6 from '../../images/godzila.jpg'
import img7 from '../../images/output.jpg'

export interface IData {
    image: string;
    link: string;
    id: number;
    body: {
      description:string;
      name: string;
      category?: string;
      Cast?:string;
    };
  }

export const collectionList=():IData[]=>{   
    const dataBase=[
      {
        image:img1,
        link:"https://teraboxapp.com/s/1Kmht_FHMC0YLAQRUVcc5AQ",
        id:1,
        body:{
          description:"Eagle 2024 Hindi 720p Full Movie: Sahadev Varma alias Eagle, an infamous professional assassin, goes on a mission to bust down illegal arms trade by disguising himself as a cotton farmer in Talakona and intercepting all the illegal arms transactions from there. Nalini, a journalist, writes a news report on Sahadev, whose rare cotton has solid demand in foreign countries. She gets interrogated by the RAW agents, due to the news report, and learns about Sahadev’s identity, which prompts her to uncover the reason behind Sahadev’s motive from various persons who know about Sahadev’s past. After learning the past of eagle",
          name:"Eagle Full Movie (Hindi)",
          category:"Hindi",
          Cast:"Ravi Teja"
        }
      },
      {
        image:img2,
        link:"https://teraboxapp.com/s/11Q_1FWdAtxasNst1WBg3jg",
        id:2,
        body:{
          description:`Teri Baaton Mein Aisa Uljha Jiya (2024) Hindi 720p Full Movie: Aryan is not able to find a perfect life partner. He meets a perfect girl, Sifra, during an official assignment in the US and falls in love with her only to discover later that it’s an impossible love story. Aryan Agnihotri is a robotics engineer whose family wants him to get married, but he shies away from the same and goes to the USA to work with his aunt Urmila who runs a robotics company. In Urmila’s absence, her manager Sifra is given the responsibility to look after Aryan. They both get close to each other during the short period and develop feelings. Upon Urmila’s return, Aryan learns that Sifra is a robot and it was Urmila’s experiment to get them close.`,
          name:"Teri Baaton Mein Aisa Uljha Jiya (Full Movie)",
          category:"hindi",
          Cast:"Shahid kapoor  Kriti Sanoon"
        }
      },
      {
        image:img3,
        link:"https://teraboxapp.com/s/1KNeGVVkEWfnPEPI2jHx58Q",
        id:3,
        body:{
          description:`Hate Story IV (2018) Hindi 720p Full Movie: Aryan and Rajveer, sons of a wealthy businessman, Vikram Khurana, fall in love with the same woman, Tasha. Not only do they commit a deed they cannot undo but also end up as targets in a revenge plan.
          London based Aryan and Rajveer are son of business tycoon Vikram Khurana.Aryan is handling the family business and is looking out for a new female face for his campaign.He is in love with Rishma whose also looking after his business.Rajveer is a womanizer and professional photographer who approaches Taasha to be the model of their campaign.Taasha soon becomes a star and both brothers fall in love with her.Which leads Aryan to murder Rishma after she finds about his relationship with Taasha.After Aaryan and Taasha dispose Rishma’s body it is reveled that Taasha is not who she claims and has come to revenge against Khurana’s.`,
          name:"Hate Story IV  (Full Movie)",
          category:"Hindi",
          Cast:"Uravashi Rautela"
        }
      },
      {
        image:img4,
        link:"https://teraboxapp.com/s/1niJtjWPRIrsjGAR5MmUafg",
        id:4,
        body:{
          description:`Shaitaan 2024 Hindi 720p Full Movie: Kabir and his family’s fun weekend retreat takes a nightmarish turn when they let a friendly but mysterious stranger into their house. As the clock ticks, the family will be forced to confront their worst fears in this gripping, edge-of-the-seat supernatural-thriller that deals with the sinister elements of Indian Black Magic.`,
          name:"Shaitaan Full Movie 2024",
          category:"Hindi",
          Cast:"Ajay devgan"
        }
      },
      {
        image:img5,
        link:"https://teraboxapp.com/s/1MteJpHdFaTM_shAvrQJhXg",
        id:5,
        body:{
          description:`Abraham Ozler (2024) Hindi Dubbed : Revolves around the personal and professional lives of veteran cop Abraham Ozler, ACP Trichur, who at one time has to take up a serial killing case and the mysterious hunt begins.`,
          name:"Abraham Ozlern(2024)",
          category:"Hindi",
          Cast:"Jayaram, Jagadish, Senthil Krishna"
        }
      },

      {
        image:img6,
        link:"https://teraboxapp.com/s/1ci5X-QamjXE6_IwiokuSZw",
        id:6,
        body:{
          description:`Godzilla vs. Kong (2021) Hindi Dubbed : The epic next chapter in the cinematic Monsterverse pits two of the greatest icons in motion picture history against each other–the fearsome Godzilla and the mighty Kong–with humanity caught in the balance.
          Legends collide as Godzilla and Kong, the two most powerful forces of nature, clash on the big screen in a spectacular battle for the ages. As a squadron embarks on a perilous mission into fantastic uncharted terrain, unearthing clues to the Titans’ very origins and mankind’s survival, a conspiracy threatens to wipe the creatures, both good and bad, from the face of the earth forever.—Warner Bros.
          Legends collide in “Godzilla vs. Kong” as these mythic adversaries meet in a spectacular battle for the ages, with the fate of the world hanging in the balance. Kong and his protectors undertake a perilous journey to find his true home, and with them is Jia, a young orphaned girl with whom he has formed a unique and powerful bond. But they unexpectedly find themselves in the path of an enraged Godzilla, cutting a swath of destruction across the globe. The epic clash between the two titans–instigated by unseen forces–is only the beginning of the mystery that lies deep within the core of the Earth.—Legendary and Warner Bros`,
          name:"Godzilla VS King",
          category:"Dual",
          Cast:` Alexander Skarsgård, Millie Bobby Brown, Rebecca Hall`
        }
      },
      {
        image:img7,
        link:"https://teraboxapp.com/s/1CLVK6K6-Z918QNwXJwGXtQ",
        id:7,
        body:{
          description:`Sunflower S02 Hindi ALL Episode Download 720p : A quirky murder mystery based in a housing society called Sunflower. Its simpleton resident Sonu dives headlong into a murder mystery and becomes the chief suspect. What happens next?
          Sunflower is a housing society with its fair share of comedic characters. But none more hairbrained and awkward than simpleton Sonu. He dives headlong into the centre of a murder investigation of a society resident, and in no time manages to become the chief suspect. Around him, the real murderers, a resident couple in Sunflower itself, tread cautiously. Will they get away as Sonu keeps digging his own grave? As the investigation escalates, the hypocritical society members worry about their beloved society losing its good old glory. But the problem is the next generation’s ways are neither good nor old. Late night parties, suspected lesbians and tattooed tenants will surely make Sunflower wither, they say. Between Sonu tightening the noose around his own neck, the murderers living on the edge and the society trying to uplift its society’s values, Sunflower is a quirky murder mystery in a comedy of errors.—Promita Mukherjee`,
          name:"Sunflower season 2",
          category:"webSeries",
          Cast:"Sunil Grover, Adah Sharma, Ranvir Shorey"
        }
      },
    ]
    
  return dataBase.reverse();
}
