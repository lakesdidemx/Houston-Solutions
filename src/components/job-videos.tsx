import type { JobVideo } from "@/lib/media";

export function JobVideos({ videos }: { videos: JobVideo[] }) {
  if (!videos.length) return null;

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {videos.map((video) => (
        <figure
          key={video.src}
          className="overflow-hidden rounded-2xl bg-navy shadow-card"
        >
          <video
            className="aspect-[3/4] w-full bg-navy-deep object-cover"
            controls
            playsInline
            preload="metadata"
            poster={video.poster}
          >
            <source src={video.src} type="video/mp4" />
          </video>
          <figcaption className="px-4 py-3">
            <p className="font-medium text-paper">{video.title}</p>
            {video.caption ? (
              <p className="mt-1 text-sm text-paper/70">{video.caption}</p>
            ) : null}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
