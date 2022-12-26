import gql from "graphql-tag";
import apolloClient from "./apollo-client";

export async function getHeroSection() {
	const { data } = await apolloClient.query({
		query: gql`
      query GetHeroSection {
        heroSection(id: "1yzJwEvqxQhu9PBltUAnyR") {
          header
					subtext
					ctaButtonText
					image {
						url
					}
        }
      }
    `,
	});
	return data.heroSection;
}

export async function getSession() {
	const { data } = await apolloClient.query({
		query: gql`
      query GetSession {
				sessionCollection {
					items {
							title
								description {
									json
								}
						speakersCollection {
							items {
								name
								background
							}
						}
						banner {
							url
						}
						startTime
						endTime
					}
				}
      }
    `,
	});
	return data.sessionCollection;
}

export async function getAboutUs() {
	const { data } = await apolloClient.query({
		query: gql`
      query GetAboutUs {
				aboutUs(id: "2xp1jbeqrk2m6QxlAfJgYR") {
					header
					studentLeadersHeader
					subheading
					studentLeadersCollection{
						items {
							name
							position
							description
						}
					}
					body {
						json
					}
				}
      }
    `,
	});
	return data.aboutUs;
}

export async function getResources() {
	const { data } = await apolloClient.query({
		query: gql`
      query GetResources {
				resource(id:"6fnUwcyDd2Nf5aMOdOsscf") {
					title
					description
					tags
				}
      }
    `,
	});
	return data.resource;
}

export async function getLandingAboutUs() {
	const { data } = await apolloClient.query({
		query: gql`
      query GetLandingAboutUs {
				landingPageAboutUs(id:"2KY6vzVKltC2HHaWXfPJKo") {
					preHeader
					header
					body {
						json
					}
					ctaText
					collageImagesCollection {
						items {
							url
						}
					}
				}
      }
    `,
	});
	return data.landingPageAboutUs;
}

export async function getWahtYouWillGain() {
	const { data } = await apolloClient.query({
		query: gql`
      query GetWhatYouWillGain {
				landingPageWhatYouWillGain(id: "3kfCXrGNjGFKAZZ3ASMd8R") {
					preHeader
					header
					body {
						json
					}
					topicsHeader
					topics
				}
      }
    `,
	});
	return data.landingPageWhatYouWillGain;
}

export async function getSessionList() {
	const { data } = await apolloClient.query({
		query: gql`
      query GetSessionList {
				landingPageSessions(id: "2PNPQcNJtVPJH2Rjtm8RWx") {
					preHeader
					header
				}
      }
    `,
	});
	return data.landingPageSessions;
}

export async function getFactAndQuote() {
	const { data } = await apolloClient.query({
		query: gql`
      query GetFactAndQuote {
				landingPageFactsAndQuotes(id: "5Cx6Vy0dvH25X33xxDswPj") {
					header
					description
				}
      }
    `,
	});
	return data.landingPageFactsAndQuotes;
}

export async function getSessionAddtionalInfo() {
	const { data } = await apolloClient.query({
		query: gql`
      query GetSessionAddtionalInfo {
				sessionAdditionalInfoSectionCollection {
					items {
					 header
					 body {
						 json 
					 }
				 }
			 }
      }
    `,
	});
	return data.sessionAdditionalInfoSectionCollection;
}


export async function getSpeaker() {
	const { data } = await apolloClient.query({
		query: gql`
			query GetSpeaker {
				speakerCollection{
					items {
						name
						background
					}
				}
			}
		`,
	});
	return data.speakerCollection;
}

export async function getFactCard() {
	const { data } = await apolloClient.query({
		query: gql`
			query GetFactCard {
				factCard(id:"4w1avLxcr039mFrbHIc7DN"){
					body
				}
			}
		`,
	});
	return data.factCard;
}

export async function getQuoteCard() {
	const { data } = await apolloClient.query({
		query: gql`
			query GetQuoteCard {
				quoteCard(id:"7EjzNolwAByOex6Z8Zliaj") {
					body
					creator {
						name
						background
						image {
							url
						}
					}
				}
			}
		`,
	});
	return data.quoteCard;
}

export default {
	getHeroSection,
	getSession,
	getAboutUs,
	getWahtYouWillGain,
	getSessionList,
	getFactAndQuote,
	getSessionAddtionalInfo,
	getSpeaker,
	getResources
};