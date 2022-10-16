import createMDX from "@next/mdx";
import rehypeKatex from "rehype-katex";
import rehypeSlug from "rehype-slug";
import remarkMath from "remark-math";
import remarkPrism from "remark-prism";
import remarkGfm from "remark-gfm";
import remarkSectionize from "remark-sectionize";
import remarkUnwrapImages from "remark-unwrap-images";

const nextConfig = {
	reactStrictMode: false,
	experimental: { esmExternals: false },
	pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
	images: {
		domains: ["res.cloudinary.com"],
	},
};

const withMDX = createMDX({
	extension: /\.mdx?$/,
	options: {
		providerImportSource: "@mdx-js/react",
		remarkPlugins: [
			remarkUnwrapImages,
			remarkSectionize,
			remarkMath,
			remarkPrism,
			remarkGfm,
		],
		rehypePlugins: [
			rehypeSlug,
			[rehypeKatex,{strict: "ignore"}]],
	},
});

export default withMDX(nextConfig);
