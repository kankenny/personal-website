import React from "react"

import Logo from "@/components/ui/Logo"
import LinkMenu from "../link-menu/LinkMenu"

const FooterContent = () => {
  return (
    <footer className="container flex flex-col md:flex-row md:justify-between mx-auto py-2 items-center space-y-10 md:space-y-0">
      <LinkMenu areHeaderLinks={false} />
      <Logo />
    </footer>
  )
}

export default FooterContent
