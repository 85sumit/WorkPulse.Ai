import { Skeleton } from "./skeleton";

const SkeletonCard = () => (
  <div className="bg-card rounded-xl p-5 card-shadow border border-border space-y-3">
    <Skeleton className="h-3 w-24" />
    <Skeleton className="h-7 w-16" />
    <Skeleton className="h-3 w-32" />
  </div>
);

export default SkeletonCard;
