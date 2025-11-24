import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2 } from "lucide-react";
import { CartItem } from "@/types/plant";
import { useAppDispatch } from "@/store/hooks";
import { incrementQuantity, decrementQuantity, removeFromCart } from "@/store/cartSlice";

interface CartItemCardProps {
  item: CartItem;
}

const CartItemCard = ({ item }: CartItemCardProps) => {
  const dispatch = useAppDispatch();

  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex gap-4">
          <img 
            src={item.image} 
            alt={item.name}
            className="h-24 w-24 rounded-md object-cover"
          />
          <div className="flex-1">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-foreground">{item.name}</h3>
                <p className="text-sm text-muted-foreground">${item.price} each</p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => dispatch(removeFromCart(item.id))}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
            <div className="mt-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => dispatch(decrementQuantity(item.id))}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-8 text-center font-medium">{item.quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => dispatch(incrementQuantity(item.id))}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <p className="font-semibold text-foreground">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CartItemCard;
