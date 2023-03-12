import React from "react"
import { useRouter } from "next/router"
import Link from "next/link"

import Body from "@/components/layout/body/Body"
import Connect from "@/components/layout/body/connect/Connect"
import Headline from "@/components/layout/body/headline/Headline"
import ProjectsSummary from "./ProjectsSummary"
import Feature from "@/components/layout/body/feature/Feature"
import Breadcrumbs from "@/components/layout/body/breadcrumbs/Breadcrumbs"
import SEO from "@/components/ui/SEO"

import StreetEasier from "../../../public/projects/streeteasier/StreetEasierLandingPage.png"
import ProjectsImg from "../../../public/Projects.png"

const Projects = () => {
  const router = useRouter()
  const pathName = router.pathname

  return (
    <Body>
      <SEO
        pageTitle="Kennette Basco - Projects"
        description="Kennette James Basco"
        content="Projects"
      />
      <Breadcrumbs fullPath={pathName} />
      <Headline
        headlineTitle="Projects"
        description="Explore my frontend projects and see my skills in action! This section features a collection of intuitive and engaging web applications that showcase my expertise in the latest technologies. Take a look around and discover what I can create."
        img={ProjectsImg}
      />
      <Link href={`projects/streeteasier`} legacyBehavior>
        <a>
          <Feature
            img={StreetEasier}
            title="StreetEasier"
            description="StreetEasier is a web platform that helps users find and match with potential roommates for apartments. It allows users to search for available apartments, create and manage listings, and connect with roommates based on their preferences. Our team of 5 developed this project to alleviate the housing crisis by making the search process easier and more efficient for everyone involved."
            featureType="Fullstack web application"
          />
        </a>
      </Link>
      <Connect connectWithMeText="Interested in collaborating with me?" />
      <ProjectsSummary excludeTitle="StreetEasier" />
    </Body>
  )
}

export default Projects
