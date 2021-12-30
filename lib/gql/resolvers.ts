/** @format */

import { Pronoun } from '../../models';
import { KEY as masterKey } from '../../src/vars';

export const resolvers = {
	Query: {
		hello: () => 'Hello world!',
		getPronouns: async () => {
			return await Pronoun.find();
		},
		getPronoun: async (_root, { id }) => {
			return await Pronoun.findById(id);
		},
	},
	Mutation: {
		createPronoun: async (_parent, args) => {
			if (args.KEY !== masterKey) {
				throw new Error('Invalid KEY');
			} else {
				const {
					canonicalName,
					name,
					description,
					language,
					normative,
					plural,
					morphemes,
					examples,
					similarTo,
				} = args.pronoun;
				const pronoun = new Pronoun({
					canonicalName,
					name,
					description,
					language,
					normative,
					plural,
					morphemes,
					examples,
					similarTo,
				});
				await pronoun.save();
				return pronoun;
			}
		},

		deletePronoun: async (_parent, { KEY, id }) => {
			if (KEY !== masterKey) {
				throw new Error('Invalid KEY');
			} else {
				await Pronoun.findByIdAndRemove(id);
				return `Pronoun deleted (id: ${id})`;
			}
		},

		updatePronoun: async (
			_parent,
			{ id, pronoun, KEY },
		) => {
			if (KEY !== masterKey) {
				throw new Error('Invalid KEY');
			} else {
				const {
					canonicalName,
					name,
					description,
					language,
					normative,
					plural,
					morphemes,
					examples,
					similarTo,
				} = pronoun;

				const updates: any = {}
				if (canonicalName !== undefined) {
					updates.canonicalName = canonicalName;
				}
				if (name !== undefined) {
					updates.name = name;
				}
				if (description !== undefined) {
					updates.description = description;
				}
				if (language !== undefined) {
					updates.language = language;
				}
				if (normative !== undefined) {
					updates.normative = normative;
				}
				if (plural !== undefined) {
					updates.plural = plural;
				}
				if (morphemes !== undefined) {
					updates.morphemes = morphemes;
				}
				if (examples !== undefined) {
					updates.examples = examples;
				}
				if (similarTo !== undefined) {
					updates.similarTo = similarTo;
				}

				const updatedPronoun = await Pronoun.findByIdAndUpdate(
					id,
					updates,
					{ new: true }
				);

				return updatedPronoun;
			}
		},
	},
};
