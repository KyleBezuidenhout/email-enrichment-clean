import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://hwwlxisldgelemtslisg.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh3d2x4aXNsZGdlbGVtdHNsaXNnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUwNDYyNTksImV4cCI6MjA4MDYyMjI1OX0.SlM716LssWwsrH82zKIMJTX30VDFNNPXE38J2K6Nfwk";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// API client for enrichment endpoints
export const apiClient = {
  async enrichSingle(data: { first_name: string; last_name: string; domain: string }) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/enrich`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${supabaseAnonKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  },

  async enrichBatch(data: { leads: any[]; job_name: string }) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/batch-enrich`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${supabaseAnonKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  },

  async getJob(jobId: string) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/get-job/${jobId}`, {
      headers: {
        'Authorization': `Bearer ${supabaseAnonKey}`,
      },
    });
    return response.json();
  },
};
