import Navbar from "../components/Navbar"
import ContactDetails from "./components/ContactDetails"
import MessageSection from "./components/MessageSection"
import ContactUs from "./components/ContactUs"
import Footer from "../components/Footer"

const page = () => {
    return (
        <div>
            <Navbar />
            <div className="bg-black text-white">
                <ContactUs />
                <ContactDetails />
                <MessageSection />
                <div className="p-5">
                    <Footer />
                </div>
            </div>

        </div>
    )
}
export default page