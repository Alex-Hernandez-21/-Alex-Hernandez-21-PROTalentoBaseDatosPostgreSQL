
CREATE TABLE IF NOT EXISTS public.vehicles
(
    vehicle_id serial NOT NULL,
    model character varying NOT NULL,
    price numeric NOT NULL,
    discount numeric,
    "enginePower" character varying NOT NULL,
    "cylinderCapacity" character varying NOT NULL,
    "FK_model_id" integer NOT NULL,
    "FK_brand_id" integer NOT NULL,
    PRIMARY KEY (vehicle_id)
);

CREATE TABLE IF NOT EXISTS public.models
(
    model_id serial NOT NULL,
    name character varying NOT NULL,
    PRIMARY KEY (model_id)
);

CREATE TABLE IF NOT EXISTS public.extras
(
    extra_id serial NOT NULL,
    "airConditioning" character varying NOT NULL,
    "airbagCopilot" character varying NOT NULL,
    "specialPaint" character varying NOT NULL,
    stereo character varying NOT NULL,
    price numeric NOT NULL,
    "airbagDrive" character varying NOT NULL,
    "centerBlock" character varying NOT NULL,
    "FK_model_id" integer NOT NULL,
    PRIMARY KEY (extra_id)
);

CREATE TABLE IF NOT EXISTS public.stock
(
    stock_id serial NOT NULL,
    amount integer NOT NULL,
    vehicle_id integer NOT NULL,
    "FK_storePrincipal" integer NOT NULL,
    PRIMARY KEY (stock_id)
);

CREATE TABLE IF NOT EXISTS public."storePrincipal"
(
    "storePrincipal_id" serial NOT NULL,
    name character varying NOT NULL,
    address character varying NOT NULL,
    "Nit" character varying NOT NULL,
    PRIMARY KEY ("storePrincipal_id")
);

CREATE TABLE IF NOT EXISTS public."officialService"
(
    "officialService_id" serial NOT NULL,
    name character varying NOT NULL,
    address character varying NOT NULL,
    "Nit" character varying NOT NULL,
    "FK_storePrincipal_id" integer NOT NULL,
    PRIMARY KEY ("officialService_id")
);

CREATE TABLE IF NOT EXISTS public.sellers
(
    seller_id serial NOT NULL,
    name character varying NOT NULL,
    document character varying NOT NULL,
    email character varying NOT NULL,
    address character varying NOT NULL,
    "FK_officialService_id" integer NOT NULL,
    PRIMARY KEY (seller_id)
);

CREATE TABLE IF NOT EXISTS public.sales
(
    sale_id serial NOT NULL,
    price numeric NOT NULL,
    "paymentMethod" character varying NOT NULL,
    "Deadline" date NOT NULL,
    enrollment character varying NOT NULL,
    "FK_seller_id" integer NOT NULL,
    "FK_vehicle" integer NOT NULL,
    PRIMARY KEY (sale_id)
);

CREATE TABLE IF NOT EXISTS public.brands
(
    brand_id serial NOT NULL,
    name character varying,
    PRIMARY KEY (brand_id)
);

ALTER TABLE IF EXISTS public.vehicles
    ADD CONSTRAINT "FK_model_id" FOREIGN KEY ("FK_model_id")
    REFERENCES public.models (model_id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.vehicles
    ADD CONSTRAINT "FK_brand_id" FOREIGN KEY ("FK_brand_id")
    REFERENCES public.brands (brand_id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.extras
    ADD CONSTRAINT "FK_model_id" FOREIGN KEY ("FK_model_id")
    REFERENCES public.models (model_id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.stock
    ADD CONSTRAINT vehicle_id FOREIGN KEY (vehicle_id)
    REFERENCES public.vehicles (vehicle_id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.stock
    ADD CONSTRAINT "FK_storePrincipal" FOREIGN KEY ("FK_storePrincipal")
    REFERENCES public."storePrincipal" ("storePrincipal_id") MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public."officialService"
    ADD CONSTRAINT "FK_storePrincipal" FOREIGN KEY ("FK_storePrincipal_id")
    REFERENCES public."storePrincipal" ("storePrincipal_id") MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.sellers
    ADD CONSTRAINT "FK_officialService" FOREIGN KEY ("FK_officialService_id")
    REFERENCES public."officialService" ("officialService_id") MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.sales
    ADD CONSTRAINT "FK_seller_id" FOREIGN KEY ("FK_seller_id")
    REFERENCES public.sellers (seller_id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.sales
    ADD CONSTRAINT "FK_vehicle_id" FOREIGN KEY ("FK_vehicle")
    REFERENCES public.vehicles (vehicle_id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;

