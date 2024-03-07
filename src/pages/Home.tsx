import { Skeleton } from '@/components/ui/Skeleton';
import { IOrder } from '@/entities/IOrder';
import { OrdersService } from '@/services/OrdersService';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

export function Home() {
  const [orders, setOrders] = useState<IOrder[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log('getOrders');

    OrdersService.getOrders()
      .then(setOrders)
      .catch(() => {
        toast.error('Erro ao carregar os pedidos!');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen px-10 flex flex-col max-w-[800px] mx-auto justify-center">
      <h1 className="text-3xl font-semibold">Bem-vindo(a) ao Dashboard!</h1>
      <h2 className="text-muted-foreground">Estes são os seus pedidos:</h2>

      <div className="h-10 w-full mt-10 grid grid-cols-3 gap-4">
        {isLoading && (
          <>
            <Skeleton className="h-20" />
            <Skeleton className="h-20" />
            <Skeleton className="h-20" />
          </>
        )}

        {!isLoading && orders.map(order => (
          <div key={order.id} className="flex flex-col border p-4 rounded-md">
            <strong>Pedido {order.orderNumber}</strong>
            <small className="text-muted-foreground">
              Realizado em: {Intl.DateTimeFormat('pt-br').format(order.date)}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
}
