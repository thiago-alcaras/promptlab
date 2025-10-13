/*
  # PromptLab Educational Platform Schema

  ## Overview
  Creates the database structure for the PromptLab interactive learning platform,
  tracking user progress through modules and storing user interaction data.

  ## New Tables

  ### `user_progress`
  Tracks user completion status for each module/chapter
  - `id` (uuid, primary key) - Unique identifier
  - `user_id` (uuid, references auth.users) - User identifier
  - `module_id` (text) - Module identifier (e.g., "chapter-1", "playground")
  - `completed` (boolean) - Completion status
  - `score` (integer) - User score for the module (0-100)
  - `last_accessed` (timestamptz) - Last access timestamp
  - `created_at` (timestamptz) - Creation timestamp
  - `updated_at` (timestamptz) - Last update timestamp

  ### `prompt_submissions`
  Stores user prompt submissions from the playground
  - `id` (uuid, primary key) - Unique identifier
  - `user_id` (uuid, references auth.users) - User identifier
  - `prompt_text` (text) - The submitted prompt
  - `feedback` (text) - AI-generated feedback
  - `quality_score` (integer) - Prompt quality score (0-100)
  - `module_context` (text) - Related module context
  - `created_at` (timestamptz) - Creation timestamp

  ## Security
  - Enable RLS on all tables
  - Users can only access their own data
  - Authenticated users can create their own records
*/

-- Create user_progress table
CREATE TABLE IF NOT EXISTS user_progress (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  module_id text NOT NULL,
  completed boolean DEFAULT false,
  score integer DEFAULT 0,
  last_accessed timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(user_id, module_id)
);

-- Create prompt_submissions table
CREATE TABLE IF NOT EXISTS prompt_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  prompt_text text NOT NULL,
  feedback text DEFAULT '',
  quality_score integer DEFAULT 0,
  module_context text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE prompt_submissions ENABLE ROW LEVEL SECURITY;

-- RLS Policies for user_progress
CREATE POLICY "Users can view own progress"
  ON user_progress
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own progress"
  ON user_progress
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own progress"
  ON user_progress
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own progress"
  ON user_progress
  FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

-- RLS Policies for prompt_submissions
CREATE POLICY "Users can view own submissions"
  ON prompt_submissions
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own submissions"
  ON prompt_submissions
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own submissions"
  ON prompt_submissions
  FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_user_progress_user_id ON user_progress(user_id);
CREATE INDEX IF NOT EXISTS idx_user_progress_module_id ON user_progress(module_id);
CREATE INDEX IF NOT EXISTS idx_prompt_submissions_user_id ON prompt_submissions(user_id);
CREATE INDEX IF NOT EXISTS idx_prompt_submissions_created_at ON prompt_submissions(created_at DESC);