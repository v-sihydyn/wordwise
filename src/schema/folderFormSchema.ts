import { z } from 'zod';

export const folderFormSchema = z.object({
  name: z.string().min(1, 'Required').max(50),
});
