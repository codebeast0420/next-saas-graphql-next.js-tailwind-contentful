import gql from "graphql-tag";
import apolloClient from "./apollo-client";

export async function getHeroSection() {
	const { data } = await apolloClient.query({
		query: gql`
      query GetHeroSection {
        heroSection(id: "1yzJwEvqxQhu9PBltUAnyR") {
          header
					subtext
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
        session(id: "75XEz0EeLJcugnDz1gtct6") {
          title
					description {
						json
					}
        }
      }
    `,
	});
	return data.session;
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


export default {
	getHeroSection,
	getSession,
	getAboutUs,
	getWahtYouWillGain,
	getSessionList,
	getFactAndQuote,
	getSessionAddtionalInfo,
	getSpeaker
};