import Header from "@/components/Header";
import CartItemCard from "@/components/CartItemCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useAppSelector } from "@/store/hooks";
import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { toast } from "sonner";

const Cart = () => {
  const cartItems = useAppSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalCost = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    toast.info("Coming Soon", {
      description: "Checkout functionality will be available soon!",
    });
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-16">
          <div className="flex flex-col items-center justify-center text-center">
            <ShoppingBag className="mb-4 h-24 w-24 text-muted-foreground" />
            <h2 className="mb-2 text-2xl font-bold text-foreground">Your cart is empty</h2>
            <p className="mb-6 text-muted-foreground">Add some plants to get started!</p>
            <Link to="/products">
              <Button>Continue Shopping</Button>
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h2 className="mb-6 text-3xl font-bold text-foreground">Shopping Cart</h2>
        
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="space-y-4 lg:col-span-2">
            {cartItems.map((item) => (
              <CartItemCard key={item.id} item={item} />
            ))}
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardContent className="p-6">
                <h3 className="mb-4 text-xl font-semibold text-foreground">Order Summary</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Total Items:</span>
                    <span className="font-medium text-foreground">{totalItems}</span>
                  </div>
                  <div className="flex justify-between text-lg font-semibold text-foreground">
                    <span>Total Cost:</span>
                    <span>${totalCost.toFixed(2)}</span>
                  </div>
                </div>
                <div className="mt-6 space-y-3">
                  <Button className="w-full" onClick={handleCheckout}>
                    Checkout
                  </Button>
                  <Link to="/products">
                    <Button variant="outline" className="w-full">
                      Continue Shopping
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;
