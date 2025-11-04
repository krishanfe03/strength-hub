import {
  FaArrowRight,
  FaEnvelope,
  FaImage,
  FaMapMarkedAlt,
  FaPhone,
  FaPhoneAlt,
  FaShoppingCart,
} from "react-icons/fa";
import { HiHome } from "react-icons/hi";
import program1 from "../assets/program3.jpg";
import program2 from "../assets/program2..jpeg";
import cmsoon from "../assets/Cmsoon.webp";


import heroimg from "../assets/heroimage.png";

// Gallery images
import g1 from "../assets/GYM/g1.jpg";
import g2 from "../assets/GYM/g2.jpg";
import g3 from "../assets/GYM/g3.jpg";
import g4 from "../assets/GYM/g4.jpg";
import g5 from "../assets/GYM/g5.jpg";
import g6 from "../assets/GYM/g6.jpg";
import g7 from "../assets/GYM/g7.jpg";
import g8 from "../assets/GYM/g8.jpg";
import g9 from "../assets/GYM/g9.jpg";
import g10 from "../assets/GYM/g10.jpg";
import g11 from "../assets/GYM/g11.jpg";
import g12 from "../assets/GYM/g12.jpg";



// mens clothing
import mc1 from "../assets/MensClothing/mc1.jpeg";
import mc2 from "../assets/MensClothing/mc2.jpeg";
import mc3 from "../assets/MensClothing/mc3.jpeg";
import mc4 from "../assets/MensClothing/mc4.jpeg";
import mc5 from "../assets/MensClothing/mc5.jpeg";
import mc6 from "../assets/MensClothing/mc6.jpeg";
import mc7 from "../assets/MensClothing/mc7.webp";
import mc8 from "../assets/MensClothing/mc8.webp";

// womens clothing
import wc1 from "../assets/WomensClothing/wc1.jpeg";
import wc2 from "../assets/WomensClothing/wc2.jpeg";
import wc3 from "../assets/WomensClothing/wc3.jpeg";
import wc4 from "../assets/WomensClothing/wc4.jpeg";
import wc5 from "../assets/WomensClothing/wc5.jpeg";
import wc6 from "../assets/WomensClothing/wc6.jpeg";
import wc7 from "../assets/WomensClothing/wc7.jpeg";
import wc8 from "../assets/WomensClothing/wc8.jpeg";

// social media
import s1 from "../assets/Social/insta.png";
import s2 from "../assets/Social/facebook.png";
import s3 from "../assets/Social/youtube.png";

// cakes
import ck1 from "../assets/Cakes/ck1.webp";
import ck2 from "../assets/Cakes/ck2.jpeg";
import ck3 from "../assets/Cakes/ck3.jpeg";
import ck4 from "../assets/Cakes/ck4.jpg";
import ck5 from "../assets/Cakes/ck5.jpg";
import ck6 from "../assets/Cakes/ck6.jpeg";
import ck7 from "../assets/Cakes/ck7.jpeg";
import ck8 from "../assets/Cakes/ck8.webp";

// All bg's
// import shopbg from "../assets/BgImgs/shopbcg.png"
import branchbg from "../assets/BgImgs/gymbg.png"
import testbg from "../assets/BgImgs/GymTest.png"
import shopbg from "../assets/BgImgs/shopbgimgfree.jpg"
import contact from "../assets/BgImgs/gymcontct.jpg"

// video 
import fitvideo from "../assets/Videos/fitvideo.mp4"




import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaGlobe,
  FaMapPin,
} from "react-icons/fa";

// Protiens
import pr1 from "../assets/protiens/pr1.jpeg";
import pr2 from "../assets/protiens/pr2.jpeg";
import pr3 from "../assets/protiens/pr3.jpeg";
import pr4 from "../assets/protiens/pr4.jpeg";
import pr5 from "../assets/protiens/pr5.jpeg";
import pr6 from "../assets/protiens/pr6.jpeg";
import pr7 from "../assets/protiens/pr7.jpg";
import pr8 from "../assets/protiens/pr8.jpeg";

import insta from "../assets/Social/insta.png";
import fb from "../assets/Social/facebook.png";
import youtube from "../assets/Social/youtube.png";

// import { label, link, style, text } from "framer-motion/client";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ShopComponents from "../Components/Shop/ShopComponents";
import { link, title } from "framer-motion/client";
import { BsArrowDownCircle } from "react-icons/bs";

