import { useEffect, useState, useRef } from "react";

export default function useNearScreen({ distance = '100px', externalRef, once = true } = {} ) {
    const [isNearScreen, setShow] = useState(false);
    const fromRef = useRef();

    useEffect(function() {
        let observer;

        const element = externalRef ? externalRef : fromRef.current;

        const onChange = (entries, observer) => {
            const el = entries[0]
            if(el.isIntersecting) {
                setShow(true);
                once && observer.disconnect();
            } else {
                !once && setShow(false);
            }
        }

        Promise.resolve(
            typeof IntersectionObserver !== 'undefined'
                ? IntersectionObserver
                : import('intersection-observer')
        ).then(
            () => {
                 observer = new IntersectionObserver(onChange, {
                    rootMargin: distance,
                })

                if(element) observer && observer.disconnect();
            }
        )
        
        return () => observer && observer.disconnect();
    })

    return {isNearScreen, fromRef};
}