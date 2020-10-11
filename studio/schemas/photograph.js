import { MdPerson } from "react-icons/md";

export default {
  name: "photograph",
  title: "Photograph",
  type: "document",
  icon: MdPerson,
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      description: 'Please use "Firstname Lastname" format',
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 100,
      },
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      title: "Social Graph",
      name: "socials",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Link Title",
              type: "string",
              options: {
                list: [
                  { title: "Instagram", value: "Insta" },
                  { title: "Vimeo", value: "Vimeo" },
                  { title: "Youtube", value: "Youtube" },
                  { title: "Facebook", value: "Facebook" },
                ],
              },
            },
            {
              name: "url",
              title: "Link URL",
              type: "url",
            },
          ],
        },
      ],
    },
    {
      name: "bio",
      type: "bioPortableText",
      title: "Biography",
    },
    {
      name: "education",
      type: "blockContent",
      title: "Education",
    },
    {
      name: "exhibitions",
      type: "blockContent",
      title: "Exhibitions",
    },
    {
      name: "publications",
      type: "blockContent",
      title: "Publications",
    },
  ],
  preview: {
    select: { title: "name", media: "image" },
  },
};
