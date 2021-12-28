/** @format */

import { Pronoun } from '../../models';

export const resolvers = {
	Query: {
		hello: () => 'Hello world!',
		getPronouns: async () => {
			return await Pronoun.find();
		},
		getPronoun: async (root, { id }) => {
			return await Pronoun.findById(id);
		},
	},
	Mutation: {
		createPronoun: async (parent, args, context, info) => {
			const {
				en_pronoun,
				es_pronoun,
				fr_pronoun,
				it_pronoun,
				pt_pronoun,
				eo_pronoun,
			} = args.pronoun;
			const pronoun = new Pronoun({
				en_pronoun,
				es_pronoun,
				fr_pronoun,
				it_pronoun,
				pt_pronoun,
				eo_pronoun,
			});
			await pronoun.save();
			return pronoun;
		},

		deletePronoun: async (parent, { id }, context, info) => {
			await Pronoun.findByIdAndRemove(id);
			return `Pronoun deleted (id: ${id})`;
		},

		updatePronoun: async (parent, { id, pronoun }, context, info) => {
			const {
				en_pronoun,
				es_pronoun,
				fr_pronoun,
				it_pronoun,
				pt_pronoun,
				eo_pronoun,
            } = pronoun;

			const updatedPronoun = await Pronoun.findByIdAndUpdate(
				id,
				{
					en_pronoun,
					es_pronoun,
					fr_pronoun,
					it_pronoun,
					pt_pronoun,
					eo_pronoun,
				},
				{ new: true }
			);

			return updatedPronoun;
		},
	},
};
