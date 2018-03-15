--
-- PostgreSQL database dump
--

-- Dumped from database version 10.1
-- Dumped by pg_dump version 10.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: Points; Type: TABLE; Schema: public; Owner: philipvalentini
--

CREATE TABLE "Points" (
    id integer NOT NULL,
    meridian character varying(255) NOT NULL,
    english_name character varying(255) NOT NULL,
    pinyin_name character varying(255) NOT NULL,
    chinese_character character varying(255) NOT NULL,
    location text NOT NULL,
    clinical_uses text NOT NULL,
    point_associations character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE "Points" OWNER TO philipvalentini;

--
-- Name: Points_id_seq; Type: SEQUENCE; Schema: public; Owner: philipvalentini
--

CREATE SEQUENCE "Points_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE "Points_id_seq" OWNER TO philipvalentini;

--
-- Name: Points_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: philipvalentini
--

ALTER SEQUENCE "Points_id_seq" OWNED BY "Points".id;


--
-- Name: Sessions; Type: TABLE; Schema: public; Owner: philipvalentini
--

CREATE TABLE "Sessions" (
    sid character varying(32) NOT NULL,
    expires timestamp with time zone,
    data text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE "Sessions" OWNER TO philipvalentini;

--
-- Name: Users; Type: TABLE; Schema: public; Owner: philipvalentini
--

CREATE TABLE "Users" (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    username character varying(255),
    salt character varying(255),
    password_hash character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE "Users" OWNER TO philipvalentini;

--
-- Name: Users_id_seq; Type: SEQUENCE; Schema: public; Owner: philipvalentini
--

CREATE SEQUENCE "Users_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE "Users_id_seq" OWNER TO philipvalentini;

--
-- Name: Users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: philipvalentini
--

ALTER SEQUENCE "Users_id_seq" OWNED BY "Users".id;


--
-- Name: Points id; Type: DEFAULT; Schema: public; Owner: philipvalentini
--

ALTER TABLE ONLY "Points" ALTER COLUMN id SET DEFAULT nextval('"Points_id_seq"'::regclass);


--
-- Name: Users id; Type: DEFAULT; Schema: public; Owner: philipvalentini
--

ALTER TABLE ONLY "Users" ALTER COLUMN id SET DEFAULT nextval('"Users_id_seq"'::regclass);


--
-- Data for Name: Points; Type: TABLE DATA; Schema: public; Owner: philipvalentini
--

COPY "Points" (id, meridian, english_name, pinyin_name, chinese_character, location, clinical_uses, point_associations, "createdAt", "updatedAt") FROM stdin;
2	LV 2	Moving Between	Xing Jian	行間	On the dorsum of the foot between the 1st and 2nd toes, proximal to the margin of the web at the junction of the red and white skin.	Generally, clears LV Fire - extreme irritability, red face/eyes/tongue.Clears Heat from the Lower Jiao - burning urination.Useful for (true heat, false cold) - lack of Qi flow to the extremities (cold hands/feet)	Ying Spring Point.Fire Point	2018-02-20 20:40:37.253-05	2018-02-20 20:40:37.253-05
10	LV 10	Foot Five Li	Zu Wu Li	足五里	3 cun below ST 30 at the proximal end of the thigh and lateral border of adductor longus (1 cun below LV 11)	Local point	None Listed	2018-02-22 17:08:30.757-05	2018-02-22 17:08:30.757-05
11	LV 11	Yin Corner	Yin Lian	陰廉	2 cun below ST 30 at the proximal end of the thigh and on the lateral border of adductor longus	Local point.The LV 9 - LV 11 area may be reactive in women with fertility problems - moxa at LV 11 may be helpful	None Listed	2018-02-22 17:15:18.518-05	2018-02-22 17:15:18.518-05
13	LV 13	Camphor Gate	Zhang Men	章門	On the lateral side of the abdomen below the free end of the 11th rib	Assist with SP Deficient signs especially from the LV invading the SP - pain and distention of the abdomen, vomiting, constipation, diarrhea (or alternating), bloating, undigested food in the bowels.Hui Meeting Point of the Zang - tonify all Zang organs.Running Piglet Disorder	Spleen Front Mu Point.Hui Meeting of the Zang.Intersection point of the LV and GB meridians	2018-02-22 17:20:41.67-05	2018-02-22 17:20:41.67-05
4	LV 4	Mound Center	Zhong Feng	中封	Anterior to the medial malleolus, midway between SP 5 and ST 41, in a depression on the medial side of the tendon of tibialis anterior.	Generally, moves stagnation and clears heat - Hepatitis, Jaundice.Lin Disorders.Medial Knee/ankle pain	Jing River Point.Metal Point	2018-02-20 20:53:37.969-05	2018-02-20 20:53:37.969-05
5	LV 5	Woodworm Canal	Li Gou	蠡溝	5 cun above the tip of the medial malleolus on the midline of the surface of the tibia	Genital Issues, especially damp-heat related infections/discharges	Luo Connecting Point	2018-02-22 16:51:12.036-05	2018-02-22 16:51:12.036-05
9	LV 9	Yin Bladder	Yin Bao	陰包	4 cun above the medial epicondyle of the femur, between vastus medialis and sartorius	Local point	None Listed	2018-02-22 17:04:52.212-05	2018-02-22 17:04:52.212-05
12	LV 12	Urgent Pulse	Ji Mai	急脈	Lateral to the pubic tubercle, lateral and inferior to ST 30, in the inguinal groove where the femoral artery is palpable, 2.5 cun lateral to the anterior midline	Local point.May be useful for groin pain	None Listed	2018-02-22 17:18:03.023-05	2018-02-22 17:18:03.023-05
14	LV 14	Cycle Gate	Qi Men	期門	On the mamillary line, directly below the nipple, 4 cun lateral to the AML in the 6th ICS	Strong effect on the middle and upper warmers - subcostal tension, chest/rib pain, LV overacting on the LU (cough, SOB).Effects LV organ, Qi/Blood stagnation - hepatitis, gallstones.Emotional imbalances - anger, irritability.Running Piglet Disorder	LV Front Mu Point.Intersection point of the LV, SP & Yin Wei Meridians	2018-02-22 17:23:08.111-05	2018-02-22 17:23:08.111-05
8	LV 8	Spring at the Bend	Qu Quan	曲泉	At the medial end of the transverse popliteal crease, posterior to the medial epicondyle of the tibia, in a depression on the anterior border of the insertions of semimembraneous and semitendoneous, with the knee flexed	Tonify LV Yin and Blood, clears excess heat patterns.Genital issues related to damp-heat - pain/swelling, retention of urine, cystitis, prostatitis, ovarian cysts.Tonify Yin from mental, physical, emotional strain.Medial knee pain.Tong Ren/Tam Healing System: Knee problems, even if on the lateral side of the knee, also useful for abdominal pain, urination issues, groin issues (itch/pain).Main treatment point of Liver Sho pattern (with KD 10) - in Japanese style Five Phase treatment protocol	He Sea Point.Water Point	2018-02-22 17:01:34.821-05	2018-02-22 17:01:34.821-05
7	LV 7	Knee Joint	Xi Guan	膝關	1 cun posterior to SP 9, posterior and inferior to the medial condyle of the tibia in the upp[er portion of the medial head of the gastrocnemius muscle.	Local point	None Listed	2018-02-22 16:57:27.685-05	2018-02-22 16:57:27.685-05
6	LV 6	Central Metropolis	Zhong Du	中都	7 cun above the tip of the medial malleolus on the midline of the medial surface of the tibia.	Acute hepatitis.Pain along the channel, genital region or medial knee	Xi Cleft	2018-02-22 16:55:30.075-05	2018-02-22 16:55:30.075-05
3	LV 3	Great Surge	Tai Chong	太沖	On the dorsum of the foot in a depression distal to the junctions of the 1st and 2nd metatarsal bones.	Generally, resolves stagnation ing for all LV Qi Stagnation / LV Yang Rising - hand tonify pathologies.LV es Yin - balanceadaches, dizziness, canker sores.Eye issues - blurred vision, red, swollen, painful eyes.Menstrual issues from Deficient Blood, Yin, Qi a/or LV Qi Stagnation - dysmennorrhea, amenorrhea, PMS, breast tenderness.Genital issues - pain/swelling, hernia, impotence, seminal emission.Stagnation in the middle warmer - subcostal tension, chest/flank pain, swellings in the axillary region.Digestive issues from LV attacking ST/SP - nausea, vomiting, constipation, diarrhea w/ undigested food.Calming point - anger, irritability, insomnia, anxiety.With LI 4, four gates treatment - powerfully effects the flow of Qi and Blood in the body.Tong Ren/Tam Healing System: Important point to descend energy in the body, generally used after qi gong exercises, energy healing sessions, etc.Helps to avoid qi gong sickness (or running fire) where energy is stuck in the upper part of the head/body and causes issues such as shortness of breath, psychological issues, headache, etc	Shu Stream Point.Earth Point.Yuan Source Point	2018-02-20 20:41:04.565-05	2018-02-20 20:41:04.565-05
1	LV 1	Large Pile	Da Dun	大敦	On the lateral side of the the big toe, .1 cun from the corner of the nail	Jing Well Point - loss of consciousness, moves Qi in the genital area.Shan Disorder - swollen genitals.Lin Disorders.Uterine/Menstrual bleeding from excess or deficiency.Emotional manifestations of LV Qi Stagnation - inappropriate emotions, depression, lethargy	Jing Well Point.Wood Point	2018-02-20 20:21:42.674-05	2018-02-20 20:21:42.674-05
\.


--
-- Data for Name: Sessions; Type: TABLE DATA; Schema: public; Owner: philipvalentini
--

COPY "Sessions" (sid, expires, data, "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: Users; Type: TABLE DATA; Schema: public; Owner: philipvalentini
--

COPY "Users" (id, name, username, salt, password_hash, "createdAt", "updatedAt") FROM stdin;
1	PJ Valentini	seidokid	$2a$10$r/mRgmNUmS/O1MP3z/Gkt.	$2a$10$r/mRgmNUmS/O1MP3z/Gkt.Vs261g98Xe0tLIDABwT.eph62lSEaAC	2018-02-15 20:24:12.172-05	2018-02-15 20:24:12.172-05
2	Ai Hua Lin	accu1	$2a$10$lxpDd3XXOVrg/85LqyAgs.	$2a$10$lxpDd3XXOVrg/85LqyAgs.XqT5KMHvvoSiHjFG/2q/HHZEd5d/zrS	2018-02-15 20:33:51.575-05	2018-02-15 20:33:51.575-05
3	Yin Yin Song	yinja	$2a$10$kqbpDk/nAMDrIoU/.nz/1u	$2a$10$kqbpDk/nAMDrIoU/.nz/1ugm332ncPmfmI7NAKwhu.io79L1c1yIO	2018-02-15 20:47:37.574-05	2018-02-15 20:47:37.574-05
4	Lou Deliz	papalou58	$2a$10$oc8azQefiRKOE4MaoH3wse	$2a$10$oc8azQefiRKOE4MaoH3wse63RpoIqDCi440VuwQlN6te98mMNAStC	2018-02-18 12:15:53.862-05	2018-02-18 12:15:53.862-05
5	Lebron James	kingjames	$2a$10$jRjcYkXwqAS0v7DK2QmBI.	$2a$10$jRjcYkXwqAS0v7DK2QmBI.VWHcaePgT.z93l9PnBuqVEP4PAqSS8i	2018-02-25 12:36:54.544-05	2018-02-25 12:36:54.544-05
6	Michael Lazarovic	dabroka	$2a$10$MgHGFrS4O9BwgNF.1a651e	$2a$10$MgHGFrS4O9BwgNF.1a651eQeAeYbTZhFPZJLZSipXvlsQlP5ghtLm	2018-03-01 14:09:35.366-05	2018-03-01 14:09:35.366-05
7	Wayne Gretzky	greatone	$2a$10$wYedejpD.67nFKk2dE6vWe	$2a$10$wYedejpD.67nFKk2dE6vWebCQjBhLjOlhTjmVMTxWVJ549xpW3J.G	2018-03-06 19:18:25.886-05	2018-03-06 19:18:25.886-05
\.


--
-- Name: Points_id_seq; Type: SEQUENCE SET; Schema: public; Owner: philipvalentini
--

SELECT pg_catalog.setval('"Points_id_seq"', 14, true);


--
-- Name: Users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: philipvalentini
--

SELECT pg_catalog.setval('"Users_id_seq"', 7, true);


--
-- Name: Points Points_pkey; Type: CONSTRAINT; Schema: public; Owner: philipvalentini
--

ALTER TABLE ONLY "Points"
    ADD CONSTRAINT "Points_pkey" PRIMARY KEY (id);


--
-- Name: Sessions Sessions_pkey; Type: CONSTRAINT; Schema: public; Owner: philipvalentini
--

ALTER TABLE ONLY "Sessions"
    ADD CONSTRAINT "Sessions_pkey" PRIMARY KEY (sid);


--
-- Name: Users Users_pkey; Type: CONSTRAINT; Schema: public; Owner: philipvalentini
--

ALTER TABLE ONLY "Users"
    ADD CONSTRAINT "Users_pkey" PRIMARY KEY (id);


--
-- Name: Users Users_username_key; Type: CONSTRAINT; Schema: public; Owner: philipvalentini
--

ALTER TABLE ONLY "Users"
    ADD CONSTRAINT "Users_username_key" UNIQUE (username);


--
-- PostgreSQL database dump complete
--

