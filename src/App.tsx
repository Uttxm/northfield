import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Vision from './components/Vision'
import Mission from './components/Mission'
import Commitment from './components/Commitment'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navbar />
            <main>
                <Hero />
                <About />
                <Services />
                <Vision />
                <Mission />
                <Commitment />
                <Contact />
            </main>
            <Footer />
        </div>
    )
}
