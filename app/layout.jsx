import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import "@/assets/styles/globals.css"

export const metadata = {
  title: "Property Pulse",
  keywords: "rental, property, real estate",
  description: "Find your dream rental property with us",
}

const MainLayout = ({ children }) => {
  return (
    <html>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

export default MainLayout
