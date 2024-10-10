import { PortableText } from "@portabletext/react";
import { client } from "@/lib/sanity/client";
import imageUrlBuilder from "@sanity/image-url";

import { getResources } from "../../getResources";
import ResourceCard from "../../components/ResourceCard/ResourceCard";
import HeadingCard from "../../components/HeadingCard/HeadingCard";

import styles from "./ApiResources.module.scss";

async function ApiResources() {
	const resources = await getResources("api");
	return (
		<div className="container">
			<HeadingCard
				title="API Resources"
				description="Application Programming Interface (API) are interfaces or
					communication protocol that simplifies implementation and maintenance
					of software. In order to access most API's, many languages use
					HTTP protocol to communicate with the servers that host the API and
					retrieve data."
			/>

			<div className={styles["bottom-spacer"] + " row"}>
				{/* Sticky Notes */}
				{resources.map(
					({ _id, title, description, link, logo, stickyNoteColor }) => (
						<div className={styles.column + " col"} key={_id}>
							<ResourceCard
								title={title}
								description={<PortableText value={description} />}
								stickerSrc={imageUrlBuilder(client).image(logo).url()}
								links={[{ text: "API Reference", link: link }]}
								stickyNoteColor={stickyNoteColor.hex}
							/>
						</div>
					),
				)}
			</div>
		</div>
	);
}

export default ApiResources;
