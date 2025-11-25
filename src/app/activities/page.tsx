import Navbar from "../components/Navbar"
import Activities from "./components/Activities"
import FilterSection from "./components/FilterSection"
import Footer from "../components/Footer"

const page = () => {
    const elections = [
        {
            id: 1,
            title: "Student Council Election 2025",
            organizer: "St.Mary's College",
            date: "Sep 28,2025",
            votes: 3200,
            status: "Active"
        },
        {
            id: 2,
            title: "Student Council Election 2025",
            organizer: "St.Mary's College",
            date: "Sep 28,2025",
            votes: 3200,
            status: "Active"
        },
        {
            id: 3,
            title: "Student Council Election 2025",
            organizer: "St.Mary's College",
            date: "Sep 28,2025",
            votes: 3200,
            status: "Active"
        },
        {
            id: 4,
            title: "Student Council Election 2025",
            organizer: "St.Mary's College",
            date: "Sep 28,2025",
            votes: 3200,
            status: "Active"
        },
        {
            id: 5,
            title: "Student Council Election 2025",
            organizer: "St.Mary's College",
            date: "Sep 28,2025",
            votes: 3200,
            status: "Active"
        },
        {
            id: 6,
            title: "Student Council Election 2025",
            organizer: "St.Mary's College",
            date: "Sep 28,2025",
            votes: 3200,
            status: "Active"
        },
        {
            id: 7,
            title: "Student Council Election 2025",
            organizer: "St.Mary's College",
            date: "Sep 28,2025",
            votes: 3200,
            status: "Active"
        },
        {
            id: 8,
            title: "Student Council Election 2025",
            organizer: "St.Mary's College",
            date: "Sep 28,2025",
            votes: 3200,
            status: "Active"
        },
    ]
    return (
        <div>
            <Navbar />
            <div className="bg-black text-white">
                <Activities />
                <FilterSection data={elections} />
                <div className="p-5">
                    <Footer />
                </div>

            </div>
        </div>
    )
}
export default page