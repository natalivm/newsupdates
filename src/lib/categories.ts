export const CATEGORIES = [
  "General",
  "Technology",
  "Business",
  "Sports",
  "Entertainment",
  "Health",
  "Science",
] as const;

export type Category = (typeof CATEGORIES)[number];

export const CATEGORY_COLORS: Record<string, string> = {
  General: "bg-white/10 text-white/80",
  Technology: "bg-blue-500/20 text-blue-400",
  Business: "bg-emerald-500/20 text-emerald-400",
  Sports: "bg-orange-500/20 text-orange-400",
  Entertainment: "bg-purple-500/20 text-purple-400",
  Health: "bg-red-500/20 text-red-400",
  Science: "bg-teal-500/20 text-teal-400",
};
