"use client";

import { useState, useEffect } from "react";
import { NewsItem } from "@/lib/types";

import { CATEGORIES } from "@/lib/categories";

interface NewsFormProps {
  initialValues?: NewsItem;
  onSubmit: (item: Omit<NewsItem, "id" | "createdAt" | "updatedAt">) => void;
  onCancel: () => void;
}

export default function NewsForm({ initialValues, onSubmit, onCancel }: NewsFormProps) {
  const [title, setTitle] = useState(initialValues?.title ?? "");
  const [content, setContent] = useState(initialValues?.content ?? "");
  const [category, setCategory] = useState(initialValues?.category ?? "General");

  useEffect(() => {
    setTitle(initialValues?.title ?? "");
    setContent(initialValues?.content ?? "");
    setCategory(initialValues?.category ?? "General");
  }, [initialValues]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;
    onSubmit({ title: title.trim(), content: content.trim(), category });
  };

  const isEditing = !!initialValues;

  return (
    <div className="relative overflow-hidden bg-card rounded-lg border border-card-border p-6 card-glow">
      <h2 className="font-display text-2xl tracking-wide text-white mb-6">
        {isEditing ? "EDIT UPDATE" : "ADD UPDATE"}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Title */}
        <div>
          <label className="block text-xs font-mono tracking-widest uppercase text-muted mb-2" htmlFor="title">
            Title <span className="text-accent">*</span>
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter news title..."
            required
            className="w-full px-4 py-3 bg-surface border border-card-border rounded text-sm text-white placeholder-muted/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-colors"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-xs font-mono tracking-widest uppercase text-muted mb-2" htmlFor="category">
            Category
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-3 bg-surface border border-card-border rounded text-sm text-white focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-colors"
          >
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        {/* Content */}
        <div>
          <label className="block text-xs font-mono tracking-widest uppercase text-muted mb-2" htmlFor="content">
            Content <span className="text-accent">*</span>
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your news content here..."
            required
            rows={6}
            className="w-full px-4 py-3 bg-surface border border-card-border rounded text-sm text-white placeholder-muted/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-colors resize-y"
          />
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-3 pt-2">
          <button
            type="button"
            onClick={onCancel}
            className="px-5 py-2.5 text-sm font-semibold text-muted bg-transparent border border-card-border rounded tracking-wide uppercase hover:text-white hover:border-white/20 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-5 py-2.5 text-sm font-semibold text-white bg-accent rounded tracking-wide uppercase hover:bg-accent-light transition-colors"
          >
            {isEditing ? "Save Changes" : "Publish"}
          </button>
        </div>
      </form>
    </div>
  );
}
