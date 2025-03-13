/*
  # Initial Schema Setup

  1. New Tables
    - `waitlist`
      - `id` (uuid, primary key)
      - `created_at` (timestamp)
      - `email` (text, unique)
    
    - `newsletter`
      - `id` (uuid, primary key)
      - `created_at` (timestamp)
      - `email` (text, unique)

  2. Security
    - Enable RLS on both tables
    - Add policies for inserting data
*/

-- Create waitlist table
CREATE TABLE IF NOT EXISTS waitlist (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  email text UNIQUE NOT NULL
);

-- Create newsletter table
CREATE TABLE IF NOT EXISTS newsletter (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  email text UNIQUE NOT NULL
);

-- Enable RLS
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Allow anonymous insert to waitlist"
  ON waitlist
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow anonymous insert to newsletter"
  ON newsletter
  FOR INSERT
  TO anon
  WITH CHECK (true);