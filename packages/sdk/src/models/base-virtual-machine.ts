export interface BaseVirtualMachine {
  id?: string;
  name?: string;
  location: string;
  createdAt?: Date;
  os?: OsType;
  diskSizeGB?: number;
  ramSizeGB?: number;
  cpuCores?: number;
}

interface OsType {
  type?: string;
}
