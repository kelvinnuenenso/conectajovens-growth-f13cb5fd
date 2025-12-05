export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      activities: {
        Row: {
          contact_id: string | null
          created_at: string | null
          finished_at: string | null
          id: string
          lead_id: string | null
          metadata: Json | null
          started_at: string | null
          summary: string | null
          type: Database["public"]["Enums"]["activity_type"]
          user_id: string | null
        }
        Insert: {
          contact_id?: string | null
          created_at?: string | null
          finished_at?: string | null
          id?: string
          lead_id?: string | null
          metadata?: Json | null
          started_at?: string | null
          summary?: string | null
          type: Database["public"]["Enums"]["activity_type"]
          user_id?: string | null
        }
        Update: {
          contact_id?: string | null
          created_at?: string | null
          finished_at?: string | null
          id?: string
          lead_id?: string | null
          metadata?: Json | null
          started_at?: string | null
          summary?: string | null
          type?: Database["public"]["Enums"]["activity_type"]
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "activities_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "activities_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "leads"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "activities_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "v_lead_summary"
            referencedColumns: ["lead_id"]
          },
          {
            foreignKeyName: "activities_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      contacts: {
        Row: {
          city: string | null
          company: string | null
          consent_marketing: boolean | null
          country: string | null
          created_at: string | null
          created_by: string | null
          email: string | null
          full_name: string | null
          id: string
          metadata: Json | null
          organization_id: string | null
          phone: string | null
          state: string | null
          updated_at: string | null
          whatsapp: string | null
        }
        Insert: {
          city?: string | null
          company?: string | null
          consent_marketing?: boolean | null
          country?: string | null
          created_at?: string | null
          created_by?: string | null
          email?: string | null
          full_name?: string | null
          id?: string
          metadata?: Json | null
          organization_id?: string | null
          phone?: string | null
          state?: string | null
          updated_at?: string | null
          whatsapp?: string | null
        }
        Update: {
          city?: string | null
          company?: string | null
          consent_marketing?: boolean | null
          country?: string | null
          created_at?: string | null
          created_by?: string | null
          email?: string | null
          full_name?: string | null
          id?: string
          metadata?: Json | null
          organization_id?: string | null
          phone?: string | null
          state?: string | null
          updated_at?: string | null
          whatsapp?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "contacts_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contacts_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      deals: {
        Row: {
          created_at: string | null
          currency: string | null
          id: string
          lead_id: string | null
          metadata: Json | null
          opportunity_id: string | null
          payment_method: string | null
          product_type: string | null
          status: string | null
          value: number
        }
        Insert: {
          created_at?: string | null
          currency?: string | null
          id?: string
          lead_id?: string | null
          metadata?: Json | null
          opportunity_id?: string | null
          payment_method?: string | null
          product_type?: string | null
          status?: string | null
          value: number
        }
        Update: {
          created_at?: string | null
          currency?: string | null
          id?: string
          lead_id?: string | null
          metadata?: Json | null
          opportunity_id?: string | null
          payment_method?: string | null
          product_type?: string | null
          status?: string | null
          value?: number
        }
        Relationships: [
          {
            foreignKeyName: "deals_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "leads"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "deals_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "v_lead_summary"
            referencedColumns: ["lead_id"]
          },
          {
            foreignKeyName: "deals_opportunity_id_fkey"
            columns: ["opportunity_id"]
            isOneToOne: false
            referencedRelation: "opportunities"
            referencedColumns: ["id"]
          },
        ]
      }
      files: {
        Row: {
          created_at: string | null
          filename: string | null
          id: string
          lead_id: string | null
          metadata: Json | null
          owner_id: string | null
          path: string | null
        }
        Insert: {
          created_at?: string | null
          filename?: string | null
          id?: string
          lead_id?: string | null
          metadata?: Json | null
          owner_id?: string | null
          path?: string | null
        }
        Update: {
          created_at?: string | null
          filename?: string | null
          id?: string
          lead_id?: string | null
          metadata?: Json | null
          owner_id?: string | null
          path?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "files_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "leads"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "files_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "v_lead_summary"
            referencedColumns: ["lead_id"]
          },
          {
            foreignKeyName: "files_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      invoices: {
        Row: {
          amount: number | null
          created_at: string | null
          deal_id: string | null
          due_date: string | null
          id: string
          status: string | null
        }
        Insert: {
          amount?: number | null
          created_at?: string | null
          deal_id?: string | null
          due_date?: string | null
          id?: string
          status?: string | null
        }
        Update: {
          amount?: number | null
          created_at?: string | null
          deal_id?: string | null
          due_date?: string | null
          id?: string
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "invoices_deal_id_fkey"
            columns: ["deal_id"]
            isOneToOne: false
            referencedRelation: "deals"
            referencedColumns: ["id"]
          },
        ]
      }
      lead_events: {
        Row: {
          created_at: string | null
          event_type: string | null
          id: string
          lead_id: string | null
          metadata: Json | null
        }
        Insert: {
          created_at?: string | null
          event_type?: string | null
          id?: string
          lead_id?: string | null
          metadata?: Json | null
        }
        Update: {
          created_at?: string | null
          event_type?: string | null
          id?: string
          lead_id?: string | null
          metadata?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "lead_events_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "leads"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lead_events_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "v_lead_summary"
            referencedColumns: ["lead_id"]
          },
        ]
      }
      lead_sources: {
        Row: {
          canonical_name: string | null
          category: string
          created_at: string | null
          id: string
          metadata: Json | null
          name: string
          page_id: string | null
          platform: string | null
        }
        Insert: {
          canonical_name?: string | null
          category: string
          created_at?: string | null
          id?: string
          metadata?: Json | null
          name?: string
          page_id?: string | null
          platform?: string | null
        }
        Update: {
          canonical_name?: string | null
          category?: string
          created_at?: string | null
          id?: string
          metadata?: Json | null
          name?: string
          page_id?: string | null
          platform?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "lead_sources_page_id_fkey"
            columns: ["page_id"]
            isOneToOne: false
            referencedRelation: "pages"
            referencedColumns: ["id"]
          },
        ]
      }
      leads: {
        Row: {
          assigned_to: string | null
          contact_id: string | null
          created_at: string | null
          first_touch_at: string | null
          id: string
          initial_campaign: string | null
          initial_medium: string | null
          last_touch_at: string | null
          lead_score: number | null
          metadata: Json | null
          organization_id: string | null
          page_id: string | null
          source_id: string | null
          status: Database["public"]["Enums"]["lead_status"] | null
          updated_at: string | null
          utm: Json | null
        }
        Insert: {
          assigned_to?: string | null
          contact_id?: string | null
          created_at?: string | null
          first_touch_at?: string | null
          id?: string
          initial_campaign?: string | null
          initial_medium?: string | null
          last_touch_at?: string | null
          lead_score?: number | null
          metadata?: Json | null
          organization_id?: string | null
          page_id?: string | null
          source_id?: string | null
          status?: Database["public"]["Enums"]["lead_status"] | null
          updated_at?: string | null
          utm?: Json | null
        }
        Update: {
          assigned_to?: string | null
          contact_id?: string | null
          created_at?: string | null
          first_touch_at?: string | null
          id?: string
          initial_campaign?: string | null
          initial_medium?: string | null
          last_touch_at?: string | null
          lead_score?: number | null
          metadata?: Json | null
          organization_id?: string | null
          page_id?: string | null
          source_id?: string | null
          status?: Database["public"]["Enums"]["lead_status"] | null
          updated_at?: string | null
          utm?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "leads_assigned_to_fkey"
            columns: ["assigned_to"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "leads_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "leads_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "leads_page_id_fkey"
            columns: ["page_id"]
            isOneToOne: false
            referencedRelation: "pages"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "leads_source_id_fkey"
            columns: ["source_id"]
            isOneToOne: false
            referencedRelation: "lead_sources"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "leads_source_id_fkey"
            columns: ["source_id"]
            isOneToOne: false
            referencedRelation: "mv_leads_by_source"
            referencedColumns: ["source_id"]
          },
        ]
      }
      opportunities: {
        Row: {
          created_at: string | null
          currency: string | null
          estimated_value: number | null
          id: string
          lead_id: string | null
          metadata: Json | null
          owner: string | null
          product_id: string | null
          stage: string | null
          title: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          currency?: string | null
          estimated_value?: number | null
          id?: string
          lead_id?: string | null
          metadata?: Json | null
          owner?: string | null
          product_id?: string | null
          stage?: string | null
          title?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          currency?: string | null
          estimated_value?: number | null
          id?: string
          lead_id?: string | null
          metadata?: Json | null
          owner?: string | null
          product_id?: string | null
          stage?: string | null
          title?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "opportunities_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "leads"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "opportunities_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "v_lead_summary"
            referencedColumns: ["lead_id"]
          },
          {
            foreignKeyName: "opportunities_owner_fkey"
            columns: ["owner"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "opportunities_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      organizations: {
        Row: {
          created_at: string | null
          id: string
          metadata: Json | null
          name: string
          slug: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          metadata?: Json | null
          name?: string
          slug?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          metadata?: Json | null
          name?: string
          slug?: string | null
        }
        Relationships: []
      }
      page_views: {
        Row: {
          contact_id: string | null
          created_at: string | null
          id: string
          page_id: string | null
          referrer: string | null
          url: string | null
          utm: Json | null
        }
        Insert: {
          contact_id?: string | null
          created_at?: string | null
          id?: string
          page_id?: string | null
          referrer?: string | null
          url?: string | null
          utm?: Json | null
        }
        Update: {
          contact_id?: string | null
          created_at?: string | null
          id?: string
          page_id?: string | null
          referrer?: string | null
          url?: string | null
          utm?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "page_views_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "page_views_page_id_fkey"
            columns: ["page_id"]
            isOneToOne: false
            referencedRelation: "pages"
            referencedColumns: ["id"]
          },
        ]
      }
      pages: {
        Row: {
          created_at: string | null
          id: string
          metadata: Json | null
          name: string
          page_type: string | null
          url: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          metadata?: Json | null
          name?: string
          page_type?: string | null
          url?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          metadata?: Json | null
          name?: string
          page_type?: string | null
          url?: string | null
        }
        Relationships: []
      }
      payments: {
        Row: {
          amount: number | null
          created_at: string | null
          id: string
          invoice_id: string | null
          metadata: Json | null
          method: string | null
          paid_at: string | null
        }
        Insert: {
          amount?: number | null
          created_at?: string | null
          id?: string
          invoice_id?: string | null
          metadata?: Json | null
          method?: string | null
          paid_at?: string | null
        }
        Update: {
          amount?: number | null
          created_at?: string | null
          id?: string
          invoice_id?: string | null
          metadata?: Json | null
          method?: string | null
          paid_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "payments_invoice_id_fkey"
            columns: ["invoice_id"]
            isOneToOne: false
            referencedRelation: "invoices"
            referencedColumns: ["id"]
          },
        ]
      }
      products: {
        Row: {
          category: string
          created_at: string | null
          id: string
          is_recurring: boolean | null
          metadata: Json | null
          name: string
        }
        Insert: {
          category: string
          created_at?: string | null
          id?: string
          is_recurring?: boolean | null
          metadata?: Json | null
          name: string
        }
        Update: {
          category?: string
          created_at?: string | null
          id?: string
          is_recurring?: boolean | null
          metadata?: Json | null
          name?: string
        }
        Relationships: []
      }
      subscriptions: {
        Row: {
          contact_id: string | null
          created_at: string | null
          ended_at: string | null
          id: string
          plan: string | null
          product_id: string | null
          started_at: string | null
          status: string | null
        }
        Insert: {
          contact_id?: string | null
          created_at?: string | null
          ended_at?: string | null
          id?: string
          plan?: string | null
          product_id?: string | null
          started_at?: string | null
          status?: string | null
        }
        Update: {
          contact_id?: string | null
          created_at?: string | null
          ended_at?: string | null
          id?: string
          plan?: string | null
          product_id?: string | null
          started_at?: string | null
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "subscriptions_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "subscriptions_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      team_members: {
        Row: {
          created_at: string | null
          id: string
          role: string | null
          team_id: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          role?: string | null
          team_id?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          role?: string | null
          team_id?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "team_members_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "team_members_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      teams: {
        Row: {
          created_at: string | null
          id: string
          name: string
          organization_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          name: string
          organization_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          name?: string
          organization_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "teams_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      users: {
        Row: {
          avatar_url: string | null
          created_at: string | null
          email: string
          full_name: string
          id: string
          organization_id: string | null
          role: Database["public"]["Enums"]["user_role"] | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string | null
          email: string
          full_name: string
          id?: string
          organization_id?: string | null
          role?: Database["public"]["Enums"]["user_role"] | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string | null
          email?: string
          full_name?: string
          id?: string
          organization_id?: string | null
          role?: Database["public"]["Enums"]["user_role"] | null
        }
        Relationships: [
          {
            foreignKeyName: "users_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      mv_leads_by_source: {
        Row: {
          leads_count: number | null
          source_id: string | null
          source_name: string | null
        }
        Relationships: []
      }
      v_lead_summary: {
        Row: {
          created_at: string | null
          email: string | null
          full_name: string | null
          lead_id: string | null
          source_name: string | null
          status: Database["public"]["Enums"]["lead_status"] | null
        }
        Relationships: []
      }
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      activity_type:
        | "call"
        | "meeting"
        | "message"
        | "video_view"
        | "email"
        | "note"
        | "visit"
      lead_status:
        | "new"
        | "contacted"
        | "qualified"
        | "proposal"
        | "negotiation"
        | "won"
        | "lost"
      user_role: "admin" | "manager" | "seller" | "viewer"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      activity_type: [
        "call",
        "meeting",
        "message",
        "video_view",
        "email",
        "note",
        "visit",
      ],
      lead_status: [
        "new",
        "contacted",
        "qualified",
        "proposal",
        "negotiation",
        "won",
        "lost",
      ],
      user_role: ["admin", "manager", "seller", "viewer"],
    },
  },
} as const
