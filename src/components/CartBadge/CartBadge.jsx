import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCart } from "../../Pages/Cart/CartContext.jsx";

const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: "0 4px",
        backgroundColor: "var(--tertiary)",
        color: "var(--primary)",
    },
}));

export default function CartBadge() {
    const { cart } = useCart(); // Obtenemos los productos del carrito

    // Calcula la cantidad total de productos en el carrito
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <IconButton aria-label="cart">
            <StyledBadge badgeContent={totalItems} color="secondary">
                <ShoppingCartIcon fontSize="large" // Opciones: "small", "medium", "large"
                    style={{ color: "var(--primary)" }} />
            </StyledBadge>
        </IconButton>
    );
}
