'use client';

import Link from 'next/link';
import { useFormState } from 'react-dom';

import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from '@/components/ui/Card';

import { Label } from '@/components/ui/Label';
import { Input } from '@/components/ui/Input';
import { loginUserAction } from '@/app/(auth)/actions';
import { ZodErrors } from '@/components/ZodErrors/ZodErrors';
import { SubmitButton } from '@/components/SubmitButton/SubmitButton';
import { StrapiErrors } from '@/components/StrapiErrors/StrapiErrors';

const INITIAL_STATE = {
  zodErrors: null,
  strapiErrors: null,
  data: null,
  message: '',
};

export function SigninForm() {
  const [formState, formAction] = useFormState<any, any>(loginUserAction, INITIAL_STATE);
  return (
    <div className="w-full max-w-md">
      <form action={formAction}>
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-3xl font-bold">Sign In</CardTitle>
            <CardDescription>Enter your details to sign in to your account</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="identifier" name="identifier" type="text" placeholder="username or email" />
              <ZodErrors error={formState?.zodErrors?.identifier} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" name="password" type="password" placeholder="password" />
              <ZodErrors error={formState.zodErrors?.password} />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col">
            <SubmitButton className="w-full" text="Sign In" loadingText="Loading" />
            <StrapiErrors error={formState?.strapiErrors} />
          </CardFooter>
        </Card>
        <div className="mt-4 text-center text-sm">
          Don`t have an account?
          <Link className="ml-2 underline" href="/sign-up">
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
}
