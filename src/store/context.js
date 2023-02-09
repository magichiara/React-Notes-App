import { createContext } from "react";
import initState from "./initState";

const Context = createContext(initState);

export { Context };
