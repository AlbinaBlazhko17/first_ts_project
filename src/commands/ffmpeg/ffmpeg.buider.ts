export class FfmpegBuilder {
    private inputPath: string;
    private outputPath: string;
    private options: Map<string, string> = new Map();

    constructor() {
        this.options.set('-c:v', 'libx265');
    }

    input(inputPath: string) {
        this.inputPath = inputPath;
    }

    setVideoSize(width: number, height: number){

    }

    output(outputPath: string) {
        this.outputPath = outputPath;
    }
}