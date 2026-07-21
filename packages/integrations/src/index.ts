export interface IntegrationProvider {
  readonly name: string;
  isConfigured(): boolean;
}
