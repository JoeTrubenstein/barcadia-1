import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import BannerModule from "../components/BannerModule/BannerModule"
import BasicTextModule from "../components/BasicTextModule/BasicTextModule"
import PerksModule from "../components/PerksModule/PerksModule"
import Perk from "../components/PerksModule/Perk"
import Features from "../components/Features/Features"
import LatestPosts from "../components/Post/LatestPosts"

const Index = () => {
  return (
    <>
      <Seo title="Home" />
      <Layout>
        <BannerModule
          title="Barcadia"
          subTitle="A product based template system for GatsbyJS"
        />
        <BasicTextModule />
        <PerksModule>
          <Perk title="The Title" content="The content" />
        </PerksModule>
        <Features title="Featured Products from Barcadia." />
        <LatestPosts title="The Latest from Barcadia" />
      </Layout>
    </>
  )
}

export default Index
