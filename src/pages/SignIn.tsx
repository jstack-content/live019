import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { useForm } from 'react-hook-form';

interface IFormData {
  email: string;
  password: string;
}

export function SignIn() {
  const form = useForm<IFormData>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const handleSubmit = form.handleSubmit((data) => {
    console.log('Sign in data:', data);
  });

  return (
    <div className="min-h-screen flex flex-col justify-center mx-auto max-w-[480px] p-6">
      <h1 className="font-semibold text-xl">Acesse sua conta</h1>

      <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-2">
        <div className="space-y-1">
          <Label htmlFor="email">E-mail</Label>
          <Input id="email" {...form.register('email')} />
        </div>

        <div className="space-y-1">
          <Label htmlFor="password">Senha</Label>
          <Input id="password" type="password" {...form.register('password')} />
        </div>

        <Button className="mt-3">Entrar</Button>
      </form>
    </div>
  );
}
