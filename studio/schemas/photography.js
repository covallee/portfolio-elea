import { MdInsertPhoto } from "react-icons/md";

export default {
  name: "photography",
  title: "Photography",
  type: "document",
  icon: MdInsertPhoto,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 100,
      },
    },
    {
      name: "overview",
      title: "Overview",
      type: "blockContent",
    },
    {
      name: "releaseDate",
      title: "Release date",
      type: "datetime",
    },
    {
      name: "externalId",
      title: "External ID",
      type: "number",
    },
    {
      name: "poster",
      title: "Poster Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "categories",
      type: "array",
      title: "Categories",
      of: [
        {
          type: "reference",
          to: {
            type: "category",
          },
        },
      ],
    },
    {
      name: "photograph",
      title: "Photograph",
      type: "reference",
      to: [{ type: "photograph" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      date: "releaseDate",
      media: "poster",
      photographName0: "photographMembers.0.photograph.name",
    },
    prepare(selection) {
      const year = selection.date && selection.date.split("-")[0];

      return {
        title: `${selection.title} ${year ? `(${year})` : ""}`,
        date: selection.date,
        media: selection.media,
      };
    },
  },
};
