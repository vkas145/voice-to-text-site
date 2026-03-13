-- Run this in Supabase → SQL Editor

-- Transcripts table
create table transcripts (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users(id) on delete cascade not null,
  filename text,
  transcript text,
  word_count integer,
  duration integer,
  language text,
  summary text,
  created_at timestamp with time zone default now()
);

-- Row Level Security: users can only see their own transcripts
alter table transcripts enable row level security;

create policy "Users can insert own transcripts"
  on transcripts for insert
  with check (auth.uid() = user_id);

create policy "Users can view own transcripts"
  on transcripts for select
  using (auth.uid() = user_id);

create policy "Users can delete own transcripts"
  on transcripts for delete
  using (auth.uid() = user_id);
