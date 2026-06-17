import { createFileRoute } from "@tanstack/react-router";
import Portfolio from "@/components/portfolio/Portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Roopsha Ghosh — Aspiring Software Developer" },
      { name: "description", content: "Roopsha Ghosh — Computer Science student at VIT Bhopal University and aspiring software developer specializing in modern frontend web development with React, JavaScript and Tailwind CSS." },
      { property: "og:title", content: "Roopsha Ghosh — Aspiring Software Developer" },
      { property: "og:description", content: "Portfolio of Roopsha Ghosh — CS student at VIT Bhopal building responsive, modern web experiences." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Portfolio,
});