const GymData = {
  name: "The Strength Hub",

  navbar: [
    {
      name: "Home",
      icon: HiHome,
      link: "/",
    },
    // {
    //   name: "About",
    //   icon: FaUser,
    //   link: "/about",
    // },
    {
      name: "Shop",
      icon: FaImage,
      link: "/shop",
    },
    {
      name: "Contact",
      icon: FaPhoneAlt,
      link: "/contact",
    },
    // {
    //   name: "Social Media",
    //   icon: IoShareSocial,
    //   link: "/media",
    // },
    {
      name: "Cart",
      icon: FaShoppingCart, 
      link: "/cart"
    }
    // {
    //   name: "Plans",
    //   icon: FaTag,
    // },
    // {
    //   name: "Trainer",
    //   icon: MdSportsGymnastics,
    // },
  ],

  hero: {
    heading: "Join The Legends of Fitness world ",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore dolorem nam ad dolores praesentium provident sit amet consectetur  .",
    img: heroimg,
    Btn: "Contact",
  },

  video: {
    title : "Push Past You limit",
    subtitle : "Transform your body with 'Strength Hub' ",
    src : fitvideo
  },

  program: {
    heading: "Our Programs",
    text: "The diverse range of programs, from group exercises, corporate training to personalized training, caters to varying fitness levels and goals. Members get variety and the option of customization as each gym offers a diversity of exercise options and specialized programs, allowing members to choose activities that align with their interests and fitness objectives. Personalized training programs ensure workouts are tailored to individual needs, maximizing results.",

    section: [
      {
        img: program1,
        content: {
          head: "Corporate Membership",
          text: "Don’t have time to go to the gym? We get the gym to you. The Strength hub Gym India offers corporate membership programs tailored for companies looking to promote employee wellness and fitness. These programs are designed to encourage a healthier workforce by providing BMI screening, diet and nutrition counselling, fitness activities and seminars for building a healthier lifestyle.",
        },
      },
      {
        img: program2,
        content: {
          head: "Group Program",
          text: "Don’t have time to go to the gym? We get the gym to you. The Strength hub Gym India offers corporate membership programs tailored for companies looking to promote employee wellness and fitness. These programs are designed to encourage a healthier workforce by providing BMI screening, diet and nutrition counselling, fitness activities and seminars for building a healthier lifestyle.",
        },
      },
    ],
  },

  Branches: {
    // Branches
    heading: "Our Franchise's",
    bgimg: branchbg,

    Branch_Cards: [
      // Branch  Map Button
      {
        Branch_Card_head: "The Strength Hub Sail City",
        Mapbtn: "View",
      },
      {
        Branch_Card_head: "The Strength Hub Vaishali",
        Mapbtn: "View",
      },
      {
        Branch_Card_head: "The Strength Hub Gachibowli",
        Mapbtn: "View",
      },
    ],

    gc_Soon: {
      gc_name: {
        heading: "GYMS COMING SOON",
      },

      gc_details: [
        "The Strength Hub Gym Sail City Ranchi",
        "The Strength Hub Gym Mohali Punjab",
        "The Strength Hub Gym Kanpur Uttar Pradesh",
        "The Strength Hub Gym sector 153 Noida",
      ],

      gc_Img: {
        img: cmsoon,
      },
    },
  },

  Testimonial: {
    heading: "Testimonials",
    bgimg : testbg,

    main_cntnt: [
      {
        text: "The Strength Hub Gym India is known for the competent personal trainers and extraordinary personal training offered by them. The individuals seeking for serious goal-oriented fitness, personalized guidance, motivation, and specialized workout plans, Gold’s Gym India personal training program is for them.",
        name: "Ipsum",
      },
      {
        text: "Don’t have time to go to the gym? We get the gym to you. The Strength Hub India offers corporate membership programs tailored for companies looking to promote employee wellness and fitness. These programs are designed to encourage a healthier workforce by providing BMI screening, diet and nutrition counselling, fitness activities and seminars for building a healthier lifestyle.",
        name: "Lorem",
      },
      {
        text: "The Strength Hub India provides a variety of group fitness programs such as dance fitness, yoga, HIIT, and much more tailored to cater to diverse fitness preferences and goals. These group programs offer a supportive environment and a sense of community while engaging participants in fun and effective workouts.",
        name: "dolor",
      },
    ],
  },

  GallerySection: {
    Gallerycontent: {
      heading: "Our Fitness Gallery",
      text: "Take a look inside our gym! From strength training and cardio to personal coaching, here’s a glimpse of the energy and dedication that drives our members every day.",
    },

    leftArrow: IoIosArrowBack,
    rightArrow: IoIosArrowForward,

    GalleryImg: [
      {
        imgs: [g1, g2, g3, g4],
      },
      {
        imgs: [g5, g6, g7, g8],
      },
      {
        imgs: [g9, g10, g11, g12],
      },
    ],
  },

  Footer: {
    about: {
      name: "The Strength Hub",
      desc: "At The Strength Hub, we make group workouts fun, daily food healthy & tasty, mental fitness easy with yoga & meditation, Medical & lifestyle care hassle-free.#BeBetterEveryDay",
    },
    links: [
      [
        "The Strength Hub",
        "The Strength Hub franchise",
        "corporate partnerships",
        "cult pass network",
        "t&c for business",
      ],
      [
        "The Strength Hub",
        "The Strength Hub franchise",
        "corporate partnerships",
        "cult pass network",
      ],
      [
        "The Strength Hub",
        "The Strength Hub franchise",
        "corporate partnerships",
        "cult pass network",
      ],
    ],
  },

  // for contact section

  Contact: {
    main: {
      bgimg : contact,
      heading: "Get in Touch",
      text: "Fill out the form below and we'll get back to you shortly.",
    },

    social: {
      head: "Follow Us on Social Media",
      icon: [insta, fb, youtube],
    },

    connect: [
      {
        head: "You can email us here",
        mail: "Jhon@gmail.com",
        img: FaArrowRight,
      },
      {
        head: "Give us a Call on",
        mail: "+91 00000 00000",
        img: FaArrowRight,
      },
      {
        head: "Gym Hours",
        mail: "9:00 am - 6:00 pm",
        img: FaArrowRight,
      },
    ],

    inputs: [
      {
        name: "First Name",
        type: "text",
        placeholder: "Enter your name",
      },
      {
        name: "Last Name",
        type: "text",
        placeholder: "Enter Last name",
      },
      {
        name: "Email",
        type: "email",
        placeholder: "Enter your email",
      },
      {
        name: "Phone",
        type: "tel",
        placeholder: "Enter Phone Number",
      },
      {
        name: "Age",
        type: "Number",
        placeholder: "Enter your age",
      },
      {
        name: "Message",
        type: "textarea",
        placeholder: "Enter Your Message here.",
      },
    ],
    button: "Send Message",
  },


  // shop data 

  shop: {

    shophero : {
      bgimg: shopbg,
      heading : ["For Him* For Her*...", "...For Every Rep*"],
      subheding : "Comfort | Durability | Performance.",
      cta: BsArrowDownCircle
      // cta 2
    },     

    menu: [
      {
        name: "Mens",
        id: 1,
      },
      {
        name: "Womens",
        id: 2,
      },
      {
        name: "Cake",
        id: 3,
      },
      // {
      //   label: "Protien",
      //   id: 4,
      // },
    ],

    menproducts: {
      name: "Men's Collection ",
      desc: "Discover our premium men's gym wear collection",
      btnBuy: "Buy Now",
      AddCart : "Add to Cart",

      mens: [
        {
          img: mc1, 
          description: "comfort fit gym T-shirt",   /// name
          price: "$25",
          sizes: ["S", "M", "L", "XL"],
          id:1
          
        },
        {
          img: mc2,
          description: "comfort fit gym T-shirt",
          price: "$25",
          sizes: ["S", "M", "L", "XL"],
          id:2
          
        },
        {
          img: mc3,
          description: "comfort fit gym T-shirt",
          price: "$25",
          sizes: ["S", "M", "L", "XL"],
          id:3
          
        },
        {
          img: mc4,
          description: "comfort fit gym T-shirt",
          price: "$25",
          sizes: ["S", "M", "L", "XL"],
          id:4
          
        },
        {
          img: mc5,
          description: "comfort fit gym T-shirt",
          price: "$25",
          sizes: ["S", "M", "L", "XL"],
          id:5
        
        },
        {
          img: mc6,
          description: "comfort fit gym T-shirt",
          price: "$25",
          sizes: ["S", "M", "L", "XL"],
          id:6
          
        },
        {
          img: mc7,
          description: "comfort fit gym T-shirt",
          price: "$25",
          sizes: ["S", "M", "L", "XL"],
          id:7
          
        },
        {
          img: mc8,
          description: "comfort fit gym T-shirt",
          price: "$25",
          sizes: ["S", "M", "L", "XL"],
          id:8
        
        },
      ],
    },

    womenproduct: {
      name: "Women's Collection",
      desc: "Discover our premium women's gym wear collection",
      btn: "View Details",
      btnBuy: "Buy Now",
      AddCart : "Add to Cart",
      

      womens: [
        {
          img: wc1,
          description: "comfort fit gym T-shirt",
          price: "$25",
          sizes: ["S", "M", "L", "XL"],
          id:1

        },
        {
          img: wc2,
          description: "comfort fit gym T-shirt",
          price: "$25",
          sizes: ["S", "M", "L", "XL"],
          id:2

        },
        {
          img: wc3,
          description: "comfort fit gym T-shirt",
          price: "$25",
          sizes: ["S", "M", "L", "XL"],
          id:3
        },
        {
          img: wc4,
          description: "comfort fit gym T-shirt",
          price: "$25",
          sizes: ["S", "M", "L", "XL"],
          id:4
        },
        {
          img: wc5,
          description: "comfort fit gym T-shirt",
          price: "$25",
          sizes: ["S", "M", "L", "XL"],
          id:5
        },
        {
          img: wc6,
          description: "comfort fit gym T-shirt",
          price: "$25",
          sizes: ["S", "M", "L", "XL"],
          id:6
        },
        {
          img: wc7,
          description: "comfort fit gym T-shirt",
          price: "$25",
          sizes: ["S", "M", "L", "XL"],
          id:7
        },
        {
          img: wc8,
          description: "comfort fit gym T-shirt",
          price: "$25",
          sizes: ["S", "M", "L", "XL"],
          id:8
        },
      ],
    },

    cakeproduct: {
      head: "Grab Your Favorite Delight",
      desc: "Delicious, fresh, and made with care — explore our wide range of cakes for every taste and occasion",

      cakes: [
        {
          img: ck1,
          description: "Creamy cheesecake on buttery biscuit base",
          Price: "12$",
          size: ["1/2 KG", "1 KG", "2 KG"],
          id:1
        },
        {
          img: ck2,
          description: "Creamy cheesecake on buttery biscuit base",
          Price: "12$",
          size: ["1/2 KG", "1 KG", "2 KG"],
          id:2
        },
        {
          img: ck3,
          description: "Creamy cheesecake on buttery biscuit base",
          Price: "12$",
          size: ["1/2 KG", "1 KG", "2 KG"],
          id:3
        },
        {
          img: ck4,
          description: "Creamy cheesecake on buttery biscuit base",
          Price: "12$",
          size: ["1/2 KG", "1 KG", "2 KG"],
          id:4
        },
        {
          img: ck5,
          description: "Creamy cheesecake on buttery biscuit base",
          Price: "12$",
          size: ["1/2 KG", "1 KG", "2 KG"],
          id:5
        },
        {
          img: ck6,
          description: "Creamy cheesecake on buttery biscuit base",
          Price: "12$",
          size: ["1/2 KG", "1 KG", "2 KG"],
          id:6
        },
        {
          img: ck7,
          description: "Creamy cheesecake on buttery biscuit base",
          Price: "12$",
          size: ["1/2 KG", "1 KG", "2 KG"],
          id:7
        },
        {
          img: ck8,
          description: "Creamy cheesecake on buttery biscuit base",
          Price: "12$",
          size: ["1/2 KG", "1 KG", "2KG"],
          id:8
        },
      ],
    },

    // protiens: {
    //   head: "Fuel Your Body Right",
    //   desc: "High-quality proteins to power your workouts, boost recovery, and support a healthy lifestyle",

    //   products: [
    //     {
    //       img: pr1,
    //       description: "Creamy cheesecake on buttery biscuit base",
    //       Price: "12$",
    //       size: ["1/2 KG", "1 KG", "2 KG"],
    //     },
    //     {
    //       img: pr2,
    //       description: "Creamy cheesecake on buttery biscuit base",
    //       Price: "12$",
    //       size: ["1/2 KG", "1 KG", "2 KG"],
    //     },
    //     {
    //       img: pr3,
    //       description: "Creamy cheesecake on buttery biscuit base",
    //       Price: "12$",
    //       size: ["1/2 KG", "1 KG", "2 KG"],
    //     },
    //     {
    //       img: pr4,
    //       description: "Creamy cheesecake on buttery biscuit base",
    //       Price: "12$",
    //       size: ["1/2 KG", "1 KG", "2 KG"],
    //     },
    //     {
    //       img: pr5,
    //       description: "Creamy cheesecake on buttery biscuit base",
    //       Price: "12$",
    //       size: ["1/2 KG", "1 KG", "2 KG"],
    //     },
    //     {
    //       img: pr6,
    //       description: "Creamy cheesecake on buttery biscuit base",
    //       Price: "12$",
    //       size: ["1/2 KG", "1 KG", "2 KG"],
    //     },
    //     {
    //       img: pr7,
    //       description: "Creamy cheesecake on buttery biscuit base",
    //       Price: "12$",
    //       size: ["1/2 KG", "1 KG", "2 KG"],
    //     },
    //     {
    //       img: pr8,
    //       description: "Creamy cheesecake on buttery biscuit base",
    //       Price: "12$",
    //       size: ["1/2 KG", "1 KG", "2KG"],
    //     },
    //   ],
    // },

    shopsoical: {
      name: "THE STRENGTH HUB",

      social: [
        {
          simg: s1,
          link: "https://www.instagram.com/",
        },
        {
          simg: s2,
          link: "https://www.facebook.com/",
        },
        {
          simg: s3,
          link: "https://www.youtube.com/",
        },
      ],
    },
  },

  // social media data 

  socialMediaLinks: [
    {
      id: 1,
      name: "Facebook",
      url: "https://facebook.com/yourprofile",
      icon: FaInstagram,
      description: "Connect with me on Facebook",
    },
    {
      id: 2,
      name: "Twitter",
      url: "https://twitter.com/yourprofile",
      icon: FaTwitter,
      description: "Follow me on Twitter",
    },
    // {
    //   id: 3,
    //   name: "LinkedIn",
    //   url: "https://linkedin.com/in/yourprofile",
    //   icon: Linkedin,
    //   description: "Let’s connect on LinkedIn",
    // },
    {
      id: 3,
      name: "Instagram",
      url: "https://instagram.com/yourprofile",
      icon: FaFacebook,
      description: "See my daily updates",
    },
    {
      id: 4,
      name: "Personal Website",
      url: "https://yourwebsite.com",
      icon: FaGlobe,
      description: "Visit my portfolio website",
    },
    {
      id: 5,
      name: "Google Maps",
      url: "https://maps.google.com/?q=YourBusiness",
      icon: FaMapPin,
      description: "Find my business on Google Maps",
    },
  ],

  Footer: {
    head: "The Strenght Hub",
    linkhead: "Quick Link",  
    Timehead: "Gym Time", 
    

    contactinof: [
      {
        icon: FaPhone,
        info: "+91 00000000",
      },
      {
        icon: FaEnvelope,
        info: "john@gmail.com",
      },
      {
        icon: FaMapMarkedAlt,
        info: "Jaipur, Rajasthan",
      },
      
    ],

    quicklinkhead : "QuickLink",
    Links: [
      {
        head : "Home",
        link : "/"
      }, 
      {
        head : "Shop",
        link : "/shop"
      }, , 
      {
        head : "Contact",
        link : "/contact"
      }, , 
      {
        head : "Social",
        link : "/media"
      }, 
    ],

    GymHr: [
      {
        day: "Monday",
        time: "5am - 10pm",
      },
      {
        day: "Tuesday",
        time: "5am - 10pm",
      },
      {
        day: "Wednesday",
        time: "5am - 10pm",
      },
      {
        day: "Thrusday",
        time: "5am - 10pm",
      },
      {
        day: "Friday",
        time: "5am - 10pm",
      },
      {
        day: "Saturday",
        time: "5am - 10pm",
      },
      {
        day: "Sunday",
        time: "Close",
      },
    ],
  },

};

export default GymData;
