const initState = {
  projects: [
    {
      id: "1",
      title: "Jungle Jane",
      content: "Long Wear Eye Liner\n  Powder Water Soluble",
    },
    {
      id: "2",
      title: "Tinted Lids",
      content: "Long Wear Eyeliner\n  Powder Water Soluble",
    },
    {
      id: "3",
      title: "Illusive",
      content: "Long Wear Eyeliner\n  Powder Water Soluble",
    },
  ],
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project", action.project);
      return state;

      case "CREATE_PROJECT_ERROR":
        console.log("created project error", action.err);
        return state;
        default: return state;
  }     

};

export default projectReducer;
