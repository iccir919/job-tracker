import type { Application } from '@/lib/types'

interface Props {
  applications: Application[]
}

const STATUS_STYLES: Record<string, string> = {
  Applied: 'bg-blue-100 text-blue-800',
  Screening: 'bg-amber-100 text-amber-800',
  Interviewing: 'bg-purple-100 text-purple-800',
  Offer: 'bg-green-100 text-green-800',
  Rejected: 'bg-red-100 text-red-800',
  Withdrawn: 'bg-gray-100 text-gray-700',
  'No Response': 'bg-gray-100 text-gray-600',
}

function formatDate(date: string | null): string {
  if (!date) return '—'
  return new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

export default function ApplicationsTable({ applications }: Props) {
  if (applications.length === 0) {
    return (
      <div className="rounded border border-dashed p-12 text-center">
        <p className="text-gray-600">No applications yet.</p>
        <p className="text-sm text-gray-500 mt-2">
          Click &quot;+ Add application&quot; to add your first one.
        </p>
      </div>
    )
  }

  return (
    <div className="overflow-x-auto rounded border">
      <table className="w-full text-sm">
        <thead className="bg-gray-50 text-left">
          <tr>
            <th className="px-4 py-3 font-medium">Company</th>
            <th className="px-4 py-3 font-medium">Role</th>
            <th className="px-4 py-3 font-medium">Status</th>
            <th className="px-4 py-3 font-medium">Applied</th>
            <th className="px-4 py-3 font-medium">Next action</th>
            <th className="px-4 py-3 font-medium">Contact</th>
            <th className="px-4 py-3 font-medium">Source</th>
            <th className="px-4 py-3 font-medium">Salary</th>
            <th className="px-4 py-3 font-medium">Link</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((app) => {
            const badgeClass = STATUS_STYLES[app.status] || 'bg-gray-100 text-gray-700'
            return (
              <tr key={app.id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-3 font-medium">{app.company}</td>
                <td className="px-4 py-3">{app.role}</td>
                <td className="px-4 py-3">
                  <span className={'inline-block rounded-full px-2 py-0.5 text-xs ' + badgeClass}>
                    {app.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-gray-600">{formatDate(app.date_applied)}</td>
                <td className="px-4 py-3 text-gray-600">{formatDate(app.next_action_date)}</td>
                <td className="px-4 py-3 text-gray-600">{app.contact || '—'}</td>
                <td className="px-4 py-3 text-gray-600">{app.source || '—'}</td>
                <td className="px-4 py-3 text-gray-600">{app.salary || '—'}</td>
                <td className="px-4 py-3">
                    {app.link ? (
                    <a
                        href={app.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                    >
                        Open
                    </a>
                  ) : (
                    <span className="text-gray-400">—</span>
                  )}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}