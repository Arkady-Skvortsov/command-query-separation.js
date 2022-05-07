abstract class CQS {
  public abstract execute(command: string, ...params: any): Function;
}

export { CQS };
