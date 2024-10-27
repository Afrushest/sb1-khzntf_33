import { z } from 'zod';

export const createEventSchema = z.object({
  body: z.object({
    title: z.string().min(3),
    description: z.string().optional(),
    date: z.string(),
    time: z.string(),
    type: z.enum(['in-person', 'virtual']),
    location: z.string().optional(),
    theme: z.string(),
    agenda: z.string().optional(),
    maxParticipants: z.number().positive().optional(),
    hasWaitingList: z.boolean().optional()
  })
});

export const updateEventSchema = z.object({
  body: z.object({
    title: z.string().min(3).optional(),
    description: z.string().optional(),
    date: z.string().optional(),
    time: z.string().optional(),
    type: z.enum(['in-person', 'virtual']).optional(),
    location: z.string().optional(),
    theme: z.string().optional(),
    agenda: z.string().optional(),
    maxParticipants: z.number().positive().optional(),
    hasWaitingList: z.boolean().optional(),
    isPast: z.boolean().optional()
  })
});