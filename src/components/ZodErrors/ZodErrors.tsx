export function ZodErrors({ error }: { error: string[] | undefined }) {
  if (!error) return null;

  return error.map((err: string, index: number) => (
    <div key={index} className="mt-1 py-2 text-xs italic text-pink-500">
      {err}
    </div>
  ));
}
