/*
 * Copyright (c) 2022 NOMANA-IT and/or its affiliates.
 * All rights reserved. Use is subject to license terms.
 * *
 */
import { UsersProperties } from "tools-model/loader";


/* Apps properties */
/* Properties are updated when user log into an application */
/* Data is coming from table LY_APPLICATIONS */
export class AppsProperties {
    applicationName: string;
    userProperties: UsersProperties;
    version: string;
    devMode: boolean;
  
    constructor () {
        this.applicationName = "NOMANA-IT";
        this.userProperties = new UsersProperties();
        this.version = "V1.0.0";
        this.devMode = false;
    }
  }
