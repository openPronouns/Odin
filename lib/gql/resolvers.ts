/** @format */

import { Pronoun } from '../../models';
import {KEY as masterKey} from '../../src/vars';

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
		createPronoun: async (_parent, args, _context, _info) => {
			if (args.KEY !== masterKey) {
				throw new Error('Invalid KEY');
			} else {
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
			}
		},

		deletePronoun: async (_parent, {KEY, id}, _context, _info) => {
			if (KEY !== masterKey) {
				throw new Error('Invalid KEY');
			} else {
				await Pronoun.findByIdAndRemove(id);
				return `Pronoun deleted (id: ${id})`;
			}
		},

		updatePronoun: async (_parent, { id, pronoun, KEY }, _context, _info) => {
			if (KEY !== masterKey) {
				throw new Error('Invalid KEY');
			} else {
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
			}
		},
	},
};
