import { defineType } from "sanity";

export const product = defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      validation: (rule) => rule.required(),
      type: "string",
    },
    {
      name: "slug", 
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 200 },
      validation: (rule) => rule.required(),
    },
    {
      name: "description",
      type: "text",
      validation: (rule) => rule.required(),
      title: "Description",
    },
    {
      name: "productImage",
      type: "image",
      validation: (rule) => rule.required(),
      title: "Product Image",
      options: { hotspot: true },
    },
    {
      name: "price",
      type: "number",
      validation: (rule) => rule.required().min(0),
      title: "Price",
    },
    {
      name: "tags",
      type: "array",
      title: "Tags",
      of: [{ type: "string" }],
    },
    {
      name: "discountPercentage",
      type: "number",
      title: "Discount Percentage",
      validation: (rule) => rule.min(0).max(100),
    },
    {
      name: "isNew",
      type: "boolean",
      title: "New Badge",
    },
    {
      name: "category", 
      type: "string",
      title: "Category",
      options: {
        list: [
          { title: "Chair", value: "chair" },
          { title: "Table", value: "table" },
          { title: "Sofa", value: "sofa" },
          { title: "Bed", value: "bed" },
        ],
      },
    },
  ],
});
