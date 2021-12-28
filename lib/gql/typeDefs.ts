/** @format */

import { gql } from 'apollo-server-express';

export const typeDefs = gql`
	type PronounType {
		pronoun: String,
		isNeo: Boolean,
		about: String
	}
  	type Pronoun {
		id: ID
		en_pronoun: PronounType
		es_pronoun: PronounType
		fr_pronoun: PronounType
		it_pronoun: PronounType
		pt_pronoun: PronounType
		eo_pronoun: PronounType
	}
	type Query {
		hello: String

		getPronouns: [Pronoun]
		getPronoun(id: ID): Pronoun
	}
	input PronounTypeInput {
		pronoun: String,
		isNeo: Boolean,
		about: String
	}
	input PronounInput {
		en_pronoun: PronounTypeInput,
		es_pronoun: PronounTypeInput,
		fr_pronoun: PronounTypeInput,
		it_pronoun: PronounTypeInput,
		pt_pronoun: PronounTypeInput,
		eo_pronoun: PronounTypeInput
	}
	type Mutation {
		createPronoun(
			pronoun: PronounInput
		): Pronoun,
		deletePronoun(id: ID): String,
		updatePronoun(id: ID, pronoun: PronounInput): Pronoun
	}
`;
