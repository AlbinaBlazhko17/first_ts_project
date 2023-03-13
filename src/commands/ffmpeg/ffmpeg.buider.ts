export class FfmpegBuilder {
    private inputPath: string;
    private outputPath: string;
    private options: Map<string, string> = new Map();

    constructor() {
        this.options.set('-c:v', 'libx265');
    }

    input(inputPath: string): this {
        this.inputPath = inputPath;
        return this;
    }

    setVideoSize(width: number, height: number): this{
        this.options.set('-s', `${width}x${height}`);
        return this;
    }

    output(outputPath: string): string[] {
        if(!this.inputPath) throw new Error('Doesn`t exist parametr input');
        const args: string[] = ['-i', this.inputPath];
        this.options.forEach((value, key) => {
            args.push(key);
            args.push(value);
        });
        args.push(outputPath);
        return args;
    }
}