"use client";

import { useState } from "react";
import { asset } from "@/lib/asset";
import { cn } from "@/lib/utils";

type Props = {
  src: string;
  alt: string;
  className?: string;
  fallback?: React.ReactNode;
  width?: number;
  height?: number;
  loading?: "eager" | "lazy";
  decoding?: "auto" | "sync" | "async";
  fetchPriority?: "high" | "low" | "auto";
};

export function AssetImage({
  src,
  alt,
  className,
  fallback,
  width,
  height,
  loading = "lazy",
  decoding = "async",
  fetchPriority,
}: Props) {
  const [errored, setErrored] = useState(false);

  if (errored && fallback !== undefined) {
    return <>{fallback}</>;
  }

  return (
    // next/image is unsuited to static export with unoptimized images and our
    // basePath helper handles the rewrite already.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={asset(src)}
      alt={alt}
      className={cn(className)}
      width={width}
      height={height}
      loading={loading}
      decoding={decoding}
      fetchPriority={fetchPriority}
      onError={() => setErrored(true)}
    />
  );
}
