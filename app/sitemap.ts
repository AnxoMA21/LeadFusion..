export default function sitemap() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://leadfusion.vercel.app";
  const now = new Date();
  return [
    { url: `${base}/`, lastModified: now },
    { url: `${base}/link-in-bio`, lastModified: now }
  ];
}
