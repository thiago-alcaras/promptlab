import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder-anon-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface UserProgress {
  id: string;
  user_id: string;
  module_id: string;
  completed: boolean;
  score: number;
  last_accessed: string;
  created_at: string;
  updated_at: string;
}

export interface PromptSubmission {
  id: string;
  user_id: string;
  prompt_text: string;
  feedback: string;
  quality_score: number;
  module_context: string;
  created_at: string;
}
