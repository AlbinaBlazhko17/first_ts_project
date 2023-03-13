import { FfmpegExecutor } from "./commands/ffmpeg/ffmpeg.executor.js";
import { PromptService } from "./core/prompt/prompt.service.js";
import { ConsoleLogger } from "./out/console/console.logger.js";

export class App {
    async run() {
        new FfmpegExecutor(ConsoleLogger.getInstance()).execute();
    }
}

const app = new App();
app.run();