// Import images
import Image1 from "../images/ui-project-1.jpg";
import Image2 from "../images/web-project-2.jpg";
import Image3 from "../images/mobile-project-2.jpg";

export const singleProjectData = {
  ProjectHeader: {
    title: "Ngumpar Project (as a Frontend Engineer at Kumparan)",
    publishDate: "January, 2022",
    tags: "UI / Frontend",
  },
  ProjectImages: [
    {
      id: 1,
      title: "Kabul Project Management UI",
      img: Image1,
    },
    {
      id: 2,
      title: "Kabul Project Management UI",
      img: Image2,
    },
    {
      id: 3,
      title: "Kabul Project Management UI",
      img: Image3,
    },
  ],
  ProjectInfo: {
    ClientHeading: "About Company",
    CompanyInfo: [
      {
        id: 1,
        title: "Name",
        details: "Kumparan",
      },
      {
        id: 2,
        title: "Services",
        details: "Media",
      },
      {
        id: 3,
        title: "Website",
        details: "https://ngumpar.com",
      },
    ],
    ObjectivesHeading: "Objective",
    ObjectivesDetails:
      "Launched in 2017, kumparan is an Indonesia's Leading Digital News Media Platform. Leveraging data and innovation to deliver fresh content to millions of readers daily through world-class storytelling and journalism. ",
    Technologies: [
      {
        title: "Tools & Technologies",
        techs: ["HTML", "CSS", "JavaScript", "ReactJS", "Redux"],
      },
    ],
    ProjectDetailsHeading: "Challenge",
    ProjectDetails: [
      {
        id: 1,
        details:
          "- Assigned as a web based frontend engineer that focuses on an ongoing Kumparan project 'Ngumpar'   - Tasks includes refactoring, bugs fixing, and create new features/improvements on the Ngumpar CMS & Mobile-Web",
      },
    ],
  },
};
