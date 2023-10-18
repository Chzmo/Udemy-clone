import { useEffect, useState } from 'react'

export const useIsDivTop = (ref) => {
    const [isTop, setIsTop] = useState(false)

    useEffect(()=>{
        const handleScroll = () =>{
            const divTop = ref.current.getBoundingClientRect().top;
            setIsTop(-10 < divTop < 10)
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll)
    }, [ref])

    return isTop
}

