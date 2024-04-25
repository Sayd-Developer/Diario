import { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import { routes } from "./Router";

// const LoadingFallback = () => <div></div>;
// fallback = {< LoadingFallback />

export default function NavigationRoutes() {
    return (
        <Suspense >{useRoutes(routes)}</Suspense>
    );
}