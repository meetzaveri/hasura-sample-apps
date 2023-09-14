SET check_function_bodies = false;
CREATE TABLE public.customer (
    id integer NOT NULL,
    first_name text,
    last_name text,
    email text,
    phone text,
    username text,
    ip_address text
);
CREATE TABLE public."order" (
    id integer NOT NULL,
    transaction_id text,
    product text,
    purchase_price text,
    discount_price text,
    order_date text,
    customer_id integer
);
ALTER TABLE ONLY public.customer
    ADD CONSTRAINT customer_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public."order"
    ADD CONSTRAINT order_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public."order"
    ADD CONSTRAINT order_customer_id_fkey FOREIGN KEY (customer_id) REFERENCES public.customer(id);
