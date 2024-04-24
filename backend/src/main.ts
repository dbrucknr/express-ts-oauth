import { Application } from "./app";

const { app, port } = Application()();

app.listen(port, async () => {
    console.info(`Server running at http://localhost:${ port }`);
})