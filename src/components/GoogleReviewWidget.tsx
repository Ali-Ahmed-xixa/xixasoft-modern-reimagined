import { useState } from "react";
import { Star, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

const reviews = [
  {
    name: "Michael S.",
    rating: 5,
    text: "Excellent service! The team delivered our JTL Shop project on time and exceeded expectations.",
    date: "2 weeks ago",
  },
  {
    name: "Anna K.",
    rating: 5,
    text: "Professional Laravel development. Very satisfied with the web application they built for us.",
    date: "1 month ago",
  },
  {
    name: "Thomas R.",
    rating: 5,
    text: "Great Google Ads management. Our conversions increased significantly.",
    date: "2 months ago",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < count ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground"
          }`}
        />
      ))}
    </div>
  );
}

export function GoogleReviewWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="fixed bottom-16 right-4 z-50"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Expanded Panel */}
      <div
        className={`absolute bottom-full right-0 mb-2 w-80 bg-card border border-border rounded-xl shadow-xl overflow-hidden transition-all duration-300 origin-bottom-right ${
          isOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-2 pointer-events-none"
        }`}
      >
        {/* Header */}
        <div className="p-4 border-b border-border bg-muted/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center shadow-sm">
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
            </div>
            <div>
              <p className="font-semibold text-foreground">Google Reviews</p>
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-foreground">4.9</span>
                <StarRating count={5} />
                <span className="text-sm text-muted-foreground">(152)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews */}
        <div className="max-h-64 overflow-y-auto">
          {reviews.map((review, index) => (
            <div key={index} className="p-4 border-b border-border last:border-b-0">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-foreground">{review.name}</span>
                <span className="text-xs text-muted-foreground">{review.date}</span>
              </div>
              <StarRating count={review.rating} />
              <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{review.text}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="p-4 bg-muted/50 border-t border-border">
          <Button asChild className="w-full">
            <a
              href="https://g.page/r/CZhr3KFx0VmVEAI/review"
              target="_blank"
              rel="noopener noreferrer"
            >
              Write a Review
              <ExternalLink className="h-4 w-4 ml-2" />
            </a>
          </Button>
        </div>
      </div>

      {/* Collapsed Widget */}
      <div className="flex items-center gap-3 bg-card border border-border rounded-xl px-4 py-3 shadow-lg hover:shadow-xl hover:border-primary/30 transition-all duration-300 cursor-pointer">
        <div className="w-8 h-8 rounded-full bg-background flex items-center justify-center shadow-sm">
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">Google Reviews</p>
          <div className="flex items-center gap-1">
            <span className="text-sm font-bold text-foreground">4.9</span>
            <StarRating count={5} />
            <span className="text-xs text-muted-foreground">| 152</span>
          </div>
        </div>
      </div>
    </div>
  );
}
