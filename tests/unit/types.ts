// types.ts
import * as pulumi from '@pulumi/pulumi';

export type TerraformConfig = {
  name: string;
  path: string;
};

export type TerraformProvider = {
  type: string;
  version: string;
  name?: string;
};

export type TerraformBackendConfig = {
  availability_zones?: string[];
  bucket?: string;
  credentials?: undefined;
  endpoint?: string;
  encrypt?: boolean;
  region?: string;
  skip_requesting_account_id?: boolean;
  skip_credentials_validation?: boolean;
  skip_get_ec2_platforms?: boolean;
  skip_metadata_api_check?: boolean;
  skip_region_validation?: boolean;
};

export type TerraformStateBackendConfig = {
  bucket?: string;
  encrypt?: boolean;
  key?: string;
  region?: string;
  skip_requesting_account_id?: boolean;
  skip_credentials_validation?: boolean;
  skip_get_ec2_platforms?: boolean;
  skip_metadata_api_check?: boolean;
  skip_region_validation?: boolean;
};

export type PulumiProjectConfig = {
  name: string;
  path: string;
};

export type PulumiProviderConfig = {
  type: string;
  version: string;
};

export type PulumiBackendConfig = {
  availability_zones?: string[];
  // pulumiBackendConfig is the backend config for pulumi
};

export type PulumiStateBackendConfig = {
  // pulumiStateBackendConfig is the state backend config for pulumi
};

export type AwsConfig = {
  region: string;
  access_key?: string;
  secret_key?: string;
  session_token?: string;
};

export type AwsBackendConfig = {
  bucket: string;
  encrypt: boolean;
  region: string;
  key?: string;
};

export type AwsStateBackendConfig = {
  bucket: string;
  encrypt: boolean;
  region: string;
  key?: string;
};

export type AwsProviderConfig = {
  region: string;
  access_key?: string;
  secret_key?: string;
  session_token?: string;
};