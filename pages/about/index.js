// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";


//  data
const aboutData = [
  {
    title: 'skills',
    key: 'skills', // added key
    info: [
      {
        title: 'Web Development',
        key: 'web-development', // added key
        icons: [
          <FaHtml5 key={'html'} />,
          <FaCss3 key={'css'}/>,
          <FaJs key={'javascript'}/>,
          <FaReact key={'react'} />,
          <SiNextdotjs key={'next'}/>,
          <SiFramer key={'framer'}/>,
          <FaWordpress key={'wordpress'} />,
        ],
      },
      {
        title: 'UI/UX Design',
        key: 'ui-ux-design', // added key
        icons: [<FaFigma key={'figma'}/>, <SiAdobexd key={'adobe-xd'} />, <SiAdobephotoshop key={'adobe-photoshop'} />],
      },
    ],
  },
  {
    title: 'awards',
    key: 'awards', // added key
    info: [
      {
        title: 'Webby Awards - Honoree',
        key: 'webby-awards', // added key
        stage: '2011 - 2012',
      },
      {
        title: 'Adobe Design Achievement Awards - Finalist',
        key: 'adobe-awards', // added key
        stage: '2009 - 2010',
      },
    ],
  },
  {
    title: 'experience',
    key: 'experience', // added key
    info: [
      {
        title: 'UX/UI Designer - XYZ Company',
        key: 'ux-ui-designer', // added key
        stage: '2012 - 2023',
      },
      {
        title: 'Web Developer - ABC Agency',
        key: 'web-developer', // added key
        stage: '2010 - 2012',
      },
      {
        title: 'Intern - DEF Corporation',
        key: 'intern', // added key
        stage: '2008 - 2010',
      },
    ],
  },
  {
    title: 'credentials',
    key: 'credentials', // added key
    info: [
      {
        title: 'Web Development - ABC University, LA, CA',
        key: 'web-development-abc', // added key
        stage: '2011',
      },
      {
        title: 'Computer Science Diploma - AV Technical Institute',
        key: 'computer-science-diploma', // added key
        stage: '2009',
      },
      {
        title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
        key: 'graphic-designer', // added key
        stage: '2006',
      },
    ],
  },
];

const About = () => {
  return <div>About</div>;
};

export default About;
