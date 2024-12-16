import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        const specificRoutes = ["/", "/menu", "/nosotros", "/beneficios", "/contacto", "/panelAdministracion", "/cart", "/checkout", "/userpage"];

        if (specificRoutes.includes(pathname)) {
            const timeout = setTimeout(() => {
                window.scrollTo(0, 0);
            }, 5);

            return () => clearTimeout(timeout);
        }
    }, [pathname]);

    return null;
}
