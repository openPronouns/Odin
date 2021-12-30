/** @format */

import { gql } from 'apollo-server-express';

export const typeDefs = gql`
	type Morphemes {
		subject: String
		object: String
		possessiveDeterminer: String
		possessive: String
		reflexive: String
		definiteArticle: String
		indefiniteArticle: String
		pluralSubject: String
		pluralObject: String
		pluralDefiniteArticle: String
		pluralIndefiniteArticle: String
		inflection: String
		inflectionC: String
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
	type User {
		id: ID
		username: String!
		displayName: String
		email: String
		password: String
		pronouns: [ID]
		isAdmin: Boolean
		isModerator: Boolean
	}
	type Query {
		hello: String

		getPronouns: [Pronoun]
		getPronoun(id: ID): Pronoun
		getUsers: [User]
	}
	input MorphemesInput {
		subject: String
		object: String
		possessiveDeterminer: String
		possessive: String
		reflexive: String
		definiteArticle: String
		indefiniteArticle: String
		pluralSubject: String
		pluralObject: String
		pluralDefiniteArticle: String
		pluralIndefiniteArticle: String
		inflection: String
		inflectionC: String
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
		similarTo: [ID]
	}
	input UserInput {
		username: String!
		displayName: String
		email: String
		pronouns: [ID]
		isAdmin: Boolean
		isModerator: Boolean
	}
	type Mutation {
		# Pronouns
		createPronoun(pronoun: PronounInput, KEY: String): Pronoun
		deletePronoun(id: ID, KEY: String): String
		updatePronoun(id: ID, pronoun: PronounInput, KEY: String): Pronoun

		# Users
		createUser(user: UserInput, KEY: String): User
		deleteUser(id: ID, KEY: String): String
		updateUser(id: ID, user: UserInput, KEY: String): User
	}
`;
