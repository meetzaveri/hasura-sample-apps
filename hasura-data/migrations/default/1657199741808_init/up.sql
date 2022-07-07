SET check_function_bodies = false;
CREATE TABLE public.test_public_pg (
    id integer NOT NULL,
    name text NOT NULL
);
CREATE SEQUENCE public.test_public_pg_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.test_public_pg_id_seq OWNED BY public.test_public_pg.id;
ALTER TABLE ONLY public.test_public_pg ALTER COLUMN id SET DEFAULT nextval('public.test_public_pg_id_seq'::regclass);
ALTER TABLE ONLY public.test_public_pg
    ADD CONSTRAINT test_public_pg_pkey PRIMARY KEY (id);
