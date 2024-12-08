export interface CrudServiceProps<T> {
  endpoint: string;
  queryParams?: Record<string, string | number | boolean>;
  data?: T;
}
