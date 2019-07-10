import 'semantic-ui-css/semantic.min.css'
import './index.css'

import ResponsiveContainer from 'components/ResponsiveContainer'
import EquipmentSection from 'components/EquipmentSection'
import GallerySection from 'components/GallerySection'
import ContactSection from 'components/ContactSection'

const Homepage = () => (
  <ResponsiveContainer>
    <EquipmentSection />
    <GallerySection />
    <ContactSection />
  </ResponsiveContainer>
)

export default Homepage
