export interface ILaunces {
  crew?: string;
  launch_date_utc: number;
  links: ILinks;
  mission_name: string;
  launch_year: string;
  launch_success: string | boolean;
  mission_id: [];
}

export interface ILinks {
  article_link: string;
  mission_patch: string;
  mission_patch_small: string;
  wikipedia: string;
}
