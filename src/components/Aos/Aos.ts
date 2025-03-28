import Aos from 'aos';
import { useEffect } from 'react';

type Props = {
    children: React.ReactNode
}

export default function AosProvider({ children }:Props) {

    useEffect(() => {
        Aos.init()

        return () => Aos.refresh();
    }, [])

    return children
}