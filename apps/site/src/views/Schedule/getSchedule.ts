import { z } from "zod";
import { cache } from "react";
import { client } from "@/lib/sanity/client";
import { SanityDocument } from "@/lib/sanity/types";

const Events = z.array(
	SanityDocument.extend({
		_type: z.literal("event"),
		title: z.string(),
		location: z.string().optional(),
		virtual: z.string().url().optional(),
		startTime: z
			.string()
			.datetime()
			.transform((time) => new Date(time)),
		endTime: z
			.string()
			.datetime()
			.transform((time) => new Date(time)),
		organization: z.string().optional(),
		hosts: z.array(z.string()).optional(),
		description: z.array(
			z.object({
				_key: z.string(),
				markDefs: z.array(
					z.object({
						_type: z.string(),
						href: z.optional(z.string()),
						_key: z.string(),
					}),
				),
				children: z.array(
					z.object({
						text: z.string(),
						_key: z.string(),
						_type: z.literal("span"),
						marks: z.array(z.string()),
					}),
				),
				_type: z.literal("block"),
				style: z.literal("normal"),
			}),
		),
	}),
);

export const getSchedule = cache(async () => {
	const events = Events.parse(await client.fetch("*[_type == 'event']"));
	const eventsByDay = new Map<string, z.infer<typeof Events>>();

	events.forEach((event) => {
		eventsByDay.set(event.startTime.toLocaleDateString(), [
			...(eventsByDay.get(event.startTime.toLocaleDateString()) ?? []),
			event,
		]);
	});

	return Array.from(eventsByDay.values());
});
