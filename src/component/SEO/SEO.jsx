import { Helmet } from "react-helmet-async";

function SEO({
  title = "Saiyed Global Exports | Import & Export Company India",
  description = "Saiyed Global Exports is an Indian import-export company connecting quality Indian products with global markets.",
  keywords = "Saiyed Global Exports, Indian exporter, import export company India, agricultural products export, spices export, textile export, global trade",
  canonicalUrl = "https://www.saiyed-global-exports.com/",
  image = "https://www.saiyed-global-exports.com/og-image.jpg",
}) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Saiyed Global Exports",
    url: "https://www.saiyed-global-exports.com/",
    logo: "https://www.saiyed-global-exports.com/favicon-512.png",
    description:
      "Saiyed Global Exports connects quality Indian products with international markets.",
    email: "info@saiyedglobalexports.com",
    telephone: "+91-7867869243",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Petlad",
      addressRegion: "Gujarat",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-7867869243",
      contactType: "customer service",
      areaServed: "Worldwide",
      availableLanguage: ["English", "Hindi", "Gujarati", "Urdu"],
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Saiyed Global Exports",
    url: "https://www.saiyed-global-exports.com/",
    description,
    inLanguage: ["en", "hi", "gu", "ur"],
  };

  return (
    <Helmet>
      <html lang="en" />

      <title>{title}</title>

      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Saiyed Global Exports" />

      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />

      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Saiyed Global Exports" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content="Saiyed Global Exports" />
      <meta property="og:locale" content="en_IN" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <meta name="theme-color" content="#07182e" />
      <meta name="application-name" content="Saiyed Global Exports" />
      <meta name="apple-mobile-web-app-title" content="SGE" />

      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>

      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
    </Helmet>
  );
}

export default SEO;