import createMDX from "@next/mdx";
import rehypeHighlight from "rehype-highlight";

const mdx = createMDX({
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: [rehypeHighlight],
  },
});

const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

export default mdx(nextConfig);
