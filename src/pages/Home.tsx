import { Skeleton } from '@/components/ui/Skeleton';
import { useState } from 'react';

const orders = [
  {
    id: crypto.randomUUID(),
    orderNumber: '#001',
    date: Date.now()
  },
  {
    id: crypto.randomUUID(),
    orderNumber: '#002',
    date: Date.now()
  },
  {
    id: crypto.randomUUID(),
    orderNumber: '#003',
    date: Date.now()
  },
];

export function Home() {
  const [isLoading] = useState(false);

  return (
    <div className="min-h-screen flex flex-col max-w-[800px] mx-auto justify-center">
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
