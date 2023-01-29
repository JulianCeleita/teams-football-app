export interface Teams {
  count: number;
  filters: Filters;
  teams: Team[];
}

export interface Team {
  id: number;
  area: Area;
  name: string;
  shortName: string;
  tla?: string;
  crestUrl?: string;
  address: string;
  phone?: string;
  website: string;
  email?: string;
  founded?: number;
  clubColors?: string;
  venue?: string;
  lastUpdated: string;
}

export interface Area {
  id: number;
  name: string;
}

export interface Filters {
  areas: number[];
  permission: string;
}