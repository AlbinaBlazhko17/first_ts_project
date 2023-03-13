export class FfmpegBuilder {
    constructor() {
        this.options = new Map();
        this.options.set('-c:v', 'libx265');
    }
    input(inputPath) {
        this.inputPath = inputPath;
    }
    setVideoSize(width, height) {
    }
    output(outputPath) {
        this.outputPath = outputPath;
    }
}
