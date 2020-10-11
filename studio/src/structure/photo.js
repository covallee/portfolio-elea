import S from "@sanity/desk-tool/structure-builder";

const photo = S.listItem()
  .title("Photos")
  .child(
    S.list()
      .title("Photos")
      .items([
        S.documentTypeListItem("photography").title("All photos"),
        S.listItem()
          .title("Photos by category")
          .child(
            S.documentTypeList("category")
              .title("Photos by category")
              .child((catId) =>
                S.documentList()
                  .schemaType("photography")
                  .title("Photos")
                  .filter(
                    '_type == "photography" && $catId in categories[]._ref'
                  )
                  .params({ catId })
              )
          ),
        S.divider(),
        S.documentTypeListItem("category").title("Categories"),
      ])
  );

export default photo;
