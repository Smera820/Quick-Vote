import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import About from "./components/About"
import StorySection from "./components/StorySection"
import WhoWeAreSection from "./components/WhoWeAreSection"
import MissionSection from "./components/MissionSection"
import QuickVoteFeature from "./components/QuickVoteFeature"
const page = () => {
    return (
        <div>
            <Navbar />
            <div className="bg-black">
                <About />
                <StorySection />
                <WhoWeAreSection />
                <MissionSection />
                <QuickVoteFeature />
                <div className="p-5">
 <Footer/>
                </div>
            </div>
        </div>
    )
}
export default page