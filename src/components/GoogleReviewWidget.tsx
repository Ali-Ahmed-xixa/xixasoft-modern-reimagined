import { Star } from "lucide-react";

export function GoogleReviewWidget() {
  return (
    <a
      href="https://g.page/r/CZhr3KFx0VmVEAI/review"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-16 right-4 z-50 flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2 shadow-lg hover:shadow-xl hover:border-primary/30 transition-all duration-300 group"
    >
      <div className="flex items-center gap-1">
        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
      </div>
      <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
        Review us on Google
      </span>
    </a>
  );
}
