import { aboutItems, contactItems, projectItems, pages } from "./db";

const resolvers = {
    Query: {
        aboutItems: (parent, args, context, info) => {
          return aboutItems;
        },
        contactItems: (parent, args, context, info) => {
          return contactItems;
        },
        projectItems: (parent, args, context, info) => {
          return projectItems;
        },
        page: (parent, {title}, context, info) => {
          return pages.find((page) => page.title === title)
        }
      },
};

export default resolvers;