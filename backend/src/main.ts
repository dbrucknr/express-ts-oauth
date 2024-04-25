import 'dotenv/config'
import { Application } from "./app";
import { AuthModule } from "./modules";

const { app, port } = Application()([
    AuthModule
]);

app.listen(port, async () => {
    console.info(`Server running at http://localhost:${ port }`);
})