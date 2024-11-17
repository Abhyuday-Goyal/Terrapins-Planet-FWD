SCHEMA ="""
Table: a_company
--------------------------------------------------------------------------------
Columns:
Column Name          Data Type       Length     Default              Nullable
--------------------------------------------------------------------------------
id                   character varying 255        N/A                  NO
item                 character varying 255        N/A                  NO
mass                 integer         N/A        N/A                  NO
recyclable           boolean         N/A        N/A                  NO
biodegradable        boolean         N/A        N/A                  NO
amount               double precision N/A        N/A                  NO
comments             character varying 255        N/A                  NO
emissions            double precision N/A        N/A                  NO

Primary Keys:
- id

Foreign Keys:

Indexes:
- a_company_pkey:
  CREATE UNIQUE INDEX a_company_pkey ON public.a_company USING btree (id)"""
