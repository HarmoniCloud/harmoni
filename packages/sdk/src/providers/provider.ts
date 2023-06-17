export abstract class Provider {
  constructor(private readonly name: string) {}

  getName(): string {
    return this.name;
  }
}
