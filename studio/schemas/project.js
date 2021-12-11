import { MdCameraRoll } from "react-icons/md";

export default {
  name: "project",
  title: "Project",
  type: "document",
  icon: MdCameraRoll,
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
      name: "isVisible",
      title: "Show Live",
      type: "boolean",
    },
    {
      name: "isVideo",
      title: "Video Category",
      type: "boolean",
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
      name: "artworks",
      title: "Artwork",
      type: "array",
      of: [
        {
          name: "photo",
          type: "photoReference",
          title: "Photos",
        },
        {
          name: "video",
          type: "videoReference",
          title: "Videos",
        },
      ],
    },
  ],
  initialValue: {
    isVisible: false,
    isVideo: false,
  },
  preview: {
    select: {
      title: "title",
      date: "releaseDate",
      media: "poster",
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
