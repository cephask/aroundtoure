"use client";
import React from "react";
import { useMDXComponent } from "next-contentlayer/hooks";
import { Blog } from "contentlayer/generated";
import Image from "next/image";

const mdxComponents = {
  Image,
};

const RenderMdx = ({ blog }: { blog: Blog }) => {
  const MDXContent = useMDXComponent(blog.body.code);

  return (
    <div className="col-span-12  lg:col-span-8 font-in prose sm:prose-base md:prose-lg max-w-max">
      <MDXContent components={mdxComponents} />
    </div>
  );
};

export default RenderMdx;
