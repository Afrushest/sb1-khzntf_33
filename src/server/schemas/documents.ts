import { z } from 'zod';

export const createDocumentSchema = z.object({
  body: z.object({
    title: z.string().min(3),
    resourceType: z.enum(['training', 'exam', 'other']),
    theme: z.string(),
    displayPage: z.string(),
    fileUrl: z.string().url(),
    fileName: z.string(),
    fileSize: z.string()
  })
});

export const updateDocumentSchema = z.object({
  body: z.object({
    title: z.string().min(3).optional(),
    resourceType: z.enum(['training', 'exam', 'other']).optional(),
    theme: z.string().optional(),
    displayPage: z.string().optional(),
    fileUrl: z.string().url().optional(),
    fileName: z.string().optional(),
    fileSize: z.string().optional()
  })
});