import Link from 'next/link'
import { createApplication } from './actions'
import { APPLICATION_STATUSES } from '@/lib/types'

export default function NewApplicationPage() {
  return (
    <div className="max-w-2xl mx-auto p-8">
      <div className="mb-6">
        <Link href="/dashboard" className="text-sm text-gray-600 underline">
          ← Back to dashboard
        </Link>
      </div>

      <h1 className="text-2xl font-semibold mb-6">Add application</h1>

      <form action={createApplication} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-1">Company *</label>
            <input
              name="company"
              type="text"
              required
              className="w-full rounded border px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Role *</label>
            <input
              name="role"
              type="text"
              required
              className="w-full rounded border px-3 py-2"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-1">Status</label>
            <select
              name="status"
              defaultValue="Applied"
              className="w-full rounded border px-3 py-2"
            >
              {APPLICATION_STATUSES.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm mb-1">Date applied</label>
            <input
              name="date_applied"
              type="date"
              className="w-full rounded border px-3 py-2"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-1">Contact</label>
            <input
              name="contact"
              type="text"
              placeholder="Name, email, or note about contact"
              className="w-full rounded border px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Next action date</label>
            <input
              name="next_action_date"
              type="date"
              className="w-full rounded border px-3 py-2"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-1">Salary range</label>
            <input
              name="salary"
              type="text"
              placeholder="$120k–$150k"
              className="w-full rounded border px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Source</label>
            <input
              name="source"
              type="text"
              placeholder="LinkedIn, referral, recruiter…"
              className="w-full rounded border px-3 py-2"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm mb-1">Job posting link</label>
          <input
            name="link"
            type="url"
            placeholder="https://…"
            className="w-full rounded border px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Notes</label>
          <textarea
            name="notes"
            rows={4}
            className="w-full rounded border px-3 py-2"
          />
        </div>

        <div className="flex gap-3 pt-2">
          <button
            type="submit"
            className="rounded bg-black px-4 py-2 text-white"
          >
            Add application
          </button>
          <Link
            href="/dashboard"
            className="rounded border px-4 py-2"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  )
}