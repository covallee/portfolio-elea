import S from "@sanity/desk-tool/structure-builder";
import photo from "./photo";
import { MdSettings } from "react-icons/md";

export default () =>
  S.list()
    .title("Content")
    .items([
      S.documentListItem()
        .schemaType("siteSettings")
        .title("Site settings")
        .icon(MdSettings)
        .child(
          S.document()
            .schemaType("siteSettings")
            .documentId("siteSettings")
            .views([S.view.form()])
        ),
      photo,
      S.documentTypeListItem("project").title("Project"),
      S.documentTypeListItem("photograph").title("Photograph"),
    ]);
