export type ApplicationStatus =
  | 'Applied'
  | 'Screening'
  | 'Interviewing'
  | 'Offer'
  | 'Rejected'
  | 'Withdrawn'
  | 'No Response'

export const APPLICATION_STATUSES: ApplicationStatus[] = [
  'Applied',
  'Screening',
  'Interviewing',
  'Offer',
  'Rejected',
  'Withdrawn',
  'No Response',
]

export interface Application {
  id: string
  user_id: string
  company: string
  role: string
  status: ApplicationStatus
  date_applied: string | null
  contact: string | null
  next_action_date: string | null
  notes: string | null
  salary: string | null
  link: string | null
  source: string | null
  created_at: string
  updated_at: string
}

export type NewApplication = Omit<Application, 'id' | 'user_id' | 'created_at' | 'updated_at'>

export type ApplicationUpdate = Partial<NewApplication> & { id: string }