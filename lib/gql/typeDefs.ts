/** @format */

import { gql } from 'apollo-server-express';

export const typeDefs = gql`
	type Morphemes {
		subject: String
		object: String
		possessiveDeterminer: String
		possessive: String
		reflexive: String
	}
	type Pronoun {
		id: ID
		canonicalName: String
		name: String
		description: String
		language: String
		normative: Boolean
		plural: Boolean
		morphemes: Morphemes
		examples: [String]
		similarTo: [ID]
	}
	type Query {
		hello: String

		getPronouns: [Pronoun]
		getPronoun(id: ID): Pronoun
	}
	input MorphemesInput {
		subject: String
		object: String
		possessiveDeterminer: String
		possessive: String
		reflexive: String
	}
	input PronounInput {
		canonicalName: String
		name: String
		description: String
		language: String
		normative: Boolean
		plural: Boolean
		morphemes: MorphemesInput
		examples: [String]
		similarTo: [String]
	}
	type Mutation {
		createPronoun(pronoun: PronounInput, KEY: String): Pronoun
		deletePronoun(id: ID, KEY: String): String
		updatePronoun(id: ID, pronoun: PronounInput, KEY: String): Pronoun
	}
`;
