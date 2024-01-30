"use Client"

import { ReactElement, ReactNode, Suspense } from "react";

type SuspenseWrapperType = {
    children: ReactNode | ReactNode[];
}

const SuspenseWrapper = ({children}: SuspenseWrapperType) => {
    return(
        <Suspense fallback={<>Loading...</>}>
            {children}
        </Suspense>
    )
}

export default SuspenseWrapper;