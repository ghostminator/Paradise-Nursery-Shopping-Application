import { Link } from "react-router-dom";
import { ShoppingCart, Leaf } from "lucide-react";
import { useAppSelector } from "@/store/hooks";
import { Badge } from "@/components/ui/badge";

const Header = () => {
  const cartItems = useAppSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="border-b bg-card">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Leaf className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-2xl font-bold text-foreground">Paradise Nursery</h1>
              <p className="text-sm text-muted-foreground">Bringing nature to your home</p>
            </div>
          </Link>
          
          <Link to="/cart" className="relative">
            <ShoppingCart className="h-6 w-6 text-foreground" />
            {totalItems > 0 && (
              <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
                {totalItems}
              </Badge>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
