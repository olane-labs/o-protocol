export interface oDependency {
  address: string;
  version: string;
  parameters: {
    [key: string]: unknown;
  };
}