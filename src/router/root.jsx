import { createBrowserRouter } from 'react-router';
import { lazy, Suspense } from 'react';

const Loading = () => <div>Loading...</div>
const Main = lazy(() => import("../pages/Main"))
const FactoryMap = lazy(() => import("../pages/FactoryMap"))
const Detail = lazy(() => import("../pages/MachineDetailPage"))

const router = createBrowserRouter([
    {
        path: "/",
        element: <Suspense fallback={<Loading/>}><Main/></Suspense>,
    },
    {
        path: "/map",
        element: <Suspense fallback={<Loading/>}><FactoryMap/></Suspense>,
    },
    {
        path: "/detail/:id",
        element: <Suspense fallback={<Loading/>}><Detail/></Suspense>,
    },
])

export default router