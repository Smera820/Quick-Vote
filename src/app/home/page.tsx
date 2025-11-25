import Home from "./components/Home"
import FeatureSection from "./components/FeatureSection"
import QuickVoteWorkSection from "./components/QuickVoteWorkSection"
import UseCaseSection from "./components/UseCaseSection"
import SecturitySection from "./components/SecturitySection"
import Testimonials from "./components/Testimonials"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const page = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-black text-white">
        <Home />
        <FeatureSection />
        <QuickVoteWorkSection />
        <UseCaseSection />
        <SecturitySection />
        <Testimonials />
        <div className="p-5">
          <Footer />
        </div>
      </div>
    </div>
  )
}
export default page

