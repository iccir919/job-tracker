import Link from 'next/link'
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { logout } from './actions'
import ApplicationsTable from './applications-table'
import type { Application } from '@/lib/types'

export default async function DashboardPage() {
  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()
  if (!user) {
    redirect('/login')
  }

  const { data: applications, error } = await supabase
    .from('applications')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Failed to load applications:', error)
  }

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-semibold">Applications</h1>
        <div className="flex gap-3">
          <Link
            href="/applications/new"
            className="rounded bg-black px-4 py-2 text-sm text-white"
          >
            + Add application
          </Link>
          <form action={logout}>
            <button
              type="submit"
              className="rounded border px-4 py-2 text-sm"
            >
              Log out
            </button>
          </form>
        </div>
      </div>

      <p className="text-sm text-gray-600 mb-6">
        Signed in as {user.email}
      </p>

      <ApplicationsTable applications={(applications as Application[]) || []} />
    </div>
  )
}