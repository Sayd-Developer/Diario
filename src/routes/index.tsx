import { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import { routes } from "./Router";

const LoadingFallback = () => <div></div>;

export default function NavigationRoutes() {
    return (
        <Suspense fallback={<LoadingFallback />}>{useRoutes(routes)}</Suspense>
    );
}