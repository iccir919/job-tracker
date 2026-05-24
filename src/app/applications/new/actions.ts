'use server'

import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import { createClient } from '@/lib/supabase/server'
import type { ApplicationStatus } from '@/lib/types'

export async function createApplication(formData: FormData) {
  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()
  if (!user) {
    redirect('/login')
  }

  const company = formData.get('company') as string
  const role = formData.get('role') as string
  const status = formData.get('status') as ApplicationStatus
  const date_applied = formData.get('date_applied') as string
  const contact = formData.get('contact') as string
  const next_action_date = formData.get('next_action_date') as string
  const notes = formData.get('notes') as string
  const salary = formData.get('salary') as string
  const link = formData.get('link') as string
  const source = formData.get('source') as string

  if (!company?.trim() || !role?.trim()) {
    return { error: 'Company and role are required' }
  }

  const { error } = await supabase.from('applications').insert({
    user_id: user.id,
    company: company.trim(),
    role: role.trim(),
    status: status || 'Applied',
    date_applied: date_applied || null,
    contact: contact?.trim() || null,
    next_action_date: next_action_date || null,
    notes: notes?.trim() || null,
    salary: salary?.trim() || null,
    link: link?.trim() || null,
    source: source?.trim() || null,
  })

  if (error) {
    console.error('Insert error:', error)
    return { error: error.message }
  }

  revalidatePath('/dashboard')
  redirect('/dashboard')
}