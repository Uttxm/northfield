import { useEffect, useRef, useState, RefObject } from 'react'

export function useInView(threshold = 0.15): [RefObject<HTMLDivElement>, boolean] {
    const ref = useRef<HTMLDivElement>(null!)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.unobserve(entry.target)
                }
            },
            { threshold }
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => observer.disconnect()
    }, [threshold])

    return [ref, isVisible]
}
