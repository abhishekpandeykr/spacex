export interface IFilter {
  launch_year: string | number;
  launch_success: string | number | boolean;
  land_success: string | number | boolean;
}

export interface IFIlterValues {
  year?: number | string;
  selectable: boolean;
  value?: string | boolean;
}
