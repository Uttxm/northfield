import { useInView } from '../hooks/useInView'
import {
    Wrench,
    HardHat,
    Users,
    Paintbrush,
    PipetteIcon,
    Package,
    LayoutGrid,
    ShoppingCart,
    FileCheck,
} from 'lucide-react'

const services = [
    {
        icon: Wrench,
        title: 'Equipment Rental Services',
        description: 'Heavy machinery, lifting equipment, and specialized tools available on short- and long-term lease, reducing your CAPEX while keeping projects on track.',
        image: '/images/industrial.jpeg',
    },
    {
        icon: HardHat,
        title: 'Project Support & Management',
        description: 'From FEED to commissioning, our project teams embed with yours to manage scope, schedule, cost, and HSE, ensuring delivery to EPC standards.',
        image: '/images/vision.jpeg',
    },
    {
        icon: Users,
        title: 'Manpower Staffing Solutions',
        description: 'Rapid mobilization of vetted engineers, technicians, welders, riggers, and tradesmen, deployed site-ready with full trade-test and medical clearances.',
        image: '/images/staffing.jpeg',
    },
    {
        icon: PipetteIcon,
        title: 'Piping & Welding Works',
        description: 'ASME- and API-compliant fabrication, installation, and repair of carbon steel, stainless, and alloy piping systems with full NDT and weld-mapping documentation.',
        image: '/images/welding.jpeg',
    },
    {
        icon: Paintbrush,
        title: 'Painting & Coating Works',
        description: 'Surface preparation, blasting, and NACE-certified protective coating application for offshore platforms, tanks, vessels, and structural steelwork.',
        image: '/images/painting.jpeg',
    },
    {
        icon: Package,
        title: 'Industrial Material & Tools',
        description: 'Sourcing and supply of fasteners, gaskets, flanges, valves, power tools, and consumables with traceable MTCs and same-day dispatch capability.',
        image: '/images/tools.jpeg',
    },
    {
        icon: LayoutGrid,
        title: 'Scaffolding Services',
        description: 'Erection and dismantling of tube-and-clamp and system scaffolding for shutdowns, turnarounds, and new-build projects, all to BS EN 12811 standards.',
        image: '/images/scaffolding.jpeg',
    },
    {
        icon: ShoppingCart,
        title: 'General Trading',
        description: 'Procurement and distribution of raw materials, spare parts, safety equipment, and industrial consumables through our established supply-chain network.',
        image: '/images/trading.jpeg',
    },
    {
        icon: FileCheck,
        title: 'PRO Services (Mandoob)',
        description: 'Full government relations support including commercial registration, trade licenses, work permits, visa processing, and ongoing labor-law compliance in Qatar.',
        image: '/images/pro-services.jpeg',
    },
]

export default function Services() {
    const [ref, visible] = useInView()

    return (
        <section id="services" className="py-20 lg:py-28 bg-muted/40">
            <div ref={ref} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-14">
                    <div className="section-accent mx-auto mb-4" />
                    <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-4">
                        Our Services
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                        Nine integrated service lines covering the full project lifecycle, from manpower mobilization and equipment supply to specialist contracting and regulatory compliance.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, i) => {
                        const Icon = service.icon
                        return (
                            <article
                                key={service.title}
                                className="service-card bg-card rounded-2xl overflow-hidden border border-border shadow-card group"
                                style={{ transitionDelay: `${i * 60}ms` }}
                            >
                                {/* Image */}
                                <div className="relative h-44 overflow-hidden">
                                    <img
                                        src={service.image}
                                        alt={service.title + ' services by Northfield Consultancy Qatar'}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                                    <div className="absolute bottom-3 left-3 w-10 h-10 rounded-lg bg-primary/90 flex items-center justify-center shadow-elegant">
                                        <Icon className="w-5 h-5 text-primary-foreground" />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-5">
                                    <h3 className="font-heading font-semibold text-lg text-card-foreground mb-2">
                                        {service.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            </article>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
