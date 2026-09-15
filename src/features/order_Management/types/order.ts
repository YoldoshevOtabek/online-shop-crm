export type OrderItem = {
    id: string;
    orderId: string;
    productId: string;
    variantId: string | null;
    productName: string;
    productSku: string;
    productImage: string;
    attributes: any;
    price: number;
    quantity: number;
    total: number;
  };
  
 type Order = {
    id: string;
    orderNumber: string;
    userId: string;
    status: string;
    paymentMethod: string;
    paymentStatus: string;
    subtotal: number;
    discount: number;
    deliveryFee: number;
    total: number;
    couponId: string | null;
  
    addressSnapshot: {
      city: string;
      house: string;
      title: string;
      street: string;
    };
  
    customerSnapshot: {
      email: string;
      phone: string;
      lastName: string;
      firstName: string;
    };
  
    notes: string | null;
    createdAt: string;
    updatedAt: string;
  
    items: OrderItem[];
  
    statusHistory: any[];
  
    user: {
      id: string;
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
    };
  };

 export type OrdersTableProps = {
    orders: Order[];
  };