import NextjsSvg from "../../public/nextjs";
import ReactjsSvg from "../../public/reactjs";
import YoutubeSvg from "../../public/youtube";

const socialLinks = [
  {
    link: "https://github.com/PaulWebdeveloper7/",
    icon: "/github.svg",
    size: 29,
  },
  {
    link: "https://www.instagram.com/kp__08186?igsh=MTlvNXlwMTRrODUwMw%3D%3D",
    icon: "/instragram.svg",
    size: 25,
  },
  {
    link: "https://www.linkedin.com/in/komal-paul-18105b258/",
    icon: "/linkdin.svg",
    size: 29,
  },
];

const homeYtCards = [
  {
    id: 1,
    image: "/appleclone.JPG",
    title: "Apple Clone",
    description: "Build a Apple Web Site Clone with HTML & CSS.",
    link: "https://www.youtube.com/watch?v=81_nCdyaWWo",
  },
  {
    id: 2,
    image: "/mastercss.JPG",
    title: "3D Effects in CSS",
    description: "3D Effects in CSS Properties & Gradient & Parallel Effect",
    link: "https://www.youtube.com/watch?v=ra93-c0QQMc",
  },
  {
    id: 3,
    image: "/javascriptvideo.JPG",
    title: "JavaScript Basic",
    description: "Learn Javascript : Introduction to Programming",
    link: "https://www.youtube.com/watch?v=e_nNK-HnEOQ",
  },
];

const serviceData = [
  {
    id: 1,
    svg: NextjsSvg,
    title:"Next JS",
    description:
      "Unlock the potential of your projects using Next.js – a React framework that lets you build with speed. Craft high-performance web applications effortlessly, thanks to features like automatic code splitting and server-side rendering, making your development process seamless and powerful.",
  },
  {
    id: 2,
    svg: ReactjsSvg,
    title:"React JS",
    description:
      "React simplifies the process of creating interactive and scalable web applications. Harnessing a virtual DOM and efficient state management, React enhances development speed and maintainability, making it a preferred choice for building modern and dynamic user experiences.",
  },
  {
    id: 3,
    image: "/ecommerce.jpg",
    title:"E Commerce Applications",
    description:
      "I can build high-performance e-commerce applications that elevate your online presence. With a focus on intuitive user interfaces, secure transactions, and personalized features, my expertise ensures your customers enjoy a seamless shopping experience.",
  },
  {
    id: 4,
    image: "/videocalling.jpg",
    title:"Video Calling Applications",
    description:
      "I specialize in crafting cutting-edge video calling applications that redefine virtual communication. Leveraging advanced technologies, my solutions offer seamless real-time video and audio interactions, fostering a connected and engaging experience. From user-friendly interfaces to robust backend infrastructures, I prioritize delivering secure and reliable video calling platforms",
  },
  {
    id: 5,
    svg: YoutubeSvg,
    title:"Youtuber",
    description:
      "I'm a YouTuber specializing in coding tutorials. Join my channel for clear, insightful lessons on various programming languages. Let's learn and grow together in the world of coding!",
  },
];
export { socialLinks, homeYtCards, serviceData };
