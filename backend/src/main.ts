import 'dotenv/config'
import { Application } from "./app";
import { AuthModule, SampleModule } from "./modules";

const { app, port } = Application()([
    AuthModule,
    SampleModule
]);

app.listen(port, async () => {
    console.info(`Server running at http://localhost:${ port }`);
})