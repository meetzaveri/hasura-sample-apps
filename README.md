Repro for [Ticket 5095](https://hasurahelp.zendesk.com/agent/tickets/5095)

To bring it up run `docker compose up -d`

To reset the project run `docker compose down && docker volume prune -f && docker compose up -d`

You will need to install the [hasura cli](https://hasura.io/docs/latest/graphql/core/hasura-cli/install-hasura-cli/)

Things to try:

Enable/disable the metadata database by (un)commenting the `HASURA_GRAPHQL_METADATA_DATABASE` line in docker-compose.yaml. This requires a reset.

If using the metadata database and config v2, you may need to create the `hdb_catalog` schema in the `userdb` database.
```sql
CREATE SCHEMA hdb_catalog;
```
You can cd into the v2 and v3 directories and run all the typical hasura cli commands:

```bash
hasura metadata export
hasura metadata apply
hasura migrate apply
hasura migrate apply --down all
hasura migrate status
hasura metadata reload
```

