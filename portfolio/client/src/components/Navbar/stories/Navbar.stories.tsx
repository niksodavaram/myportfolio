import Navbar from "../Navbar";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Navigation/Navbar",
  component: Navbar,
  decorators: [
    (Story: any) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export const Default = {};