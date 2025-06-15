import { NextResponse } from "next/server";

const jobs = [
  {
    id: "1",
    title: "Frontend Developer",
    company: "TechCorp",
    location: "New York",
    type: "Full-Time",
    description: "Front-end Engineer is a key expert in the company’s engineering division, playing a crucial role in developing and maintaining the UI components and Design System of our software products. You will be responsible for designing, developing, and refining UI elements, be involved in regular upgrades of our tech stack, ensuring the accessibility and performance of the UIs of our systems. Collaborating with a full stack engineering team, you will gain a deep understanding of our services and ecosystems, enabling you to make significant contributions in terms of delivering smooth and seamless user experience to our clients. Additionally, this role involves mentoring and training junior engineers as the team grows, contributing to their professional development and growth, and fostering a collaborative, innovative team environment. Your expertise will drive the technical direction of projects and help shape the future of our engineering practices.Front-end Engineer is a key expert in the company’s engineering division, playing a crucial role in developing and maintaining the UI components and Design System of our software products. You will be responsible for designing, developing, and refining UI elements, be involved in regular upgrades of our tech stack, ensuring the accessibility and performance of the UIs of our systems. Collaborating with a full stack engineering team, you will gain a deep understanding of our services and ecosystems, enabling you to make significant contributions in terms of delivering smooth and seamless user experience to our clients. Additionally, this role involves mentoring and training junior engineers as the team grows, contributing to their professional development and growth, and fostering a collaborative, innovative team environment. Your expertise will drive the technical direction of projects and help shape the future of our engineering practices.Front-end Engineer is a key expert in the company’s engineering division, playing a crucial role in developing and maintaining the UI components and Design System of our software products. You will be responsible for designing, developing, and refining UI elements, be involved in regular upgrades of our tech stack, ensuring the accessibility and performance of the UIs of our systems. Collaborating with a full stack engineering team, you will gain a deep understanding of our services and ecosystems, enabling you to make significant contributions in terms of delivering smooth and seamless user experience to our clients. Additionally, this role involves mentoring and training junior engineers as the team grows, contributing to their professional development and growth, and fostering a collaborative, innovative team environment. Your expertise will drive the technical direction of projects and help shape the future of our engineering practices.",
  },
   {
    id: "2",
    title: "UI Developer",
    company: "TechCorp",
    location: "Colombo",
    type: "Part-Time",
    description: "We are looking for a skilled frontend developer.",
  },
   {
    id: "3",
    title: "Frontend Developer",
    company: "TechCorp",
    location: "Galle",
    type: "Contract",
    description: "We are looking for a skilled frontend developer.",
  },
   {
    id: "4",
    title: "Frontend Developer",
    company: "TechCorp",
    location: "New York",
    type: "Full-Time",
    description: "We are looking for a skilled frontend developer.",
  },
   {
    id: "5",
    title: "Frontend Developer",
    company: "TechCorp",
    location: "New York",
    type: "Internship",
    description: "We are looking for a skilled frontend developer.",
  },
   {
    id: "6",
    title: "Frontend Developer",
    company: "TechCorp",
    location: "New York",
    type: "Freelance",
    description: "We are looking for a skilled frontend developer.",
  },
   {
    id: "7",
    title: "Frontend Developer",
    company: "TechCorp",
    location: "New York",
    type: "Full-Time",
    description: "We are looking for a skilled frontend developer.",
  },
   {
    id: "8",
    title: "Frontend Developer",
    company: "TechCorp",
    location: "New York",
    type: "Full-Time",
    description: "We are looking for a skilled frontend developer.",
  },
];

export async function GET() {
  return NextResponse.json(jobs);
}
