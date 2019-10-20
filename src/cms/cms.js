import CMS from "netlify-cms-app";
import AboutPagePreview from "./preview-templates/DatenschutzPagePreview";
import BlogPostPreview from "./preview-templates/BlogPostPreview";
import ProductPagePreview from "./preview-templates/ImpressumPagePreview";

CMS.registerPreviewTemplate("datenschutz", AboutPagePreview);
CMS.registerPreviewTemplate("impressum", ProductPagePreview);
CMS.registerPreviewTemplate("blog", BlogPostPreview);
