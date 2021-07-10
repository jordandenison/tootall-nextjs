import Head from 'next/head'
import 'semantic-ui-css/semantic.min.css'
import './index.css'

import ResponsiveContainer from '../components/ResponsiveContainer'
import EquipmentSection from '../components/EquipmentSection'
import GallerySection from '../components/GallerySection'
import ContactSection from '../components/ContactSection'

const Homepage = () => (
  <ResponsiveContainer>
    <Head>
      <title>Too Tall Enterprises</title>
      <link rel="shortcut icon" href="/static/favicon.ico" />
    </Head>
    <EquipmentSection />
    <GallerySection />
    <ContactSection />
  </ResponsiveContainer>
)

export default Homepage
