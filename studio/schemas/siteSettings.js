export default {
  name: "siteSettings",
  type: "document",
  title: "Site Settings",
  __experimental_actions: ["update", /*'create', 'delete', */ "publish"],
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      title: "Main Photograph",
      name: "mainPhotograph",
      type: "reference",
      to: [{ type: "photograph" }],
    },
    {
      title: "Home Page Project",
      name: "mainProject",
      type: "reference",
      to: [{ type: "project" }],
    },
    {
      title: "Open graph",
      name: "openGraph",
      description: "These will be the default meta tags on all pages",
      type: "openGraph",
    },
  ],
};
