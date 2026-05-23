CREATE TABLE users (
  id uuid PRIMARY KEY,
  name text,
  email text,
  plan text,
  credits integer
);

CREATE TABLE projects (
  id uuid PRIMARY KEY,
  user_id uuid,
  title text,
  prompt text,
  generated_code text,
  created_at timestamp
);
