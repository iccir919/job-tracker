# Job Application Tracker

A multi-user web app for tracking job applications, built with Next.js 16, Supabase, and TypeScript.

## Features

- Email + password authentication
- Add, view, edit, and delete job applications
- Row-level security: users only see their own data
- Status tracking, contact info, application links, and notes per role

## Tech Stack

- Next.js 16 (App Router, Server Components, Server Actions)
- Supabase (Postgres, Auth, Row-Level Security)
- TypeScript
- Tailwind CSS

## Status

Currently in active development. Build progress:

- [x] Project scaffold + Supabase setup
- [x] Database schema + RLS policies
- [x] Email auth (login, signup, logout)
- [x] Add application form
- [x] Applications table view
- [ ] Edit + delete
- [ ] Filter, search, sort
- [ ] Dashboard stat strip
- [ ] Tailwind polish
- [ ] Vercel deployment