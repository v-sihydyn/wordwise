interface StrapiErrorsProps {
  message: string | null;
  name: string;
  status: string | null;
}

export function StrapiErrors({ error }: { error: StrapiErrorsProps | undefined }) {
  if (!error?.message) return null;

  return <div className="text-md py-2 italic text-pink-500">{error.message}</div>;
}
