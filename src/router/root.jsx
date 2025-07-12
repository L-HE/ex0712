import { createBrowserRouter } from 'react-router';
//첫 화면으로 보이기
import { lazy, Suspense } from 'react';

const Loading = () => <div>Loading...</div>
const FactoryMap = lazy(() => import("../pages/FactoryMap"))
const Detail = lazy(() => import("../pages/MachineDetailPage"))

const router = createBrowserRouter([
    {
        path: "/",
        element: <Suspense fallback={<Loading/>}><FactoryMap/></Suspense>,
    },
    {
        path: "detail",
        element: <Suspense fallback={<Loading/>}><Detail/></Suspense>,
    },
])

export default router