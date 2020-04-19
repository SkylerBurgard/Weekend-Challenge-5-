CREATE TABLE "feedback" (
	"id" serial primary key,
	"understanding" INT not null,
	"support" INT not null,
	"comments" text,
	"feeling" INT not null, 
	"date" date not null default CURRENT_DATE
);