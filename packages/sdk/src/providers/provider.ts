export abstract class Provider {
  constructor(private readonly name: string) {}

  getName(): string {
    return this.name;
  }

  abstract init(): void | Promise<void>;
}
