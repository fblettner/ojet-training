/*
 * Copyright (c) 2022 NOMANA-IT and/or its affiliates.
 * All rights reserved. Use is subject to license terms.
 * *
 */


/* User properties */
/* Properties are updated when user log into an application */
/* Data is coming from table LY_USERS */
export class UsersProperties {
    status: boolean;
    id: string;
    name: string;
    email: string;
  
    constructor( ) {
        this.status = false;
        this.id = "";
        this.name = "";
        this.email = "";
    }

    public setUsers = (status: boolean, id: string, name: string, email: string) => {
        this.status = status;
        this.id = id;
        this.name = name;
        this.email = email
    }
  }