import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Имя должно содержать минимум 2 символа'),
  company: z.string().optional(),
  email: z.string().email('Неверный формат email'),
  phone: z.string().min(10, 'Неверный формат телефона'),
  message: z.string().min(10, 'Сообщение должно содержать минимум 10 символов'),
  consent: z.boolean().refine((val) => val === true, {
    message: 'Необходимо согласие на обработку данных'
  }),
  honeypot: z.string().max(0, 'Подозрительная активность')
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
