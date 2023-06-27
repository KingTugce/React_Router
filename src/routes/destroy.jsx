import { redirect } from "react-router-dom";
import { deleteContact } from "../contacts";
import { action as destroyAction } from "./routes/destroy";


export async function action({ params }) {
    throw new Error("oh dang!");
    await deleteContact(params.contactId);
    return redirect("/");
}